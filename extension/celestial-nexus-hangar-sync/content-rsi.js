(() => {
  const SNAPSHOT_KEY = 'celestialNexusHangarSnapshotV1';
  const VERSION = '1.2.1';
  const GENERIC_LINES = new Set([
    'my hangar','hangar','pledges','pledge','ship upgrades','upgrade','reclaim','gift','exchange','apply upgrade',
    'also contains','contains','view details','close','search','sort by','filter','insurance','attributed','created',
    'game package','standalone ship','warbond','download','more info','package'
  ]);
  const CARD_SELECTORS = [
    '[data-pledge-id]','.js-pledge','.pledge','.pledge-item','.hangar-item','.js-hangar-item',
    '[class*="pledge-card"]','[class*="hangar-item"]','[class*="pledge_item"]','.items-container > .item'
  ];
  const TITLE_SELECTORS = [
    '[data-item-name]','[data-ship-name]','[data-name]','.js-title','.pledge-title','.item-title','.title','.name',
    'h1','h2','h3','h4','h5','strong'
  ];

  const clean = value => String(value || '').replace(/\s+/g,' ').trim();
  const lineKey = value => clean(value).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const plausible = value => {
    const text = clean(value), key = lineKey(text);
    if (!text || text.length < 2 || text.length > 90 || GENERIC_LINES.has(key)) return false;
    if (/^(?:\$|usd|eur|gbp|store credit|value|melt value|order|date|page|showing|items? per page)/i.test(text)) return false;
    if (/^\d+(?:\.\d+)?(?:\s*(?:usd|eur|gbp|months?|years?|days?))?$/i.test(text)) return false;
    if (/^(?:lti|lifetime insurance|\d+[- ]month insurance)$/i.test(text)) return false;
    if (text.split(' ').length > 12) return false;
    return /[a-z]/i.test(text);
  };
  const unique = values => [...new Map(values.filter(plausible).map(value => [lineKey(value), clean(value)])).values()];

  function cardNodes() {
    const nodes = [];
    CARD_SELECTORS.forEach(selector => {
      try { document.querySelectorAll(selector).forEach(node => nodes.push(node)); } catch (_) {}
    });
    const uniqueNodes = [...new Set(nodes)].filter(node => node instanceof HTMLElement && node.innerText?.trim());
    return uniqueNodes.filter(node => !uniqueNodes.some(other => other !== node && other.contains(node) && other.innerText.length < node.innerText.length * 1.25));
  }

  function titleFor(card) {
    for (const selector of TITLE_SELECTORS) {
      let node;
      try { node = card.matches(selector) ? card : card.querySelector(selector); } catch (_) { node = null; }
      const dataName = node?.dataset?.itemName || node?.dataset?.shipName || node?.dataset?.name;
      const value = clean(dataName || node?.textContent || '');
      if (plausible(value)) return value;
    }
    const first = card.innerText.split(/\r?\n/).map(clean).find(plausible);
    return first || 'RSI Hangar Pledge';
  }

  function insuranceFor(text) {
    const lines = String(text || '').split(/\r?\n/).map(clean).filter(Boolean);
    return lines.find(line => /(?:insurance|lifetime insurance|\bLTI\b)/i.test(line)) || '';
  }

  function candidatesFor(card) {
    const values = [];
    TITLE_SELECTORS.forEach(selector => {
      try { card.querySelectorAll(selector).forEach(node => values.push(node.dataset?.itemName || node.dataset?.shipName || node.dataset?.name || node.textContent)); } catch (_) {}
    });
    card.querySelectorAll('[data-item-name],[data-ship-name],[data-name],[title]').forEach(node => {
      values.push(node.dataset?.itemName, node.dataset?.shipName, node.dataset?.name, node.getAttribute('title'));
    });
    card.innerText.split(/\r?\n/).forEach(line => values.push(line));
    return unique(values).slice(0,80);
  }

  function scanHangar() {
    const cards = cardNodes();
    const items = cards.map((card,index) => {
      const text = card.innerText || '';
      return {
        id: clean(card.dataset?.pledgeId || card.dataset?.id || card.getAttribute('data-pledge-id') || `card-${index+1}`),
        pledgeId: clean(card.dataset?.pledgeId || card.getAttribute('data-pledge-id') || ''),
        name: titleFor(card),
        title: titleFor(card),
        quantity: 1,
        ownership: 'pledged',
        insurance: insuranceFor(text),
        candidates: candidatesFor(card),
        rawText: clean(text).slice(0,4000)
      };
    });

    if (!items.length) {
      const fallbackCandidates = unique([...document.querySelectorAll('main h1,main h2,main h3,main h4,main strong,main [data-item-name],main [data-ship-name]')].map(node => node.dataset?.itemName || node.dataset?.shipName || node.textContent));
      if (fallbackCandidates.length) items.push({id:'fallback-page-scan',name:'RSI Hangar Page',title:'RSI Hangar Page',quantity:1,ownership:'pledged',insurance:'',candidates:fallbackCandidates,rawText:''});
    }

    return {
      format:'celestial-nexus-rsi-hangar-v1',
      extensionVersion:VERSION,
      scannedAt:new Date().toISOString(),
      sourceUrl:location.href,
      pageTitle:document.title,
      cardCount:cards.length,
      items
    };
  }

  chrome.runtime.onMessage.addListener((message,_sender,sendResponse) => {
    if (message?.type !== 'CN_SCAN_HANGAR') return;
    try {
      const snapshot = scanHangar();
      chrome.storage.local.set({[SNAPSHOT_KEY]:snapshot},() => sendResponse({ok:true,snapshot,count:snapshot.items.length}));
    } catch (error) {
      sendResponse({ok:false,error:error?.message || 'The hangar page could not be scanned.'});
    }
    return true;
  });
})();

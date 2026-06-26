(() => {
  const SNAPSHOT_KEY = 'celestialNexusHangarSnapshotV1';
  const utils = globalThis.CelestialNexusHangarSnapshot;
  const {VERSION,FORMAT,clean,plausibleName,uniqueNames,cleanInsurance,sanitizeSnapshot} = utils;
  const CARD_SELECTORS = [
    '[data-pledge-id]','.js-pledge','.pledge','.pledge-item','.hangar-item','.js-hangar-item',
    '[class*="pledge-card"]','[class*="hangar-item"]','[class*="pledge_item"]','.items-container > .item'
  ];
  const TITLE_SELECTORS = [
    '[data-item-name]','[data-ship-name]','[data-name]','.js-title','.pledge-title','.item-title','.title','.name',
    'h1','h2','h3','h4','h5','strong'
  ];

  function cardNodes() {
    const nodes = [];
    CARD_SELECTORS.forEach(selector => {
      try { document.querySelectorAll(selector).forEach(node => nodes.push(node)); } catch (_) {}
    });
    const unique = [...new Set(nodes)].filter(node => node instanceof HTMLElement && node.innerText?.trim());
    return unique.filter(node => !unique.some(other => other !== node && other.contains(node) && other.innerText.length < node.innerText.length * 1.25));
  }

  function titleFor(card) {
    for (const selector of TITLE_SELECTORS) {
      let node;
      try { node = card.matches(selector) ? card : card.querySelector(selector); } catch (_) { node = null; }
      const value = clean(node?.dataset?.itemName || node?.dataset?.shipName || node?.dataset?.name || node?.textContent || '',100);
      if (plausibleName(value)) return value;
    }
    return card.innerText.split(/\r?\n/).map(value => clean(value,100)).find(plausibleName) || 'RSI Hangar Pledge';
  }

  function insuranceFor(text) {
    const line = String(text || '').split(/\r?\n/).map(value => clean(value,120)).find(value => /(?:insurance|lifetime insurance|\bLTI\b)/i.test(value));
    return cleanInsurance(line || '');
  }

  function detectedNamesFor(card, primary) {
    const values = [primary];
    TITLE_SELECTORS.forEach(selector => {
      try { card.querySelectorAll(selector).forEach(node => values.push(node.dataset?.itemName || node.dataset?.shipName || node.dataset?.name || node.textContent)); } catch (_) {}
    });
    card.querySelectorAll('[data-item-name],[data-ship-name],[data-name],[title]').forEach(node => {
      values.push(node.dataset?.itemName,node.dataset?.shipName,node.dataset?.name,node.getAttribute('title'));
    });
    card.innerText.split(/\r?\n/).forEach(line => values.push(line));
    return uniqueNames(values);
  }

  function scanHangar() {
    const cards = cardNodes();
    const items = cards.map(card => {
      const text = card.innerText || '';
      const primary = titleFor(card);
      return {
        name: primary,
        packageName: primary,
        quantity: 1,
        ownership: 'pledged',
        insurance: insuranceFor(text),
        ships: detectedNamesFor(card,primary)
      };
    });

    if (!items.length) {
      const names = uniqueNames([...document.querySelectorAll('main h1,main h2,main h3,main h4,main strong,main [data-item-name],main [data-ship-name]')]
        .map(node => node.dataset?.itemName || node.dataset?.shipName || node.textContent));
      if (names.length) items.push({name:names[0],packageName:'',quantity:1,ownership:'pledged',insurance:'',ships:names});
    }

    const snapshot = sanitizeSnapshot({format:FORMAT,extensionVersion:VERSION,scannedAt:new Date().toISOString(),items});
    return {snapshot,scannedCards:cards.length};
  }

  chrome.runtime.onMessage.addListener((message,_sender,sendResponse) => {
    if (message?.type !== 'CN_SCAN_HANGAR') return;
    try {
      const {snapshot,scannedCards} = scanHangar();
      if (!snapshot) { sendResponse({ok:false,error:'No recognizable pledge names were found. Load the hangar cards and try again.'}); return; }
      chrome.storage.local.set({[SNAPSHOT_KEY]:snapshot},() => sendResponse({ok:true,count:snapshot.items.length,scannedCards}));
    } catch (error) {
      sendResponse({ok:false,error:error?.message || 'The hangar page could not be scanned.'});
    }
    return true;
  });
})();

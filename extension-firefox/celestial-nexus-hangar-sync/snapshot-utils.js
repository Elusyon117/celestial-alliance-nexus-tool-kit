(() => {
  const VERSION = '1.2.2';
  const FORMAT = 'celestial-nexus-rsi-hangar-v2';
  const ALLOWED_OWNERSHIP = new Set(['pledged','included','ingame','loaner','rented','wishlist']);
  const GENERIC = new Set([
    'my hangar','hangar','pledges','pledge','ship upgrades','upgrade','reclaim','gift','exchange','apply upgrade',
    'also contains','contains','view details','close','search','sort by','filter','insurance','attributed','created',
    'game package','standalone ship','warbond','download','more info','package','show details','hide details'
  ]);

  const clean = (value, max = 160) => String(value || '').replace(/\s+/g,' ').trim().slice(0,max);
  const key = value => clean(value).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const plausibleName = value => {
    const text = clean(value,100), normalized = key(text);
    if (!text || text.length < 2 || GENERIC.has(normalized)) return false;
    if (/^(?:\$|usd|eur|gbp|store credit|value|melt value|order|date|page|showing|items? per page|pledge id|sku|invoice)/i.test(text)) return false;
    if (/^\d+(?:\.\d+)?(?:\s*(?:usd|eur|gbp|months?|years?|days?))?$/i.test(text)) return false;
    if (/^(?:lti|lifetime insurance|\d+[- ]month insurance)$/i.test(text)) return false;
    if (/(?:@|https?:\/\/|www\.)/i.test(text)) return false;
    if (text.split(' ').length > 14) return false;
    return /[a-z]/i.test(text);
  };
  const uniqueNames = values => [...new Map((values || []).filter(plausibleName).map(value => [key(value),clean(value,100)])).values()].slice(0,40);
  const cleanInsurance = value => {
    const text = clean(value,120);
    return /(?:insurance|\bLTI\b)/i.test(text) ? text : '';
  };
  const sanitizeItem = item => {
    if (!item || typeof item !== 'object') return null;
    const names = uniqueNames([
      item.name,
      ...(Array.isArray(item.ships) ? item.ships : []),
      ...(Array.isArray(item.detectedNames) ? item.detectedNames : []),
      ...(Array.isArray(item.vehicles) ? item.vehicles : []),
      ...(Array.isArray(item.candidates) ? item.candidates : [])
    ]);
    const name = clean(item.name || names[0] || 'RSI Hangar Pledge',100);
    if (!name && !names.length) return null;
    const packageName = clean(item.packageName || item.title || item.name || '',120);
    return {
      name: name || names[0],
      packageName,
      quantity: Math.max(1,Math.min(99,Number(item.quantity) || 1)),
      ownership: ALLOWED_OWNERSHIP.has(item.ownership) ? item.ownership : 'pledged',
      insurance: cleanInsurance(item.insurance),
      ships: uniqueNames([name,...names])
    };
  };
  const sanitizeSnapshot = snapshot => {
    if (!snapshot || typeof snapshot !== 'object') return null;
    const items = (Array.isArray(snapshot.items) ? snapshot.items : []).map(sanitizeItem).filter(Boolean);
    if (!items.length) return null;
    const scanned = new Date(snapshot.scannedAt || Date.now());
    return {
      format: FORMAT,
      extensionVersion: VERSION,
      scannedAt: Number.isNaN(scanned.getTime()) ? new Date().toISOString() : scanned.toISOString(),
      items
    };
  };

  globalThis.CelestialNexusHangarSnapshot = Object.freeze({VERSION,FORMAT,clean,key,plausibleName,uniqueNames,cleanInsurance,sanitizeItem,sanitizeSnapshot});
})();

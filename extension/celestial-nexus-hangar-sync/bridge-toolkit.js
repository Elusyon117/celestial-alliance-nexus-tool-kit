(() => {
  const SNAPSHOT_KEY = 'celestialNexusHangarSnapshotV1';
  const EXTENSION_SOURCE = 'celestial-nexus-hangar-extension';
  const TOOLKIT_SOURCE = 'celestial-nexus-toolkit';
  const VERSION = '1.2.1';

  function send(type,payload={}) {
    window.postMessage({source:EXTENSION_SOURCE,type,extensionVersion:VERSION,...payload},location.origin);
  }
  function readSnapshot(callback) {
    chrome.storage.local.get([SNAPSHOT_KEY],result => callback(result?.[SNAPSHOT_KEY] || null));
  }

  window.addEventListener('message',event => {
    if (event.source !== window || event.data?.source !== TOOLKIT_SOURCE) return;
    if (event.data.type === 'CN_HANGAR_PING') {
      readSnapshot(snapshot => send('CN_HANGAR_PONG',{hasSnapshot:!!snapshot,scannedAt:snapshot?.scannedAt || ''}));
    }
    if (event.data.type === 'CN_REQUEST_HANGAR_SNAPSHOT') {
      readSnapshot(snapshot => send('CN_HANGAR_SNAPSHOT',{requestId:event.data.requestId || '',snapshot}));
    }
  });

  readSnapshot(snapshot => send('CN_EXTENSION_READY',{hasSnapshot:!!snapshot,scannedAt:snapshot?.scannedAt || ''}));
})();

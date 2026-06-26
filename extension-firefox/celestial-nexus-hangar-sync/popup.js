(() => {
  const SNAPSHOT_KEY='celestialNexusHangarSnapshotV1';
  const RSI_URL='https://robertsspaceindustries.com/account/pledges';
  const TOOLKIT_URL='https://elusyon117.github.io/celestial-alliance-nexus-tool-kit/#fleet';
  const status=document.getElementById('status'),scan=document.getElementById('scan');
  let activeTab=null;
  const setStatus=(message,state='')=>{status.textContent=message;status.className=`status ${state}`;};
  const isRsi=url=>/^https:\/\/(?:www\.)?robertsspaceindustries\.com\/account\/pledges/i.test(url||'');
  function refreshStored(){chrome.storage.local.get([SNAPSHOT_KEY],result=>{const snapshot=result?.[SNAPSHOT_KEY];if(snapshot)setStatus(`Snapshot ready · ${snapshot.items?.length||0} pledge cards · ${new Date(snapshot.scannedAt).toLocaleString()}`,'good');else if(activeTab&&isRsi(activeTab.url))setStatus('RSI hangar detected. Load all pledge cards, then scan.');});}
  chrome.tabs.query({active:true,currentWindow:true},tabs=>{activeTab=tabs[0]||null;scan.disabled=!activeTab||!isRsi(activeTab.url);if(scan.disabled)setStatus('Open the RSI My Hangar page to scan pledges.');refreshStored();});
  scan.addEventListener('click',()=>{if(!activeTab)return;scan.disabled=true;setStatus('Scanning the loaded RSI hangar page…');chrome.tabs.sendMessage(activeTab.id,{type:'CN_SCAN_HANGAR'},response=>{scan.disabled=false;if(chrome.runtime.lastError){setStatus('Reload the RSI hangar page after installing the extension, then try again.','bad');return;}if(!response?.ok){setStatus(response?.error||'The page could not be scanned.','bad');return;}setStatus(`Saved local snapshot from ${response.snapshot?.cardCount||response.count||0} pledge cards.`,'good');});});
  document.getElementById('open-rsi').addEventListener('click',()=>chrome.tabs.create({url:RSI_URL}));
  document.getElementById('open-toolkit').addEventListener('click',()=>chrome.tabs.create({url:TOOLKIT_URL}));
  document.getElementById('clear').addEventListener('click',()=>chrome.storage.local.remove([SNAPSHOT_KEY],()=>setStatus('Local hangar snapshot cleared.')));
  document.getElementById('export').addEventListener('click',()=>chrome.storage.local.get([SNAPSHOT_KEY],result=>{const snapshot=result?.[SNAPSHOT_KEY];if(!snapshot){setStatus('There is no snapshot to export.','bad');return;}const blob=new Blob([JSON.stringify(snapshot,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='celestial-nexus-rsi-hangar.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}));
})();

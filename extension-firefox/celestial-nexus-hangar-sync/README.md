# Celestial Nexus Hangar Sync v1.2.1

This companion extension creates a **local pledge snapshot** from the signed-in RSI My Hangar page and makes that snapshot available to the Fleet Profile module in Celestial Nexus.

## Chrome / Edge developer installation

1. Extract this folder from `celestial-nexus-hangar-sync-v1.2.1.zip`.
2. Open `chrome://extensions` or `edge://extensions`.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select this folder.
5. Open the official RSI My Hangar page and sign in directly with RSI.
6. Load or scroll through the pledge cards, open the extension popup, and choose **Scan current RSI hangar page**.
7. Open Celestial Nexus → **Fleet Profile & Hangar Sync** → **Connect hangar extension**.

## Privacy model

- The extension never asks for an RSI email, password, 2FA code, or session cookie.
- It does not transmit data to a Celestial Nexus server.
- The parsed snapshot is stored in browser extension storage.
- The toolkit receives it only after the user presses Sync.
- Users can export or clear the snapshot at any time.

RSI can change the My Hangar page structure. When that happens, the scanner selectors may need an update.


## Public installation

For normal Chrome and Edge users, publish the store-ready ZIP in this release to the Chrome Web Store and Microsoft Edge Add-ons. Store installation removes the need for Developer mode and provides automatic updates.

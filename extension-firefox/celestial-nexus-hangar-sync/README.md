# Celestial Nexus Hangar Sync v1.2.2

This companion extension creates a **privacy-minimized local fleet snapshot** from the signed-in RSI My Hangar page and makes that snapshot available to the Fleet Profile module in Celestial Nexus.

## Chrome / Edge developer installation

1. Extract `celestial-nexus-hangar-sync-v1.2.2.zip`.
2. Open `chrome://extensions` or `edge://extensions`.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select the extracted folder.
5. Open the official RSI My Hangar page and sign in directly with RSI.
6. Load the pledge cards, open the extension popup, and choose **Scan current RSI hangar page**.
7. Open Celestial Nexus → **Fleet Profile & Hangar Sync** → **Connect hangar extension**.

## Stored snapshot

Only these normalized fields are retained locally:

- detected ship or vehicle names
- package name where available
- quantity and ownership type
- insurance text
- scan time

Raw pledge-card text, pledge IDs, RSI page title, source URL, credentials, cookies, authentication tokens, and payment information are not stored. Existing v1.2.1 snapshots are automatically rewritten into the smaller v1.2.2 format.

## Public installation

Submit `celestial-nexus-hangar-sync-v1.2.2-store.zip` to the existing Chrome Web Store draft. Store installation gives users one-click installation and automatic updates.

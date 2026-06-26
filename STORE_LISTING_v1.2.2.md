# Chrome Web Store listing — Celestial Nexus Hangar Sync v1.2.2

## Description

Celestial Nexus Hangar Sync lets Star Citizen players import their pledged ships and vehicles into the Celestial Nexus Fleet Profile.

The extension works while the user is already signed in on the official RSI My Hangar page. After the user presses Scan, it converts visible pledge information into a privacy-minimized local fleet snapshot.

Features:
- Detect ships and vehicles displayed in RSI My Hangar
- Store only normalized fleet fields locally
- Import pledged vehicles into Celestial Nexus
- Mark imported ships as owned in vehicle, mining, salvage, cargo, and upgrade planning
- Export or delete the local snapshot
- Require explicit user action for scanning and synchronization

Privacy:
- No RSI password, 2FA code, cookies, authentication tokens, or payment information
- No raw pledge-card text, pledge ID, page title, or source URL stored
- No advertising, analytics, remote code, or developer-controlled fleet server

Unofficial community tool; not affiliated with or endorsed by Cloud Imperium Games or Roberts Space Industries.

## Privacy form

Single purpose:
Allows a user to scan ships and vehicles displayed on their signed-in RSI My Hangar page, save a privacy-minimized local fleet snapshot, and import that snapshot into Celestial Nexus after explicit user action.

Storage permission:
Used only to save the normalized user-approved fleet snapshot in chrome.storage.local so the user can review, export, import, or delete it. The snapshot is not uploaded to a developer-controlled server.

Host permission:
Access is limited to the official RSI My Hangar pledge page and the Celestial Nexus GitHub Pages application. On RSI, visible pledge information is processed only after the user presses Scan. On Celestial Nexus, the normalized local snapshot is provided only after the user presses Connect. Unrelated websites, passwords, cookies, tokens, payment details, and general browsing activity are not accessed.

Remote code: No.
Data category: Website content.
Purpose: App functionality.
Privacy URL: https://elusyon117.github.io/celestial-alliance-nexus-tool-kit/hangar-sync-privacy.html

# Celestial Nexus Hangar Sync — Store Listing Copy

## Name
Celestial Nexus Hangar Sync

## Short description
Locally scans the signed-in RSI My Hangar page and shares a user-approved fleet snapshot with Celestial Nexus.

## Category
Productivity

## Detailed description
Celestial Nexus Hangar Sync is a companion extension for the Celestial Alliance Nexus ToolKit.

When you are already signed in on the official RSI My Hangar page, the extension can scan the pledge cards currently loaded in that page and create a local fleet snapshot. You remain in control: the snapshot is shared with Celestial Nexus only when you open the Fleet Profile module and request a connection.

Key features:
- Local pledge-card scanning on the official RSI My Hangar page
- User-approved transfer into Celestial Nexus Fleet Profile
- Local browser storage with export and clear controls
- Automatic owned-ship recognition in vehicle and industrial planning tools
- No Celestial Nexus cloud account or server required

The extension does not ask for or intentionally access RSI passwords, email credentials, two-factor authentication codes, payment information, session cookies, or authentication tokens.

This is a community tool and is not affiliated with or endorsed by Cloud Imperium Games or Roberts Space Industries.

## Single purpose statement
Create a local, user-approved RSI hangar snapshot and make it available to the Celestial Nexus Fleet Profile module.

## Permission justifications
- storage: saves the user's local hangar snapshot until they export or clear it.
- activeTab: lets the popup communicate with the currently open RSI hangar page only after the user clicks the extension.
- Host access to RSI My Hangar: runs the scanner on the official pledge page.
- Host access to Celestial Nexus: exposes the saved snapshot to the toolkit after a user-requested connection.

## Suggested privacy declarations
The extension processes website content locally. It does not sell data, use data for advertising, use data for credit decisions, or transmit the hangar snapshot to a developer-controlled server in this release. Keep the dashboard declarations consistent with the extension behavior and the hosted privacy policy.

## URLs after deployment
Homepage: https://elusyon117.github.io/celestial-alliance-nexus-tool-kit/
Privacy policy: https://elusyon117.github.io/celestial-alliance-nexus-tool-kit/hangar-sync-privacy.html
Support: https://elusyon117.github.io/celestial-alliance-nexus-tool-kit/hangar-sync-support.html

## Test instructions for reviewers
1. Install the extension.
2. Open https://robertsspaceindustries.com/account/pledges and sign in with a reviewer-controlled RSI account.
3. Reload the page after installation and ensure at least one pledge card is loaded.
4. Open the extension popup and click “Scan current RSI hangar page”.
5. Open https://elusyon117.github.io/celestial-alliance-nexus-tool-kit/#fleet.
6. Click “Connect hangar extension” and review the imported snapshot.

No developer-provided RSI credentials are available or required. Reviewers should use their own authorized test account.

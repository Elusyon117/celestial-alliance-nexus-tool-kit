# Privacy notice — v1.2.2

Celestial Nexus Hangar Sync reads visible pledge-card content on `robertsspaceindustries.com/account/pledges` only after the user opens the extension and requests a scan.

Before storage, the extension reduces the page content to a normalized local snapshot containing only detected ship or vehicle names, package name where available, quantity, ownership type, insurance text, and scan time. It does **not** store raw pledge-card text, pledge identifiers, page title, source URL, RSI credentials, two-factor authentication codes, cookies, authentication tokens, payment data, or general browsing history.

The normalized snapshot stays in browser extension storage and is shared only with the Celestial Nexus GitHub Pages application after the user requests synchronization. No analytics, advertising SDK, remote code, or developer-controlled fleet backend is included.

Updating from v1.2.1 automatically rewrites any existing local snapshot into the privacy-minimized v1.2.2 format and removes fields no longer used.

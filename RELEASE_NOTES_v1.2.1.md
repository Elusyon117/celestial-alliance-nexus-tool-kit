# Celestial Nexus Toolkit v1.2.1

## Fleet Profile toolbar access

Fleet Profile & Hangar Sync is now available directly from the top-left main toolbar. The compact control shows the active profile's owned-vehicle count and opens the Fleet Profile module without requiring users to find the full module card.

## Easier extension distribution

The Hangar Sync extension has been rebuilt as a store-ready Manifest V3 package:

- `manifest.json` is at the ZIP root.
- Required extension icons are included.
- The unnecessary broad `tabs` permission was removed.
- Chrome Web Store and Edge Add-ons listing copy is included.
- Privacy and support pages are ready to deploy with GitHub Pages.
- Required store artwork is included.
- A Firefox candidate ZIP is included for testing and AMO submission.

The local-first privacy model is unchanged. The extension does not request RSI credentials, two-factor codes, payment details, session cookies, or authentication tokens.

# Celestial Nexus Toolkit v1.2.3

## Local-only rollback

This release removes the complete Fleet Profile & Hangar Sync experiment and returns Celestial Nexus to a standalone, browser-local toolkit that does not require an extension, login, backend, or account connection.

### Removed

- Fleet Profile & Hangar Sync module
- Fleet Profile toolbar button
- Extension communication bridge
- RSI hangar snapshot import and sync controls
- Automatic pledged-ship ownership labels
- Extension-specific privacy, support, and store-distribution dependencies

### Retained

- Vehicle acquisition planning, dealer prices, ownership selector, shopping routes, checklist, and CSV export
- Mining platform advisor and resource-specific component/gadget recommendations
- Mining heads and per-head module slots such as Rieger, Focus, Surge, Stampede, FLTR, Vaux, XTR, and Torrent
- Independent mining, salvage, tractor, and industrial utility hardpoint selectors
- Picture Studio premium presets, custom formats, custom brands, overlay fixes, brightness controls, and fitted scrolling canvas
- All other toolkit modules and local saved data from the stable v1.1.2 feature set

### Browser data

Any old `celestialNexusFleetProfilesV1` local-storage entry is no longer read or used. It can be removed manually through the browser's site-data controls if desired.

# Celestial Nexus Toolkit v1.2.2

## Privacy-minimized Hangar Sync

This patch reduces the companion extension's stored RSI hangar snapshot to the minimum fields required for fleet personalization.

### Removed from storage

- raw pledge-card text
- RSI pledge IDs and DOM identifiers
- RSI page title
- source URL
- unrelated page metadata

### Retained locally

- detected ship or vehicle names
- package name where available
- quantity and ownership type
- insurance text
- scan time

Existing v1.2.1 snapshots are sanitized automatically when the updated extension popup or toolkit bridge reads them. Existing Fleet Profile rows also have obsolete pledge identifiers removed.

The extension no longer requests `activeTab`; it retains `storage` and narrowly scoped content-script access to RSI My Hangar and the Celestial Nexus application.

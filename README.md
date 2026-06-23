# Celestial Alliance Nexus ToolKit — v0.82

Publish-ready static build for the **Celestial Alliance Nexus ToolKit** GitHub Pages repository.

## Repository

`https://github.com/Elusyon117/celestial-alliance-nexus-tool-kit`

## Publish to GitHub Pages

1. Extract this ZIP.
2. Copy **the contents of the extracted folder** into the repository root.
3. Replace the existing `index.html`, `manifest.webmanifest`, `sw.js`, and icon files.
4. Commit and push the changes to `main`.
5. In **Repository Settings → Pages**, keep the source set to **Deploy from a branch**, branch `main`, folder `/(root)`.
6. After deployment, hard-refresh the published site once so the v0.82 service worker replaces the older cache.

## Required publish files

- `index.html` — complete v0.82 toolkit
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — versioned offline app-shell cache
- `icons/` — PWA icons referenced by the manifest
- `.nojekyll` — prevents GitHub Pages from applying Jekyll processing
- `404.html` — redirects invalid project paths back to the toolkit

## Release notes

- Adds selected-vehicle artwork directly to the Vehicle Loadout Manager acquisition planner
- Adds the selected ship image to exported upgrade-shopping-list PNGs
- Adds destination photography to purchase-route cards and image exports
- Dynamically sizes route cards to show every component at a stop
- Separates unit prices, line totals, and stop subtotals to prevent overlapping amounts
- Preserves the v0.81 mining, commodity trading, and Alpha 4.9 fuel-route-planning features

## Important

This is an unofficial fan-made Star Citizen community tool. Keep all source acknowledgements and disclaimers in the application. Do not place passwords, private API keys, or other secrets in browser-delivered files.

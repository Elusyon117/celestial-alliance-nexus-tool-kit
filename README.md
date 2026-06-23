# Celestial Alliance Nexus ToolKit — v0.81

Publish-ready static build for the **Celestial Alliance Nexus ToolKit** GitHub Pages repository.

## Repository

`https://github.com/Elusyon117/celestial-alliance-nexus-tool-kit`

## Publish to GitHub Pages

1. Extract this ZIP.
2. Copy **the contents of the extracted folder** into the repository root.
3. Replace the existing `index.html`, `manifest.webmanifest`, `sw.js`, and icon files.
4. Commit and push the changes to `main`.
5. In **Repository Settings → Pages**, keep the source set to **Deploy from a branch**, branch `main`, folder `/(root)`.
6. After deployment, reload the published site. A hard refresh may be needed once because the previous version used an older service-worker cache.

## Required publish files

- `index.html` — complete v0.81 toolkit
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — versioned offline app-shell cache
- `icons/` — PWA icons referenced by the manifest
- `.nojekyll` — prevents GitHub Pages from applying Jekyll processing
- `404.html` — redirects invalid project paths back to the toolkit

## Release notes

- Mining Resources Command through v0.80 refinements
- Commodity Trading full-page layout
- Alpha 4.9 fuel-aware route planner
- Ship-specific range, reserve, overhead, and refueling-stop planning
- Service-station directory and copyable route briefs

## Important

This is an unofficial fan-made Star Citizen community tool. Keep all source acknowledgements and disclaimers in the application. Do not place passwords, private API keys, or other secrets in browser-delivered files.

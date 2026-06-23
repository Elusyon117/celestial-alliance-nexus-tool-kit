# Celestial Alliance Nexus ToolKit

> A fan-made Star Citizen operations, logistics, intelligence, engineering, and organization-planning suite built for the **Celestial Alliance** organization.

[![Version](https://img.shields.io/badge/version-0.82-7c5cff?style=flat-square)](#release-status)
[![Platform](https://img.shields.io/badge/platform-GitHub%20Pages-2ea44f?style=flat-square)](#deployment)
[![App](https://img.shields.io/badge/app-static%20PWA-39d0ff?style=flat-square)](#technical-overview)
[![Star Citizen](https://img.shields.io/badge/Star%20Citizen-community%20toolkit-f2c94c?style=flat-square)](#disclaimer)

**Repository:** [github.com/Elusyon117/celestial-alliance-nexus-tool-kit](https://github.com/Elusyon117/celestial-alliance-nexus-tool-kit)  
**Live site:** [elusyon117.github.io/celestial-alliance-nexus-tool-kit](https://elusyon117.github.io/celestial-alliance-nexus-tool-kit/)

---

## Table of contents

- [What is Celestial Nexus?](#what-is-celestial-nexus)
- [Module overview](#module-overview)
- [Modules in detail](#modules-in-detail)
  - [Organization Hub](#organization-hub)
  - [Event Planner](#event-planner)
  - [Universal Item Finder](#universal-item-finder)
  - [Vehicle Loadout Manager](#vehicle-loadout-manager)
  - [Language Pack Lab](#language-pack-lab)
  - [Game Status & Intel](#game-status--intel)
  - [Wikelo Trade Center](#wikelo-trade-center)
  - [Org Picture Creator](#org-picture-creator)
  - [Commodity Trading Command](#commodity-trading-command)
  - [Mining Resources Command](#mining-resources-command)
- [Shared application features](#shared-application-features)
- [Technical overview](#technical-overview)
- [Running locally](#running-locally)
- [Deployment](#deployment)
- [Data sources and acknowledgements](#data-sources-and-acknowledgements)
- [Accuracy and patch-sensitive information](#accuracy-and-patch-sensitive-information)
- [Privacy](#privacy)
- [Contributing](#contributing)
- [Release status](#release-status)
- [Disclaimer](#disclaimer)

---

## What is Celestial Nexus?

Celestial Alliance Nexus ToolKit is a browser-based command center for planning Star Citizen activities. It combines organization operations, vehicle engineering, item research, commodity hauling, mining intelligence, reputation planning, status monitoring, and visual-content creation in one unified interface.

The application is designed to be:

- **Useful during real operations** — build routes, shopping lists, crew plans, mining briefs, and event rosters.
- **Easy to publish** — the entire toolkit is a static GitHub Pages site with no server or database required.
- **Patch-aware** — estimates, prices, fuel profiles, mining information, and community intelligence are labeled when they may change between game versions.
- **Local-first** — many preferences, saved plans, inventories, favorites, and project details are stored in the browser.
- **Organization-focused** — the visual language, roster tools, exports, and operational briefs are built around Celestial Alliance workflows.

---

## Module overview

| Module | Purpose |
|---|---|
| **Organization Hub** | Central launcher, public RSI organization roster, toolkit status, creator information, and data-source acknowledgements. |
| **Event Planner** | Build missions, add ships and ground units, assign crew stations, organize roles, and export operation-ready rosters and briefings. |
| **Universal Item Finder** | Research weapons, armor, utility items, ship components, loot, stores, prices, blueprints, and marketplace information. |
| **Vehicle Loadout Manager** | Configure ship and vehicle components, compare alternatives, model engineering changes, and generate purchase routes and shopping lists. |
| **Language Pack Lab** | Build a customized `global.ini` with clearer terminology, mining names, blueprint intelligence, component labels, and ASOP ship ordering. |
| **Game Status & Intel** | Monitor official RSI service health, LIVE build information, official news, and clearly labeled community intelligence. |
| **Wikelo Trade Center** | Search Wikelo exchanges, track materials, calculate trade readiness, plan shared projects, and estimate reputation progress. |
| **Org Picture Creator** | Turn screenshots into branded Celestial Alliance graphics with layers, text, logos, shapes, themes, and export controls. |
| **Commodity Trading Command** | Find hauling opportunities, compare profitability and risk, build cargo briefs, and plan ship-aware routes with refueling stops. |
| **Mining Resources Command** | Research minerals and gemstones, find mining regions, plan approaches, estimate break difficulty, and prepare ships, vehicles, equipment, and crews. |

---

# Modules in detail

## Organization Hub

The main hub is the entry point for the entire toolkit.

### Features

- Displays the public Celestial Alliance RSI organization roster.
- Provides direct access to every toolkit module.
- Shows module readiness and live-data status where available.
- Includes creator and organization identity panels.
- Lists the community projects and official sources that help power the toolkit.
- Uses a responsive card layout for desktop and mobile screens.

---

## Event Planner

The Event Planner helps commanders prepare an operation before launch.

### Features

- Create and name an operation or event.
- Set mission date, time, time zone, commander, server, rally point, objective, and notes.
- Add ships, vehicles, or operational units.
- Assign crew members to pilot, gunner, engineer, support, logistics, command, or custom roles.
- Use default role templates or create organization-specific positions.
- Configure unit badges, names, ship types, and photography.
- Track filled and available crew positions.
- Import and export event setups.
- Generate clean roster images and Discord-ready mission briefings.
- Preserve reusable operational structures for recurring events.

### Typical uses

- Mining expeditions
- Salvage operations
- Cargo convoys
- Combat patrols
- Racing or training events
- Multi-crew ship assignments
- Organization-wide mission nights

---

## Universal Item Finder

The Item Finder provides a single research workspace for Star Citizen equipment and acquisition information.

### Features

- Search weapons, armor, clothing, utility equipment, ship components, consumables, and loot.
- Filter and browse item categories.
- View item descriptions, statistics, tags, and imagery.
- Review known in-game purchase locations and prices.
- Inspect community marketplace listings where available.
- Browse a dedicated blueprint catalog.
- Filter blueprints by type, acquisition method, and required material.
- Compare acquisition paths before traveling.
- Use live community sources with built-in fallback behavior.

### Data note

Store inventories, prices, item statistics, and blueprint availability can change with patches. Always confirm critical purchases in game.

---

## Vehicle Loadout Manager

The Vehicle Loadout Manager is an engineering and acquisition-planning workspace for ships and ground vehicles.

### Features

- Select a supported ship or vehicle.
- Load its installed and compatible component structure.
- Replace hardpoint components and compare alternatives.
- Review component classes, sizes, grades, manufacturers, and performance.
- Model crafted quality and material bonuses.
- Recalculate combat, shield, power, cooling, quantum, signature, and engineering values.
- Save, import, and export loadout configurations.
- Generate presentation-ready loadout images.

### Upgrade shopping list

The acquisition planner converts a proposed loadout into a practical buying plan.

- Summarizes every changed component and required quantity.
- Displays the selected vehicle artwork.
- Finds known purchase locations and terminal information.
- Groups purchases into location-based stops.
- Calculates unit prices, line totals, stop subtotals, and overall estimates.
- Builds a closest-location purchase route.
- Shows location photography for route stops.
- Produces a readable checklist for in-game shopping.
- Exports the shopping list as an image.

### Important limitation

Community-maintained prices and terminal reports are planning aids. Stock and pricing should be confirmed in game before departure.

---

## Language Pack Lab

Language Pack Lab creates a customized Star Citizen `global.ini` interface-language file.

### Features

- Import an existing language pack as a starting point.
- Enable or disable module-specific terminology changes.
- Apply shorter or clearer mining-resource names.
- Add contract, blueprint, and reputation intelligence.
- Improve component names and labels.
- Customize component name casing and unknown-value behavior.
- Build a preferred ASOP ship order.
- Add ship aliases and favorites.
- Create advanced key overrides.
- Preview the generated output before downloading it.
- Export a finished organization-ready language pack.

### Installation reminder

The correct game-folder location and behavior may change between launcher or patch versions. Back up existing language files before replacing them.

---

## Game Status & Intel

This module combines official service monitoring with current game and community intelligence.

### Features

- Displays official RSI service status.
- Breaks service health into relevant platform components.
- Shows active incidents when available.
- Tracks current LIVE build information.
- Surfaces official Star Citizen announcements and news.
- Includes a clearly labeled community intelligence feed.
- Separates confirmed information from rumors, leaks, and datamined findings.
- Provides manual refresh controls and source notes.

### Intelligence policy

Community reports are not presented as official confirmation. Patch-sensitive or unverified information should be treated as planning context, not certainty.

---

## Wikelo Trade Center

The Wikelo Trade Center helps individuals and organizations manage exchange requirements and reputation progression.

### Features

- Search the current trade catalog.
- Filter by category, rank, readiness, and completion state.
- Review required materials and offered rewards.
- Track the organization’s available material inventory.
- Calculate which trades can be completed immediately.
- Build a shared project or material requirement list.
- Hide completed exchanges to focus on outstanding goals.
- Track completed trades and reputation rewards.
- Estimate total reputation and progress toward the next tier.
- Preserve trade and inventory progress locally in the browser.

### Data note

Wikelo trades, costs, rewards, and reputation values may be revised by game patches.

---

## Org Picture Creator

The picture studio creates branded Celestial Alliance graphics directly in the browser.

### Features

- Upload screenshots or background images.
- Choose preset output formats and resolutions.
- Control image zoom, position, crop, overlay strength, and vignette.
- Add the Celestial Alliance logo and organization name.
- Change logo placement, size, and palette.
- Add draggable and resizable text objects.
- Add geometric shapes, accents, boxes, borders, and overlays.
- Control fonts, alignment, weight, color, opacity, and shadows.
- Add extra image layers.
- Reorder, select, edit, duplicate, and remove layers.
- Use undo and redo.
- Save reusable visual styles.
- Export finished images at the selected quality and dimensions.

### Typical uses

- Event announcements
- Recruitment graphics
- Operation debriefs
- Social-media posts
- Organization banners
- Fleet and crew showcases

---

## Commodity Trading Command

Commodity Trading Command is a logistics workspace for evaluating and preparing hauling operations.

### Opportunity finder

- Searches community-reported commodity prices and terminals.
- Filters by ship, cargo capacity, available capital, cycle time, system, and data age.
- Supports legal, illegal, and mixed cargo preferences.
- Filters by destination system, route scope, handling type, volatility, liquidity, confidence, and utilization.
- Applies minimum profit, ROI, profit-per-SCU, and confidence thresholds.
- Compares estimated investment, revenue, margin, route risk, and data freshness.
- Saves promising routes as convoy-ready plans.
- Produces copyable cargo-operation briefs.

### Fuel Route Planner

The fuel planner extends commodity routes with ship-aware logistics.

- Selects a ship profile and expected quantum range.
- Uses starting-fuel and arrival-reserve targets.
- Accounts for operational overhead around cargo stops.
- Supports custom range overrides.
- Routes between Stanton, Pyro, and Nyx service locations.
- Inserts gateway or station refueling stops when required.
- Supports strategies such as fewest stops, safest route, or shortest distance.
- Displays a refueling and service directory.
- Identifies locations with fuel, repair, cargo, and gateway services.
- Adds fuel status directly to commodity-route cards.
- Generates a combined cargo-and-fuel flight brief.

### Patch warning

Fuel tank capacities, consumption, quantum-drive behavior, jump-network distances, and 4.9-era balance values are patch-sensitive. The planner is an operational estimate and not a guarantee that a route can be flown exactly as shown after every game update.

---

## Mining Resources Command

Mining Resources Command is an in-depth planning system for FPS, vehicle, solo-ship, and multi-crew mining.

### Resource intelligence

- Search a catalog of **34 minerals and gemstones**.
- Filter by mining platform, system, tier, and special-resource classification.
- Sort resources by value, priority, name, or operational properties.
- Use color-coded tiers for quick visual identification.
- Review resource value index, quality range, resistance, instability, density, secondary materials, and mining classification.
- Distinguish hand-minable, vehicle-minable, and ship-minable targets.

### Mining platforms

The module supports planning for:

- FPS hand mining
- ROC-class vehicle mining
- ARGO ATLS GEO operations
- MISC Prospector operations
- ARGO MOLE multi-crew operations

### Location intelligence

- Shows known resource regions and practical approach routes.
- Uses unobstructed location photography.
- Provides system, planetary, asteroid-belt, cave, station, and special-site guidance.
- Includes Hathor breach-site intelligence for Carinite.
- Includes QV Breaker Station operations as a primary Savrilium source.
- Includes Remote Mining Base region guidance.
- Provides route steps, operational notes, risk labels, quality guidance, and logistics suggestions.

### Break planner and preparation

- Estimates whether a deposit is practical for the selected mining platform.
- Uses mass, resistance, instability, and resource profile inputs.
- Compares hand tools, ROC/ATLS GEO, Prospector, and MOLE approaches.
- Recommends mining heads, modules, gadgets, environmental protection, and support equipment.
- Suggests crew size and roles.
- Builds a complete operation brief that can be copied before launch.

### Mining-data warning

Deposit behavior can vary with mass, composition, resistance, instability, server conditions, equipment state, and balance changes. Recommendations should be validated against the actual scan and fracture response in game.

---

# Shared application features

## Responsive interface

The toolkit is designed to work across desktop, tablet, and mobile-width browsers. Large command workspaces expand to use the page width, while dense catalogs and route cards reflow for smaller screens.

## Local persistence

The toolkit uses browser storage for applicable settings and planning data, including items such as:

- Saved routes and favorites
- Trade and material inventories
- Wikelo progress
- Event configurations
- Loadout settings
- Language-pack preferences
- Mining favorites and checklists
- Studio settings and reusable design choices

Clearing browser site data may remove locally saved toolkit information.

## Export tools

Depending on the module, the toolkit can create or copy:

- Mission rosters
- Discord-ready operation briefings
- Event and shopping-list images
- Loadout graphics
- Commodity convoy briefs
- Mining operation briefs
- Organization promotional images
- Customized `global.ini` files

## Live data and fallbacks

Some features request data or images from official and community services. When a source is unavailable, blocked by browser security rules, or temporarily offline, the toolkit may use cached data, embedded snapshots, alternate community sources, or a visual fallback.

---

# Technical overview

Celestial Nexus is intentionally lightweight to deploy.

- Static HTML, CSS, and JavaScript
- No server-side application required
- No database required
- No package manager or compilation step required
- GitHub Pages compatible
- PWA manifest included
- Service worker included for application caching
- Local browser storage used for user-created planning data
- External network requests used only for applicable live-data and image features

## Repository structure

A typical published package contains:

```text
celestial-alliance-nexus-tool-kit/
├── index.html
├── manifest.webmanifest
├── sw.js
├── 404.html
├── .nojekyll
├── README.md
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── assets/
└── data/
```

The exact asset and data folders may vary between releases.

---

# Running locally

The basic interface can be opened directly from `index.html`, but a local web server is recommended because service workers and some browser APIs require `localhost` or HTTPS.

## Python

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## Node.js

```bash
npx serve .
```

---

# Deployment

## GitHub Pages

1. Place the publish-package files in the repository root.
2. Ensure the main application is named `index.html`.
3. Commit and push the files to the `main` branch.
4. Open **Repository Settings → Pages**.
5. Select **Deploy from a branch**.
6. Choose `main` and `/(root)`.
7. Save and allow GitHub Pages to publish the site.

The `.nojekyll` file prevents Jekyll processing from changing the static application.

## Updating an existing deployment

Because the toolkit uses a service worker, visitors may temporarily see a cached version after deployment.

After publishing an update:

- Increment the cache/version identifier in `sw.js`.
- Hard-refresh the page.
- Close and reopen installed PWA windows.
- Clear the site cache only when the old release remains stuck.

---

# Data sources and acknowledgements

Celestial Nexus combines official information with community-maintained data and workflow references. The toolkit acknowledges the work of:

- Roberts Space Industries and RSI Status
- Star Citizen Wiki API
- Star Citizen Wiki / starcitizen.tools
- UEX Corp and UEX Corp API documentation
- Schaulers / SC Haulers
- Regolith Archive
- SC Trade Tools
- Erkul Games
- CStone Universal Item Finder
- The Armory by SpaceCoder
- SCMDB
- Wikelo Trades
- Wikelo Project Tracker
- MrKraken / StarStrings
- ExoAE / ScCompLangPack
- The r/starcitizen community
- Community wiki editors, data miners, developers, testers, and players

Connectivity helpers may be used when a browser cannot directly access a source. Those helpers are transport mechanisms and are not treated as game-data authorities.

All third-party data, images, names, and trademarks remain the property of their respective owners and creators.

---

# Accuracy and patch-sensitive information

Star Citizen is actively developed. The following can change without notice:

- Item and component statistics
- Vehicle hardpoints and compatibility
- Store inventory and prices
- Commodity supply, demand, and profitability
- Fuel capacity, consumption, and range
- Jump routes and service availability
- Mining resistance, instability, quality, and resource distribution
- Wikelo requirements and reputation rewards
- Blueprint availability
- LIVE build and service status

The toolkit is a planning aid. Confirm important prices, stock, route access, equipment compatibility, and mission conditions in game before committing significant time or aUEC.

---

# Privacy

Celestial Nexus does not require a toolkit account or a dedicated backend. User-created plans and preferences are generally stored locally in the browser.

The application may contact official and community data providers to retrieve live status, market, wiki, image, and intelligence information. Those external services have their own privacy and availability policies.

Do not store passwords, authentication tokens, private organization credentials, or other sensitive information inside exported plans or browser-saved notes.

---

# Contributing

Contributions, corrections, and data updates are welcome.

Recommended workflow:

1. Fork the repository.
2. Create a feature branch.
3. Make focused changes.
4. Test the hub and every affected module at desktop and mobile widths.
5. Confirm that the browser console has no new errors.
6. Update version labels and the service-worker cache key when publishing a release.
7. Preserve source attribution and patch-sensitive labels.
8. Submit a pull request with screenshots and a clear description of the change.

When reporting a data issue, include:

- The affected module
- The item, ship, resource, route, or location
- The game version or patch
- The expected result
- The current result
- A reliable source or in-game screenshot when possible

---

# Release status

## Current release: v0.82

Current release highlights include:

- Expanded Mining Resources Command with a 34-resource catalog
- Carinite and Hathor-site planning
- Savrilium QV Breaker Station operations
- Color-coded mining-resource tiers
- ARGO ATLS GEO vehicle-mining support
- Corrected location photography for QV Breaker Stations and Remote Mining Bases
- Full-page mining and commodity workspaces
- Ship-aware commodity fuel route planning and refueling-stop insertion
- Vehicle upgrade shopping lists with selected-ship artwork and location photography
- Corrected route-card amount layout and image exports
- GitHub Pages and PWA publishing support

---

# Disclaimer

This is an unofficial fan-made community project. It is not endorsed by, affiliated with, or sponsored by Cloud Imperium Games or Roberts Space Industries.

Star Citizen®, Roberts Space Industries®, Cloud Imperium®, and related names, imagery, and intellectual property belong to their respective owners. Community data remains the property of its original maintainers and contributors.

---

## Created by

**Elusyon**  
Celestial Alliance — Command, Officer & Recruitment

Built with passion for Star Citizen and for the organization members who make every mission worth flying.

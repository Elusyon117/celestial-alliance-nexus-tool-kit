CELESTIAL NEXUS — PUBLISH-READY STATIC SITE

FILES
- index.html: the complete toolkit
- manifest.webmanifest: installable web-app metadata
- sw.js: lightweight same-origin offline app-shell support
- icons/: web-app icons

CLOUDFLARE PAGES — SIMPLEST DEPLOYMENT
1. Sign in to Cloudflare.
2. Open Workers & Pages.
3. Create a Pages project using Direct Upload.
4. Drag this folder or the ZIP archive into the upload area.
5. Choose a project name and deploy.
6. Cloudflare will provide a pages.dev address.

UPDATES
Upload a newly prepared folder/ZIP as the next deployment. The service worker uses a versioned cache; change CACHE_NAME in sw.js when releasing a later build.

GITHUB PAGES — VERSION-CONTROLLED ALTERNATIVE
1. Create a public GitHub repository.
2. Upload all files from this folder to the repository root.
3. In Settings > Pages, choose Deploy from a branch.
4. Select main and /(root), then save.

IMPORTANT
- Do not place API keys, passwords, or other secrets in index.html. Browser-delivered code is visible to visitors.
- The toolkit relies on third-party APIs and community data sources; availability and browser CORS policies are controlled by those services.
- Keep source credits and a prominent unofficial-fan-project disclaimer.

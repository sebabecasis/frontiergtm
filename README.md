# Frontier GTM

The portfolio site for [frontiergtm.dev](https://frontiergtm.dev): six working systems across agent-led processes, semantic intelligence and network analysis.

## Deploying on Vercel

Import this repository into Vercel with the framework preset set to **Other**. No build command is required; `vercel.json` configures `dist` as the output directory.

The portfolio is served from `/`. `/github` redirects there. Cookieless analytics loads from `/_vercel/insights/script.js` when Vercel Web Analytics is enabled for the project.

## Local preview

```sh
python3 -m http.server 4173 --directory dist
```

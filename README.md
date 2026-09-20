# Frontier GTM

The portfolio site for [frontiergtm.co](https://www.frontiergtm.co): six working systems across agent-led processes, semantic intelligence and network analysis.

## Deploying on Vercel

Import this repository into Vercel with the framework preset set to **Other**. No build command is required; `vercel.json` configures `dist` as the output directory.

The main portfolio is served from `/`, with the repository index also available at `/github`.

## Local preview

```sh
python3 -m http.server 4173 --directory dist
```

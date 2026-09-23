# Portfolio site instructions

## Publishing

- The public website is [www.frontiergtm.co](https://www.frontiergtm.co), deployed by Vercel from this repository's `main` branch.
- For approved site changes, edit this repository, verify the local preview, commit only the intended files, and push `main` to `https://github.com/sebabecasis/frontiergtm.git`. Confirm Vercel reports success and the change appears at `www.frontiergtm.co`.
- Do not publish this portfolio to the ChatGPT Sites project or use its `chatgpt.site` URL as the handoff. That copy is not the publishing destination.
- Keep unrelated working-tree changes and parked prototypes out of deployment commits unless the user asks to include them.

## Site structure

- This is a static site served from `dist/`. `vercel.json` sets the output directory; no build command is needed.
- Preview locally with `python3 -m http.server 4173 --directory dist`.

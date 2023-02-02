# nomimono — a simple component library

# Usage

`pnpm install @sayaww/nomimono @fontsource/inter-tight`

`import { Bento } from "@sayaww/nomimono"`
`import "@sayaww/nomimono/style.css"`

# Roadmap

- https://github.com/pacocoursey/cmdk
- divider

- Bootstrapped with [`vite-plugin-react-pages`](https://github.com/vitejs/vite-plugin-react-pages)'s library starter

# Installation

- `pnpm i`

# Folder structure

- `tokens`
- `src`: where all components are exported
- `docs`: for developing and documentation
- .github/workflows: for building tokens from Figma

# Sync tokens with Figma (`tokens`)

- Push from Tokens Studio
- Github workflow will run automatically. Open a PR to merge into your branch

# Developing components

- `pnpm run dev`

Write components in its folder and export

# Write docs

> **Notice the "Components" navigation at the top bar!**

Edit `src/Button/index.tsx` or other source files, the demos will inflect your change instantly.
Edit `src/Button/demos/demo1.tsx` or other demo files, the demos will inflect your change instantly.

`npm run build-docs` The docs are built and served.

`npm run ssr-docs` The app are built into a static site (Static-Site Generation) and served.

`npm run build-lib` Build the library for publishing.

# Deploy docs (not components)

- Link the repo on Vercel for continuous intergration
- Build Command: `pnpm run build-docs`
- Output Directory: `docs/dist`

# Publishing

- `pnpm run ship`

# Fonts

Fonts are not specific but prioritize [Sk-Modernist](https://seankanedesign.gumroad.com/l/sk-modernist) for heading and
Inter for body.

## Sk-Modernist

Buy [here](https://seankanedesign.gumroad.com/l/sk-modernist)

and add to `/fonts` or any place where css can access. (Relative to your public URL, not to local files.)

Create font classnames:

```jsx
import { globalFontFace } from "@macaron-css/core";

const skModernistBold = "SkModernistBold";

globalFontFace(skModernistBold, {
  src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
  fontWeight: 500,
});

const skModernistRegular = "SkModernistRegular";

globalFontFace(skModernistRegular, {
  src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
  fontWeight: 400,
});
```

Access with `SkModernistBold` or `SkModernistRegular`.

## Inter

`pnpm install @fontsource/inter-tight`

and

`import "@fontsource/inter-tight"`

Access with `Inter Tight`.

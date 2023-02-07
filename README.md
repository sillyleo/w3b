# nomimono — a simple component library

Dont use

# Usage

`pnpm install @sayaww/nomimono @fontsource/inter-tight`

`import { Bento } from "@sayaww/nomimono"`
`import "@sayaww/nomimono/style.css"`

# Roadmap

- https://github.com/pacocoursey/cmdk
- https://web.dev/speedy-css-tip-animated-gradient-text/
- Nextra
- framer like ring text
- https://youtu.be/U1T_J6Odoqg and useSound

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

## Local dev

- `pnpm link` in `nomimono`
- `pnpm i folder/to/local-nomimono` in your project

and `pnpm build-lib` in `nomimono` after updates, your project should see the changes.

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

You can then use it like fontFamily: "SkModernistBold"

Access with `SkModernistBold` or `SkModernistRegular`.

## Inter

`pnpm install @fontsource/inter-tight`

and

`import "@fontsource/inter-tight"`

Access with `Inter Tight`.

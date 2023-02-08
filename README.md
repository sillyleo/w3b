## Installation

Install the package with your favorite package manager:

```zsh
pnpm install @sayaww/nomimono
```

### Optional fonts

Fonts are optional but prioritize [Sk-Modernist](https://seankanedesign.gumroad.com/l/sk-modernist) for heading and
Inter for body.

- Install SkModernest in your project's `public` folder
- Install Inter with `pnpm i @fontsource/inter-tight`

## Usage

In your `index.tsx` or `app.tsx`, where all compoenets can access, import the css file:

```jsx
import "@sayaww/nomimono/style.css";
```

In your components, import the components you need:

```jsx
import { Bento } from "@sayaww/nomimono";
```

### Typography wrapper

Nomimono also exports a class `nomimono-style` for basic html elements. Wrap your content

```html
<div class="nomimono-style">
  <h1>Heading</h1>
  <p>Body</p>
</div>
```

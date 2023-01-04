# Readme

# Issues (after meeting with enzo, geroges)

- dockit tailwind example doesn't work
- [avatar story doesn't work, show up as string](https://studio.backlight.dev/edit/xRXzm1XdJMvuvB1JFVqF/avatar/index.stories.ts?p=stories&branch=design-system@Mr0XzynRgURqMyGu0rU9wtkQgfV2)
- cli link doesn't work

  - command is `npx backlight@latest link @sulky-security-0ia5z/w3b --branch "design-system@Mr0XzynRgURqMyGu0rU9wtkQgfV2"`
  - but in package.json the name is `"name": "@backlight-dev/w3b"`

  - and it complained `ERROR: Design system @sulky-security-0ia5z/w3b does not seem to exist`
  - Notes: my workspace is `sillyleo` and design system is `w3b`

———

## Goals

- unstyled design system like radix-ui or headless-ui (somehow works)
- sync tokens with Figma (works)
- write documents and storybook for Tailwind CSS + Figma tokens
- used in Next.js 13 projets as a normal package (somehow works, styling is off sometimes, client component only)
- ~~publish as ESM packages (?)~~
- ~~or in Framer as URL import (not working)~~

## Importing exisiting design system and publish

I tried mui, chakra, but they cannot be imported and used. Looks like they are only docs demo.

How do you make it work?

## Setting up a new design system

The [tailwind example](https://studio.backlight.dev/edit/bfzeo1pWt4DALHCDRGhV/menu/?p=doc) works with some docgen errors.

- best folder structure setup?
- documentation for dockit
  - is there any doc template? or dockit docs?
  - tailwind config breaks my style
  - my story display as string
- fast development without publish package (how cli link works)
- no styling when used as packages (should minify? tailwind isn't scoped)

## Tailwind config

does it support 3.2? https://tailwindcss.com/blog/tailwindcss-v3-2

```
const config = {
  theme: {
    fontFamily: {
      sans: ['Sk-Modernist', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
  },
};

export default config;
```

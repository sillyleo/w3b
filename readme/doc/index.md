# Readme

## Goals

To build on top of

- unstyled design system like radix-ui or headless-ui (somehow works)
- sync tokens with Figma (works)
- write documents and storybook (best format?)
- used in Next.js 13 projets as a normal package (somehow works, styling is off sometimes, client component only)
- ~~publish as ESM packages (?)~~
- ~~or in Framer as URL import (not working)~~

## Questions

- What's the best practice for setting up a design system?

> Most examples I tried (mui, chakra, headless) cannot be imported and used, and there are some [typing issues](https://studio.backlight.dev/edit/bfzeo1pWt4DALHCDRGhV/listbox/src/listbox.tsx?p=doc). I am not sure what's the best way to do it.

> So far the [tailwind example](https://studio.backlight.dev/edit/bfzeo1pWt4DALHCDRGhV/menu/?p=doc) works with some errors

2. how to build a design systyem and publish? most demo I tried cannot be imported and used.

   1. stitched one works with client side component
   2. need to find a way to style the component like tailwind

   3. ESM import and export support?
   4. what's the template (best practive for seeting up a repo) for builing components? I tried several repos but those are good for documents, but cannot be imported and used in othter projects.

      1. Whats the rifht way to write documents, cant find the dockit dox
      2. documentation for dockit. (
      3.
      4. tailwind+ headless example is broken: https://studio.backlight.dev/edit/bfzeo1pWt4DALHCDRGhV/menu/src/menu.tsx?p=doc
      5. PR stuck at #1

   5. Collaberation and Framer/Next js import (aka ESM package support)

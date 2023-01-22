import React from "react";
import { createTheme, defaultSideNavs } from "vite-pages-theme-doc";
import Component404 from "./404";

import { globalFontFace } from "@macaron-css/core";
const skModernistBold = "SkModernistBold";

globalFontFace(skModernistBold, {
  src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
  fontWeight: "bold",
});

const skModernistRegular = "SkModernistRegular";

globalFontFace(skModernistRegular, {
  src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
  fontWeight: 400,
});

export default createTheme({
  logo: (
    <div
      style={{
        fontFamily: skModernistBold + ",sans-serif",
        fontSize: "1.25rem",
        fontWeight: "bold",
      }}
    >
      🥤 Nomimono
    </div>
  ),
  // topNavs: [
  //   {
  //     label: 'Docs',
  //     path: '/',
  //     activeIfMatch: {
  //       // match all first-level paths
  //       path: '/:foo',
  //       end: true
  //     }
  //   },
  //   {
  //     label: 'Components',
  //     path: '/components/main',
  //     activeIfMatch: {
  //       // match all first-level paths
  //       path: '/components/',
  //       end: false
  //     }
  //   }
  // ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        components: {
          demos: {
            label: "Work In Progress",
            order: -1,
          },
          general: {
            label: "General",
            order: 1,
          },
          "data-display": {
            label: "Data Display",
            order: 2,
          },
        },
      },
    });
  },
  Component404,
});

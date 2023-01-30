import React from "react";
import { createTheme, defaultSideNavs } from "vite-pages-theme-doc";
import Component404 from "./404";
import { skModernistBold } from "./style.css";

export default createTheme({
  logo: (
    <h1
      style={{
        fontFamily: skModernistBold,
        fontSize: "1.25rem",
        fontWeight: "bold",
      }}
    >
      🥤 Nomimono
    </h1>
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
        "/": {
          components: {
            label: "experimental",
            order: -1,
          },
          layout: {
            label: "Layout",
            order: 2,
          },
          experimantal: {
            label: "Experimental",
            order: 20,
          },
        },
        components: {
          demos: {
            label: "Work In Progress",
            order: -1,
          },
          general: {
            label: "General",
            order: 1,
          },
          Layout: {
            label: "Layout",
            order: 2,
          },
          experimental: {
            label: "experimental",
            order: 34,
          },
        },
      },
    });
  },
  Component404,
});

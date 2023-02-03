import React from "react";
import { createTheme, defaultSideNavs } from "vite-pages-theme-doc";
import Component404 from "./404";

export default createTheme({
  logo: (
    <h1
      style={{
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
            label: "Components",
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
          wip: {
            label: "Work In Progress",
            order: 30,
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

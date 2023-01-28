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

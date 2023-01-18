// this is the build config for building library source, not the playground
// the build config for the library playground (document) is located at docs/vite.config.ts

import { resolve } from "path";
import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import { macaronVitePlugin } from "@macaron-css/vite";
// import dts from "vite-plugin-dts";
// import dts from "vite-dts";

// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "nomimono",
      // the proper extensions will be added
      fileName: "nomimono",
      // formats: ["es", "cjs", "umd", "iife"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
        // entryFileNames: `nomimono.[hash].mjs`,
        // chunkFileNames: `nomimono.[hash].mjs`,
      },
    },
  },
  plugins: [
    macaronVitePlugin(), // basic setup
    // dts(),
    // dts(),
    // If getEnabled, the CSS will be injected
    // cssInjectedByJsPlugin({ topExecutionPriority: true }), // inject css so lib can be import easily. However this caused SSR flash issues.

    typescript({
      declaration: true,
      emitDeclarationOnly: true,
      noForceEmit: true,
      declarationDir: resolve(__dirname, "dist/types"),
      rootDir: resolve(__dirname, "src"),
    }),
    // use @rollup/plugin-typescript to generate .d.ts files
    // https://github.com/rollup/plugins/tree/master/packages/typescript#noforceemit
  ],
});

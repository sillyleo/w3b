// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/leo/Documents/GitHub/nomimono/node_modules/.pnpm/vite@4.1.2_@types+node@18.13.0/node_modules/vite/dist/node/index.js";
import typescript from "file:///Users/leo/Documents/GitHub/nomimono/node_modules/.pnpm/@rollup+plugin-typescript@10.0.1_typescript@4.9.5/node_modules/@rollup/plugin-typescript/dist/es/index.js";
import { vanillaExtractPlugin } from "file:///Users/leo/Documents/GitHub/nomimono/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.8.0_vite@4.1.2/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
var __vite_injected_original_dirname = "/Users/leo/Documents/GitHub/nomimono";
var vite_config_default = defineConfig({
  publicDir: false,
  build: {
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "nomimono",
      // the proper extensions will be added
      fileName: "nomimono"
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
          react: "React"
        }
        // entryFileNames: `nomimono.[hash].mjs`,
        // chunkFileNames: `nomimono.[hash].mjs`,
      }
    }
  },
  plugins: [
    vanillaExtractPlugin(),
    // macaronVitePlugin(),
    // basic setup
    // dts(),
    // dts(),
    // If getEnabled, the CSS will be injected
    // cssInjectedByJsPlugin({ topExecutionPriority: true }), // inject css so lib can be import easily. However this caused SSR flash issues.
    typescript({
      tsconfig: "./tsconfig.vite.json",
      declaration: true,
      // emitDeclarationOnly: true,
      noForceEmit: true,
      declarationDir: resolve(__vite_injected_original_dirname, "dist/types"),
      rootDir: resolve(__vite_injected_original_dirname, "src")
    })
    // use @rollup/plugin-typescript to generate .d.ts files
    // https://github.com/rollup/plugins/tree/master/packages/typescript#noforceemit
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGVvL0RvY3VtZW50cy9HaXRIdWIvbm9taW1vbm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sZW8vRG9jdW1lbnRzL0dpdEh1Yi9ub21pbW9uby92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGVvL0RvY3VtZW50cy9HaXRIdWIvbm9taW1vbm8vdml0ZS5jb25maWcudHNcIjsvLyB0aGlzIGlzIHRoZSBidWlsZCBjb25maWcgZm9yIGJ1aWxkaW5nIGxpYnJhcnkgc291cmNlLCBub3QgdGhlIHBsYXlncm91bmRcbi8vIHRoZSBidWlsZCBjb25maWcgZm9yIHRoZSBsaWJyYXJ5IHBsYXlncm91bmQgKGRvY3VtZW50KSBpcyBsb2NhdGVkIGF0IGRvY3Mvdml0ZS5jb25maWcudHNcblxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSBcIkByb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHRcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcblxuLy8gaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHB1YmxpY0RpcjogZmFsc2UsXG4gIGJ1aWxkOiB7XG4gICAgLy8gdXNlIHZpdGUgbGlicmFyeSBtb2RlIHRvIGJ1aWxkIHRoZSBwYWNrYWdlXG4gICAgLy8gaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjbGlicmFyeS1tb2RlXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJub21pbW9ub1wiLFxuICAgICAgLy8gdGhlIHByb3BlciBleHRlbnNpb25zIHdpbGwgYmUgYWRkZWRcbiAgICAgIGZpbGVOYW1lOiBcIm5vbWltb25vXCIsXG4gICAgICAvLyBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiLCBcInVtZFwiLCBcImlpZmVcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZG4ndCBiZSBidW5kbGVkXG4gICAgICAvLyBpbnRvIHlvdXIgbGlicmFyeVxuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGVudHJ5RmlsZU5hbWVzOiBgbm9taW1vbm8uW2hhc2hdLm1qc2AsXG4gICAgICAgIC8vIGNodW5rRmlsZU5hbWVzOiBgbm9taW1vbm8uW2hhc2hdLm1qc2AsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbigpLFxuXG4gICAgLy8gbWFjYXJvblZpdGVQbHVnaW4oKSxcbiAgICAvLyBiYXNpYyBzZXR1cFxuICAgIC8vIGR0cygpLFxuICAgIC8vIGR0cygpLFxuICAgIC8vIElmIGdldEVuYWJsZWQsIHRoZSBDU1Mgd2lsbCBiZSBpbmplY3RlZFxuICAgIC8vIGNzc0luamVjdGVkQnlKc1BsdWdpbih7IHRvcEV4ZWN1dGlvblByaW9yaXR5OiB0cnVlIH0pLCAvLyBpbmplY3QgY3NzIHNvIGxpYiBjYW4gYmUgaW1wb3J0IGVhc2lseS4gSG93ZXZlciB0aGlzIGNhdXNlZCBTU1IgZmxhc2ggaXNzdWVzLlxuXG4gICAgdHlwZXNjcmlwdCh7XG4gICAgICB0c2NvbmZpZzogXCIuL3RzY29uZmlnLnZpdGUuanNvblwiLFxuXG4gICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcbiAgICAgIC8vIGVtaXREZWNsYXJhdGlvbk9ubHk6IHRydWUsXG4gICAgICBub0ZvcmNlRW1pdDogdHJ1ZSxcbiAgICAgIGRlY2xhcmF0aW9uRGlyOiByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0L3R5cGVzXCIpLFxuICAgICAgcm9vdERpcjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgIH0pLFxuICAgIC8vIHVzZSBAcm9sbHVwL3BsdWdpbi10eXBlc2NyaXB0IHRvIGdlbmVyYXRlIC5kLnRzIGZpbGVzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9wbHVnaW5zL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3R5cGVzY3JpcHQjbm9mb3JjZWVtaXRcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUU3QixPQUFPLGdCQUFnQjtBQUV2QixTQUFTLDRCQUE0QjtBQVJyQyxJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUE7QUFBQTtBQUFBLElBR0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUE7QUFBQSxNQUVOLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixVQUFVLENBQUMsT0FBTztBQUFBLE1BQ2xCLFFBQVE7QUFBQTtBQUFBO0FBQUEsUUFHTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQSxNQUdGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBU3JCLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUVWLGFBQWE7QUFBQTtBQUFBLE1BRWIsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQy9DLFNBQVMsUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDbkMsQ0FBQztBQUFBO0FBQUE7QUFBQSxFQUdIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

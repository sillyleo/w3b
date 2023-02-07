import nextra from "nextra";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();
/**
 * @type {import('next').NextConfig}
 */

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});
const nextConfig = {};

export default withNextra(withVanillaExtract(nextConfig));

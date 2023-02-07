import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});
const nextConfig = {};

export default withNextra(nextConfig);

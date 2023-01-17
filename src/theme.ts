import { createGlobalTheme } from "@macaron-css/core";
import figmaTokens from "./theme.json";

// turn figmaTokens.colors into an array of objects

const commonTokens = {
  radii: figmaTokens.borderRadius,
  borderWidth: figmaTokens.borderWidth,
  opacity: figmaTokens.opacity,
  fontFamiliy: figmaTokens.fontFamilies,
  fontSize: figmaTokens.fontSizes,
  lineHeight: figmaTokens.lineHeights,
  fontWeight: figmaTokens.fontWeights,
  letterSpacing: "-1px",
  // paragraphSpacing: flattenKeys(figmaTokens.paragraphSpacing),
  spacing: figmaTokens.spacing,
  screens: figmaTokens.screens,
  // unsupported tokens
  // ...figmaTokens.typography,
  // ...figmaTokens.boxShadow,
};

// Setting up accent
// Change `figmaTokens.colors.blue` into other shades
export const accent = Object.keys(figmaTokens.colors.blue).reduce(
  (acc, key) => {
    acc[key] = figmaTokens.colors.blue[key];
    return acc;
  },
  {}
);
export const theme = createGlobalTheme(":root", {
  colors: { ...figmaTokens.colors, ...figmaTokens.base, accent: accent },
  radii: figmaTokens.borderRadius,
  borderWidth: figmaTokens.borderWidth,
  opacity: figmaTokens.opacity,
  fontFamiliy: figmaTokens.fontFamilies,
  fontSize: figmaTokens.fontSizes,
  lineHeight: figmaTokens.lineHeights,
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800,
  },
  // fontWeight: figmaTokens.fontWeights,
  letterSpacing: "-1px",
  // paragraphSpacing: flattenKeys(figmaTokens.paragraphSpacing),
  spacing: figmaTokens.spacing,
  screens: figmaTokens.screens,
});

// export const darkTheme = createTheme(theme, {
//   // color: lightColors,
//   // ...commonTokens
// });

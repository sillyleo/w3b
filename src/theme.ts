import { createGlobalTheme, macaron$ } from "@macaron-css/core";
import figmaTokens from "./theme.json";

// turn figmaTokens.colors into an array of objects

// Setting up accent
// Change `figmaTokens.colors.blue` into other shades
const accent = Object.keys(figmaTokens.colors.blue).reduce((acc, key) => {
  acc[key] = figmaTokens.colors.blue[key];
  return acc;
}, {});

const fontWeights: {
  // temporarily supress error
  [key: string]: string;
} = Object.keys(figmaTokens.fontWeights).reduce((acc, key) => {
  acc[key] = figmaTokens.fontWeights[key].toString();
  return acc;
}, {});

// Unused. Use spacing instead
const paragraphSpacing: {
  // temporarily supress error
  [key: string]: string;
} = Object.keys(figmaTokens.paragraphSpacing).reduce((acc, key) => {
  acc[key] = `${figmaTokens.paragraphSpacing[key]}px`;
  return acc;
}, {});

// convert % in letterSpacing into px
// eg -2% => -0.2rem
const letterSpacing: {
  // temporarily supress error
  [key: string]: string;
} = Object.keys(figmaTokens.letterSpacing).reduce((acc, key) => {
  const value = figmaTokens.letterSpacing[key];
  if (typeof value === "string" && value.endsWith("%")) {
    const percent = parseFloat(value.slice(0, -1));
    acc[key] = `${percent / 100}rem`;
  } else {
    acc[key] = value;
  }
  return acc;
}, {});

// console.log(letterSpacing);

export const theme = createGlobalTheme(":root", {
  colors: { ...figmaTokens.colors, ...figmaTokens.base, accent: accent },
  radii: figmaTokens.borderRadius,
  borderWidth: figmaTokens.borderWidth,
  opacity: figmaTokens.opacity,
  fontFamiliy: figmaTokens.fontFamilies,
  fontSize: figmaTokens.fontSizes,
  lineHeight: figmaTokens.lineHeights,
  fontWeight: fontWeights,
  paragraphSpacing: figmaTokens.paragraphSpacing,
  letterSpacing: letterSpacing,
  spacing: figmaTokens.spacing,
  screens: figmaTokens.screens,
});

// export const darkTheme = createTheme(theme, {
//   // color: lightColors,
//   // ...commonTokens
// });

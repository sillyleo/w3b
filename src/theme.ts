import { createGlobalTheme, createTheme } from "@macaron-css/core";
import figmaTokens from "./theme.json";
// import "@fontsource/inter-tight";

// turn figmaTokens.colors into an array of objects

const fontWeights: {
  // temporarily supress error
  [key: string]: string;
} = Object.keys(figmaTokens.fontWeights).reduce((acc, key) => {
  acc[key] = figmaTokens.fontWeights[key].toString();
  return acc;
}, {});

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
const commonTokens = {
  radii: figmaTokens.borderRadius,
  borderWidth: figmaTokens.borderWidth,
  opacity: figmaTokens.opacity,
  fontFamily: {
    heading: `${figmaTokens.fontFamilies.heading}, sans-serif`,
    body: `'Inter Tight',${figmaTokens.fontFamilies.body},, sans-serif`,
  },
  fontSize: figmaTokens.fontSizes,
  lineHeight: figmaTokens.lineHeights,
  fontWeight: fontWeights,
  paragraphSpacing: figmaTokens.paragraphSpacing,
  letterSpacing: letterSpacing,
  spacing: figmaTokens.spacing,
  screens: figmaTokens.screens,
};
export const theme = createGlobalTheme(":root", {
  colors: { ...figmaTokens.light, ...figmaTokens.base },
  ...commonTokens,
});

// export const [lightTheme, theme] = createTheme({
//   colors: { ...figmaTokens.colors, ...figmaTokens.base },
//   ...commonTokens
// });

export const darkTheme = createTheme(theme, {
  colors: { ...figmaTokens.dark, ...figmaTokens.base },
  ...commonTokens,
});

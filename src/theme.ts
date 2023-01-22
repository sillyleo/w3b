import {
  createGlobalTheme,
  createTheme,
  fontFace,
  globalStyle,
} from "@macaron-css/core";
import figmaTokens from "./theme.json";
// SkModernistBold
// SkModernistRegular

const fontWeights: {
  // temporarily supress error
  [key: string]: string;
} = Object.keys(figmaTokens.fontWeights).reduce((acc, key) => {
  acc[key] = figmaTokens.fontWeights[key].toString();
  return acc;
}, {});

const letterSpacing: {
  // temporarily supress error
  [key: string]: string;
} = Object.keys(figmaTokens.letterSpacing).reduce((acc, key) => {
  const value = figmaTokens.letterSpacing[key];
  if (typeof value === "string" && value.endsWith("%")) {
    const percent = parseFloat(value.slice(0, -1));
    acc[key] = `${(percent / 100) * 0.01}rem`;
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
    heading: `${figmaTokens.fontFamilies.heading},'SkModernistBold','Sk-Modernist-Bold',sans-serif`,
    body: `'Inter Tight',${figmaTokens.fontFamilies.body}, sans-serif`,
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

export const darkTheme = createTheme(theme, {
  colors: { ...figmaTokens.dark, ...figmaTokens.base },
  ...commonTokens,
});

globalStyle(":root", {
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  // WebkitFontSmoothing: "antialiased",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontSize: "100%",
  lineHeight: 1,
});

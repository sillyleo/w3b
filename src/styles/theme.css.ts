import {
  createGlobalTheme,
  createGlobalThemeContract,
  createTheme,
  globalStyle,
  globalFontFace,
  style,
} from "@vanilla-extract/css";
import figmaTokens from "../theme.json";

// Font setup
// Usage:
// fontFamily: SkModernistBold
// fontFamily: SkModernistRegular
// These paths are relative to the deployment folder (/docs in this case. Put those in your own public folder.)

const skModernistBold = "SkModernistBold";
globalFontFace(skModernistBold, {
  src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
  fontWeight: "bold",
});

const skModernistRegular = "SkModernistRegular";
globalFontFace(skModernistRegular, {
  src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
  fontWeight: 400,
});

// Process colors from tomato: {1: color} to tomato1: color
// a function that takes an object and flattens its keys into a string with custom seperator
// e.g. { colors: { red: { 1: "#fff" } } } => "colors-red-1"
function flattenKeys(
  obj: any,
  sep = "",
  parentKey = ""
): Record<string, string> {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + key : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}

const lightColors = flattenKeys(figmaTokens.light);
const baseColors = flattenKeys(figmaTokens.base);
const darkColors = flattenKeys(figmaTokens.dark);

const fontWeights: {
  [key: string]: string;
} = Object.keys(figmaTokens.fontWeights).reduce((acc, key) => {
  acc[key] = figmaTokens.fontWeights[key].toString();
  return acc;
}, {});

const letterSpacing: {
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
  colors: {
    ...baseColors,
    ...lightColors,
  },
  ...commonTokens,
});

export const darkTheme = createTheme(theme, {
  colors: {
    ...baseColors,
    ...darkColors,
  },
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

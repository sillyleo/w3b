import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";
import figmaTokens from "../theme.json";
// SkModernistBold
// SkModernistRegular

// a function that takes an object and flattens its keys into a string with custom seperator
// e.g. { colors: { red: { 1: "#fff" } } } => "colors-red-1"
function flattenKeys(obj: any, sep = "", parentKey = "") {
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

// process colors from tomato: {1: color} to tomato1: color

const lightColors = flattenKeys(figmaTokens.light);
const baseColors = flattenKeys(figmaTokens.base);
const darkColors = flattenKeys(figmaTokens.dark);

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
console.log(baseColors);

export const theme = createGlobalThemeContract({
  colors: {
    white: "#fff",
    black: "#000",
    text: "#11181c",
    textSecondary: "#687076",
    textTertiary: "#7e868c",
  },
  // colors: { ...figmaTokens.colors.tomato },
  // ...commonTokens,
});

createGlobalTheme(":root", theme, {
  colors: {
    white: "#fff",
    black: "#000",
    text: "#11181c",
    textSecondary: "#687076",
    textTertiary: "#7e868c",
  },
});

// createGlobalTheme("dark", theme, {
//   colors: baseColors,
// });

globalStyle(":root", {
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  // WebkitFontSmoothing: "antialiased",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontSize: "100%",
  lineHeight: 1,
});

import {
  createGlobalTheme,
  createGlobalThemeContract,
  createTheme,
  createThemeContract,
} from "@macaron-css/core";
import figmaTokens from "./theme.json";
import { macaron$ } from "@macaron-css/core";

// turn figmaTokens.colors into an array of objects

const defaultColors = macaron$(() => flattenKeys(figmaTokens.colors));
const lightColors = flattenKeys(figmaTokens.light);
const darkColors = flattenKeys(figmaTokens.dark);
const baseColors = flattenKeys(figmaTokens.base);
// console.log(defaultColors);
const commonTokens = {
  radii: figmaTokens.borderRadius,
  borderWidth: figmaTokens.borderWidth,
  opacity: figmaTokens.opacity,
  fontFamiliy: figmaTokens.fontFamilies,
  fontSize: figmaTokens.fontSizes,
  lineHeight: figmaTokens.lineHeights,
  fontWeight: {
    bold: "bold",
    medium: "semibold",
    regular: "regular",
  },

  letterSpacing: {
    tight: "-0.05em",
  },
  paragraphSpacing: flattenKeys(figmaTokens.paragraphSpacing),
  spacing: figmaTokens.spacing,
  screens: figmaTokens.screens,
  // unsupported tokens
  // ...figmaTokens.fontWeights,
  // ...figmaTokens.typography,
  // ...figmaTokens.boxShadow,
};

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

// convert nested object so I can access theme with syntax like "obj.keys"
// e.g. { colors: { red: { 1: "#fff" } } } => colors.red.1
function convertNestedObject(obj: any) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      newObj[key] = convertNestedObject(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

const root = createGlobalTheme(":root", {
  ...commonTokens,
});

const colors = createThemeContract({
  ...baseColors,
  ...defaultColors,
});

export const lightTheme = createTheme(colors, {
  ...baseColors,
  ...lightColors,
});

export const darkTheme = createTheme(colors, {
  ...baseColors,
  ...darkColors,
});

export const theme = { colors, ...root };

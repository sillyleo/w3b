// This is mainly for managing auto color switching

import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from "@vanilla-extract/css";
import figmaTokens from "../../tokens/theme.json";

// TODO: properties that aren't working
// fontWeights: figmaTokens.fontWeights,
// paragraphSpacing;

// TODO: typography should be sprinkles
// boxShadow;

const root = createGlobalTheme(":root", {
  radii: figmaTokens.borderRadius,
  borderWidth: figmaTokens.borderWidth,
  opacity: figmaTokens.opacity,
  fontFamilies: figmaTokens.fontFamilies,
  lineHeights: figmaTokens.lineHeights,
  letterSpacings: figmaTokens.letterSpacing,
  fontSizes: figmaTokens.fontSizes,
  spacing: figmaTokens.spacing,
});

const defaultColors = flattenKeys(figmaTokens.colors);
const lightColors = flattenKeys(figmaTokens.light);
const darkColors = flattenKeys(figmaTokens.dark);

// type colors so I can access theme with syntax like "obj.keys"
// e.g. { colors: { red: { 1: "#fff" } } } => colors.red.1

const colors = createThemeContract({
  ...defaultColors,
});

export const lightTheme = createTheme(colors, {
  ...lightColors,
});

export const darkTheme = createTheme(colors, {
  ...darkColors,
});

export const vars = { ...root, colors };

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

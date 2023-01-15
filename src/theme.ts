import { createGlobalTheme, createTheme } from "@macaron-css/core";
import figmaTokens from "../tokens/theme.json";
import { macaron$ } from "@macaron-css/core";

// turn figmaTokens.colors into an array of objects

const defaultColors = flattenKeys(figmaTokens.colors);
const lightColors = flattenKeys(figmaTokens.light);
const darkColors = flattenKeys(figmaTokens.dark);
const baseColors = flattenKeys(figmaTokens.base);

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

export const theme = createGlobalTheme(":root", {
  colors: {
    ...figmaTokens.colors,
    // ...figmaTokens.base,
  },
  ...commonTokens,
});

export const darkTheme = createTheme(theme, {
  colors: {
    ...figmaTokens.dark,
    // ...figmaTokens.base,
  },
  ...commonTokens,
});

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

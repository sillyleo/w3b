// This is mainly for managing auto color switching

import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
  createVar,
  style,
} from "@vanilla-extract/css";
import figmaTokens from "../../tokens/theme.json";

const defaultColors = flattenKeys(figmaTokens.colors);
const lightColors = flattenKeys(figmaTokens.light);
const darkColors = flattenKeys(figmaTokens.dark);
const baseColors = flattenKeys(figmaTokens.base);

const theme = createThemeContract({
  ...defaultColors,
  ...baseColors,
});

export const lightTheme = createTheme(theme, {
  ...lightColors,
  ...baseColors,
});

export const darkTheme = createTheme(theme, {
  ...darkColors,
  ...baseColors,
});

export const colors = {
  // ...root,
  ...theme,
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

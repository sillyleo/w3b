import { createStitches } from "@stitches/react";
import figmaTokens from "../tokens/theme.json";

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

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...baseColors,
      ...lightColors,

      accent1: "$blue1",
      accent2: "$blue2",
      accent3: "$blue3",
      accent4: "$blue4",
      accent5: "$blue5",
      accent6: "$blue6",
      accent7: "$blue7",
      accent8: "$blue8",
      accent9: "$blue9",
      accent10: "$blue10",
      accent11: "$blue11",
      accent12: "$blue12",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },

  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: any) => ({
      width: value,
      height: value,
    }),

    // An abbreviated property for border-radius
    br: (value: any) => ({
      borderRadius: value,
    }),
  },
});

// only override some colors
export const darkTheme = createTheme({
  colors: {
    ...darkColors,
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, boxSizing: "border-box" },
});

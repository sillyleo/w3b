import { createStitches, defaultThemeMap } from "@stitches/react";
import figmaTokens from "./theme.json";

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function flattenKeys(
  obj: any,
  sep = "",
  parentKey = ""
): Record<string, string> {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize(key) : key;
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
const brandColors = flattenKeys(figmaTokens.brand);
const supportColors = flattenKeys(figmaTokens.support);
const darkColors = flattenKeys(figmaTokens.dark);

// bgToneScales

// const bgToneScales = {
//   bgTone1: (value: keyof Colors) => ({
//     backgroundColor: `$${value}1`,
//   }),
//   bgTone2: (value: keyof Colors) => ({
//     backgroundColor: `$${value}2`,
//   }),
//   bgTone3: (value: keyof Colors) => ({
//     backgroundColor: `$${value}3`,
//   }),
//   bgTone4: (value: keyof Colors) => ({
//     backgroundColor: `$${value}4`,
//   }),
//   bgTone5: (value: keyof Colors) => ({
//     backgroundColor: `$${value}5`,
//   }),
//   bgTone6: (value: keyof Colors) => ({
//     backgroundColor: `$${value}6`,
//   }),
//   bgTone7: (value: keyof Colors) => ({
//     backgroundColor: `$${value}7`,
//   }),
//   bgTone8: (value: keyof Colors) => ({
//     backgroundColor: `$${value}8`,
//   }),
//   bgTone9: (value: keyof Colors) => ({
//     backgroundColor: `$${value}9`,
//   }),
//   bgTone10: (value: keyof Colors) => ({
//     backgroundColor: `$${value}10`,
//   }),
//   bgTone11: (value: keyof Colors) => ({
//     backgroundColor: `$${value}11`,
//   }),
//   bgTone12: (value: keyof Colors) => ({
//     backgroundColor: `$${value}12`,
//   }),
// };

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
      ...brandColors,
      ...supportColors,
      ...lightColors,
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
    // ...bgToneScales,
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
  themeMap: {
    ...defaultThemeMap,
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

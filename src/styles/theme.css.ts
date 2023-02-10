import {
  createGlobalTheme,
  createTheme,
  globalFontFace,
  globalStyle,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { checkboxLabel } from "src/Checkbox/style.css";
import { allTones } from "src/constants";
import figmaTokens from "../theme.json";

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
    heading: `${figmaTokens.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
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
  margin: 0,
  padding: 0,
  fontSize: "100%",
});

// reset
globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

// default styling
globalStyle(
  ".nomimono-style h1,.nomimono-style h2,.nomimono-style h3,.nomimono-style h4, .nomimono-style h5,.nomimono-style h6",
  {
    fontFamily: theme.fontFamily.heading,
    marginTop: 0,
    marginBottom: "0.5em",
  }
);

globalStyle(".nomimono-style .body", {
  fontFamily: theme.fontFamily.body,
});

globalStyle(".nomimono-style", {
  fontFamily: theme.fontFamily.body,
});

globalStyle(".nomimono-style .heading", {
  fontFamily: theme.fontFamily.heading,
});

globalStyle(".nomimono-style p, .nomimono-style ul, .nomimono-style ol", {
  marginTop: 0,
  marginBottom: "1em",
  fontFamily: theme.fontFamily.body,
});

export const skModernistBold = "SkModernistBold";
globalFontFace(skModernistBold, {
  src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
  fontWeight: "bold",
});

export const skModernistRegular = "SkModernistRegular";
globalFontFace(skModernistRegular, {
  src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
  fontWeight: 400,
});

// color and shadow variants

// primaryClass[tone]
export const primaryClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      backgroundColor: theme.colors[tone + "9"],
      ":hover": {
        backgroundColor: theme.colors[tone + "10"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "11"],
      },
      color: theme.colors.black,
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone + "12"],
      ":hover": {
        backgroundColor: theme.colors[tone + "12"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "11"],
      },
      color: theme.colors[tone + "2"],
    };
  } else {
    // color bg + white text

    return {
      backgroundColor: theme.colors[tone + "9"],
      ":hover": {
        backgroundColor: theme.colors[tone + "10"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "11"],
      },
      color: theme.colors.white,
    };
  }
});

// secondaryClass[tone]
export const secondaryClass = styleVariants(allTones, (tone: keyof Colors) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      backgroundColor: theme.colors[tone + "4"],
      ":hover": {
        backgroundColor: theme.colors[tone + "5"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "6"],
      },
      color: theme.colors[tone + "11"],
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone + "6"],
      ":hover": {
        backgroundColor: theme.colors[tone + "7"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "8"],
      },
      color: theme.colors[tone + "12"],
    };
  } else {
    // color bg

    return {
      backgroundColor: theme.colors[tone + "4"],
      ":hover": {
        backgroundColor: theme.colors[tone + "5"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "6"],
      },
      color: theme.colors[tone + "11"],
    };
  }
});
// tertiaryClass[tone]
export const ghostClass = styleVariants(allTones, (tone: keyof Colors) => {
  if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    return {
      // grayscale series

      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: theme.colors[tone + "3"],
        // color: theme.colors[tone + '12']
      },
      ":active": {
        backgroundColor: theme.colors[tone + "4"],
      },

      color: theme.colors[tone + "11"],
    };
  } else {
    return {
      backgroundColor: "transparent",
      ":hover": {
        // color: theme.colors[tone + '12'],
        backgroundColor: theme.colors[tone + "3"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "4"],
      },
      color: theme.colors[tone + "11"],
    };
  }
});

// Ref: https://www.joshwcomeau.com/shadow-palette/

export const smPrimaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    selectors: {
      [`:not(${darkTheme}) > &`]: {
        boxShadow: `
        0px 0.2px 0.2px ${theme.colors[tone + "7"]},
        0px 0.8px 0.9px -0.8px ${theme.colors[tone + "7"]},
        -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "7"]},
      `,
      },
    },
  };
});

export const mdPrimaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    selectors: {
      [`:not(${darkTheme}) > &`]: {
        boxShadow: `
      0px 0.2px 0.2px ${theme.colors[tone + "7"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "7"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "7"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "7"]}
    `,
      },
    },
  };
});

export const lgPrimaryShadowClass = styleVariants(allTones, (tone) => {
  return {
    selectors: {
      [`:not(${darkTheme}) > &`]: {
        boxShadow: `
    0px 0.1px 0.1px ${theme.colors[tone + "5"]},
    0px 0.7px 0.8px -0.4px ${theme.colors[tone + "5"]},
    -0.1px 1.3px 1.5px -0.7px ${theme.colors[tone + "5"]},
    -0.1px 2.2px 2.5px -1.1px ${theme.colors[tone + "5"]},
    -0.2px 3.4px 3.8px -1.4px ${theme.colors[tone + "5"]},
    -0.3px 5.4px 6.1px -1.8px ${theme.colors[tone + "5"]},
    -0.4px 8.2px 9.2px -2.1px ${theme.colors[tone + "5"]},
    -0.6px 12.1px 13.6px -2.5px ${theme.colors[tone + "5"]};
      `,
      },
    },
  };
});

export const smSecondaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    selectors: {
      [`:not(${darkTheme}) > &`]: {
        boxShadow: `
      0px 1px 4px ${theme.colors[tone + "6"]},
      0px 0.2px 0.2px ${theme.colors[tone + "5"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "5"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "5"]},
    `,
      },
    },
  };
});

export const mdSecondaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    selectors: {
      [`:not(${darkTheme}) > &`]: {
        boxShadow: `
      0px 1px 4px ${theme.colors[tone + "5"]},
      0px 0.2px 0.2px ${theme.colors[tone + "4"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "4"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "4"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "4"]}
    `,
      },
    },
  };
});

export const lgSecondaryShadowClass = styleVariants(allTones, (tone) => {
  return {
    selectors: {
      [`:not(${darkTheme}) > &`]: {
        boxShadow: `
          0px 1px 4px ${theme.colors[tone + "5"]},
    0px 0.1px 0.1px ${theme.colors[tone + "4"]},
    0px 0.7px 0.8px -0.4px ${theme.colors[tone + "4"]},
    -0.1px 1.3px 1.5px -0.7px ${theme.colors[tone + "5"]},
    -0.1px 2.2px 2.5px -1.1px ${theme.colors[tone + "5"]},
    -0.2px 3.4px 3.8px -1.4px ${theme.colors[tone + "5"]},
    -0.3px 5.4px 6.1px -1.8px ${theme.colors[tone + "5"]}
      `,
      },
    },
  };
});

export const smGhostShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: "none",
    // boxShadow: `
    //       0px 1px 4px ${theme.colors[tone + "5"]},

    //   0px 0.2px 0.2px ${theme.colors[tone + "4"]},
    //   0px 0.8px 0.9px -0.8px ${theme.colors[tone + "4"]},
    //   -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "4"]},
    //   -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "4"]}
    // `,
  };
});

export const mdGhostShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: "none",

    // boxShadow: `
    //       0px 1px 4px ${theme.colors[tone + "6"]},

    //   0px 0.2px 0.2px ${theme.colors[tone + "4"]},
    //   0px 0.8px 0.9px -0.8px ${theme.colors[tone + "4"]},
    //   -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "4"]},
    //   -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "4"]}
    // `,
  };
});

export const lgGhostShadowClass = styleVariants(allTones, (tone) => {
  return {
    boxShadow: "none",

    // boxShadow: `
    //       0px 1px 4px ${theme.colors[tone + "6"]},

    // 0px 0.1px 0.1px ${theme.colors[tone + "4"]},
    // 0px 0.7px 0.8px -0.4px ${theme.colors[tone + "4"]},
    // -0.1px 1.3px 1.5px -0.7px ${theme.colors[tone + "4"]},
    // -0.1px 2.2px 2.5px -1.1px ${theme.colors[tone + "4"]},
    // -0.2px 3.4px 3.8px -1.4px ${theme.colors[tone + "4"]},
    // -0.3px 5.4px 6.1px -1.8px ${theme.colors[tone + "4"]},
    // -0.4px 8.2px 9.2px -2.1px ${theme.colors[tone + "4"]},
    // -0.6px 12.1px 13.6px -2.5px ${theme.colors[tone + "4"]};
    //   `,
  };
});

// Sprinkles

const colorStyles = defineProperties({
  properties: {
    color: theme.colors,
    background: theme.colors,
    backgroundColor: theme.colors,
    borderColor: theme.colors,
  },
  shorthands: {
    bg: ["backgroundColor"],
  },
});

// General sprinkle shadow corlor
const shadowColorSm = "rgba(0,0,0,0.13)";
const shadowColorMd = "rgba(0,0,0,0.13)";
const shadowColorLg = "rgba(0,0,0,0.04)";

const layoutStyles = defineProperties({
  conditions: {
    xs: {},
    sm: { "@media": `screen and (min-width: ${figmaTokens.screens.sm})` },
    md: { "@media": `screen and (min-width: ${figmaTokens.screens.md})` },
    lg: { "@media": `screen and (min-width: ${figmaTokens.screens.lg})` },
    xl: { "@media": `screen and (min-width: ${figmaTokens.screens.xl})` },
    "2xl": {
      "@media": `screen and (min-width: ${figmaTokens.screens["2xl"]})`,
    },
  },
  defaultCondition: "xs",
  properties: {
    opacity: theme.opacity,
    left: theme.spacing,
    right: theme.spacing,
    top: theme.spacing,
    bottom: theme.spacing,
    textAlign: ["left", "center", "right"],
    display: ["none", "block", "flex", "inline", "inline-block", "inline-flex"],
    flexDirection: ["row", "column"],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    justifySelf: ["auto", "flex-start", "center", "flex-end", "stretch"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    alignSelf: ["auto", "flex-start", "center", "flex-end", "stretch"],
    gap: theme.spacing,
    lineHeight: theme.lineHeight,
    fontFamily: theme.fontFamily,
    cursor: ["pointer", "default", "text", "not-allowed"],
    transition: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out",
    },
    letterSpacing: theme.letterSpacing,
    margin: theme.spacing,
    padding: theme.spacing,
    paddingTop: theme.spacing,
    paddingBottom: theme.spacing,
    paddingLeft: theme.spacing,
    paddingRight: theme.spacing,
    marginTop: theme.spacing,
    marginBottom: theme.spacing,
    marginLeft: theme.spacing,
    marginRight: theme.spacing,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
    borderRadius: theme.radii,
    overflow: ["hidden", "visible", "scroll", "auto"],
    textTransform: ["uppercase", "lowercase", "capitalize", "none"],
    textDecoration: ["none", "underline", "line-through"],
    border: {
      "0": {
        borderWidth: theme.borderWidth[0],
        borderStyle: "none",
      },
      "2": {
        borderWidth: theme.borderWidth[2],
        borderStyle: "solid",
      },
      "4": {
        borderWidth: theme.borderWidth[4],
        borderStyle: "solid",
      },
      "8": {
        borderWidth: theme.borderWidth[8],
        borderStyle: "solid",
      },
    },
    boxShadow: {
      // this is the generic gray shadow
      sm: {
        selectors: {
          [`:not(${darkTheme}) > &`]: {
            boxShadow: `
            0px 0.7px 0.8px ${shadowColorSm},
    0px 1.1px 1.2px -1.2px ${shadowColorSm},
    0px 2.7px 3px -2.5px ${shadowColorSm};

      `,
          },
        },
      },
      md: {
        selectors: {
          [`:not(${darkTheme}) > &`]: {
            boxShadow: `
 0px 0.2px 0.2px ${shadowColorMd},
    0px 0.8px 0.9px -0.8px ${shadowColorMd},
    0px 2px 2.3px -1.7px ${shadowColorMd},
    -0.1px 5px 5.6px -2.5px ${shadowColorMd}


    `,
          },
        },
      },
      lg: {
        selectors: {
          [`:not(${darkTheme}) > &`]: {
            boxShadow: `
 0px 0.2px 0.2px ${shadowColorLg},
    0px 1.4px 1.6px -0.4px ${shadowColorLg},
    0px 2.7px 3px -0.7px ${shadowColorLg},
    -0.1px 4.4px 5px -1.1px ${shadowColorLg},
    -0.1px 7.1px 8px -1.4px ${shadowColorLg},
    -0.2px 11.1px 12.5px -1.8px ${shadowColorLg},
    -0.3px 16.8px 18.9px -2.1px ${shadowColorLg},
    -0.5px 24.8px 27.9px -2.5px ${shadowColorLg};
      `,
          },
        },
      },
    },
    width: theme.spacing,
    height: theme.spacing,
    minWidth: theme.spacing,
    minHeight: theme.spacing,
    maxWidth: theme.spacing,
    maxHeight: theme.spacing,
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    w: ["width"],
    h: ["height"],
    minW: ["minWidth"],
    minH: ["minHeight"],
    maxW: ["maxWidth"],
    maxH: ["maxHeight"],
    boxSize: ["width", "height"],
  },
});

// checkboxRootTone[tone]
export const formTone = styleVariants(allTones, (tone: keyof Colors) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      backgroundColor: theme.colors[tone + "2"],
      boxShadow: `0 0 0 1.5px ${theme.colors[tone + "7"]}`,
      ":hover": {
        backgroundColor: theme.colors[tone + "3"],
        boxShadow: `0 0 0 1.5px ${theme.colors[tone + "8"]}`,
      },
      selectors: {
        [`${checkboxLabel["enabled"]}:hover &`]: {
          backgroundColor: theme.colors[tone + "3"],
          boxShadow: `0 0 0 1.5px ${theme.colors[tone + "8"]}`,
        },
      },
      ":active": {
        backgroundColor: theme.colors[tone + "3"],
      },
      color: theme.colors[tone + "11"],
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone + "2"],
      boxShadow: `0 0 0 1.5px ${theme.colors[tone + "7"]}`,
      ":hover": {
        backgroundColor: theme.colors[tone + "3"],
        boxShadow: `0 0 0 1.5px ${theme.colors[tone + "8"]}`,
      },
      selectors: {
        [`${checkboxLabel["enabled"]}:hover &`]: {
          backgroundColor: theme.colors[tone + "3"],
          boxShadow: `0 0 0 1.5px ${theme.colors[tone + "8"]}`,
        },
      },
      ":active": {
        backgroundColor: theme.colors[tone + "3"],
      },
      color: theme.colors[tone + "12"],
    };
  } else {
    // color bg

    return {
      backgroundColor: theme.colors[tone + "2"],
      boxShadow: `0 0 0 1.5px ${theme.colors[tone + "7"]}`,

      ":hover": {
        backgroundColor: theme.colors[tone + "3"],
        boxShadow: `0 0 0 1.5px ${theme.colors[tone + "8"]}`,
      },
      selectors: {
        [`${checkboxLabel["enabled"]}:hover &`]: {
          backgroundColor: theme.colors[tone + "3"],
          boxShadow: `0 0 0 1.5px ${theme.colors[tone + "8"]}`,
        },
      },
      ":active": {
        backgroundColor: theme.colors[tone + "3"],
      },
      color: theme.colors[tone + "11"],
    };
  }
});

export const sprinkles = createSprinkles(colorStyles, layoutStyles);
export type Sprinkles = Parameters<typeof sprinkles>[0];

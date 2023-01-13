// This compiles the figmaTokens and make it usable tokens for vanilla-extract

import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from "@vanilla-extract/css";
import figmaTokens from "../../tokens/theme.json";

// console.log(figmaTokens);
//  a function to iterate through all objects, check if the value is a string, if not, convert them to strings.
//  This is to make the tokens usable by vanilla-extract
const convertValuesToString = (obj: any) => {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = JSON.stringify(obj[key]);
    }
  }
  return obj;
};

// TODO: properties that aren't working
// opacity: { ...figmaTokens.opacity },
// fontWeights: figmaTokens.fontWeights,

const root = createGlobalTheme(":root", {
  radii: figmaTokens.borderRadius,
  borderWidth: figmaTokens.borderWidth,
  fontFamilies: figmaTokens.fontFamilies,
  fontSizes: figmaTokens.fontSizes,
  opacity: convertValuesToString(figmaTokens.opacity),
  // ...figmaTokens.lineHeights,
  // ...figmaTokens.letterSpacing,
  // ...figmaTokens.fontSizes,
  // ...figmaTokens.paragraphSpacing,
  // ...figmaTokens.spacing,
  // ...figmaTokens.screens,
  // ...figmaTokens.boxShadow,
  // ...figmaTokens.lineHeights,
  // ...figmaTokens.letterSpacing
});

const colors = createThemeContract({
  ...figmaTokens.colors,
});

export const lightTheme = createTheme(colors, {
  ...figmaTokens.light,

  // primary: "#1E40AF",
  // secondary: "#DB2777",
  // background: "#EFF6FF",
  // text: {
  //   normal: "#1F2937",
  //   dimmed: "#6B7280",
  // },
});

export const darkTheme = createTheme(colors, {
  ...figmaTokens.dark,
  // primary: "#60A5FA",
  // secondary: "#F472B6",
  // background: "#1F2937",
  // text: {
  //   normal: "#F9FAFB",
  //   dimmed: "#D1D5DB",
  // },
});

export const vars = { ...root, colors };

// const flatten = (obj, roots = [], sep = "") =>
//   Object.keys(obj).reduce(
//     (memo, prop) =>
//       Object.assign(
//         {},
//         memo,
//         Object.prototype.toString.call(obj[prop]) === "[object Object]"
//           ? flatten(obj[prop], roots.concat([prop]), sep)
//           : { [roots.concat([prop]).join(sep)]: obj[prop] }
//       ),
//     {}
//   );

// const lightColors = convertValuesToString(flatten(figmaTokens.light));
// console.log(flatten(figmaTokens.light));

// export const [themeClass, vars] = createTheme({
//   colors: flatten(figmaTokens.light),
// });
// interface ObjectLiteral {
//   [key: string]: any;
// }

// // infer type for lightColors
// const lightColors: { [key: string]: any } = flatten(figmaTokens.light);

// const spacing = flatten(figmaTokens.spacing);

// export const vars = createGlobalTheme(":root", {
//   colors: lightColors,
//   spacing: spacing, // borderRadius: figmaTokens.borderRadius,
//   // fontSizes: figmaTokens.fontSizes,
//   // fontFamilies: figmaTokens.fontFamilies,
//   // lineHeights: figmaTokens.lineHeights,
//   // letterSpacings: convertValuesToString(figmaTokens.letterSpacing),
//   // paragraphSpacing: convertValuesToString(figmaTokens.paragraphSpacing),
//   // screens: figmaTokens.screens,
//   // boxShadow: convertValuesToString(figmaTokens.boxShadow),
//   // typography: convertValuesToString(figmaTokens.typography),
//   // opacity: convertValuesToString(figmaTokens.opacity),
// });

// export const darkThemeClass = createTheme(vars, {
//   colors: dark,
//   ...rest,
// });

// Ref: https://www.lekoarts.de/javascript/writing-performant-css-with-vanilla-extract#theming

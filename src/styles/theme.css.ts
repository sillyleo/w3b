// This compiles the figmaTokens and make it usable tokens for vanilla-extract

import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from "@vanilla-extract/css";
import figmaTokens from "../../tokens/theme.json";

// This function flattens the object passed to it, including only the keys
// specified in the roots parameter.

// const flatten = (obj, roots = [], sep = ".") =>
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

// const colors = figmaTokens.colors;
// const lightColors = flatten(figmaTokens.light);
// const darkColors = flatten(figmaTokens.light);

export const vars = createGlobalTheme(":root", {
  //nested properties are spreaded
});

// export const darkThemeClass = createTheme(vars, {
//   ...figmaTokens.dark,
//   borderRadius: figmaTokens.borderRadius,
//   borderWidth: figmaTokens.borderWidth,
//   opacity: figmaTokens.opacity,
//   spacing: figmaTokens.spacing,
//   fontFamilies: figmaTokens.fontFamilies,
//   lineHeights: figmaTokens.lineHeights,
//   letterSpacing: figmaTokens.letterSpacing,
//   fontWeights: figmaTokens.fontWeights,
//   fontSizes: figmaTokens.fontSizes,
//   typography: figmaTokens.typography,
//   paragraphSpacing: figmaTokens.paragraphSpacing,
//   screens: figmaTokens.screens,
//   boxShadow: figmaTokens.boxShadow,
// });

// Ref: https://www.lekoarts.de/javascript/writing-performant-css-with-vanilla-extract#theming

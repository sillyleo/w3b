import { createThemeContract, createTheme } from "@vanilla-extract/css";
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

export const vars = createThemeContract({
  ...figmaTokens.colors,
});

export const lightThemeClass = createTheme(vars, {
  ...figmaTokens.light,
});

export const darkThemeClass = createTheme(vars, {
  ...figmaTokens.dark,
});

// Ref: https://www.lekoarts.de/javascript/writing-performant-css-with-vanilla-extract#theming

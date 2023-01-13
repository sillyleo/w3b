import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

const col = vars.colors.bronze[6];

console.log(vars.fontFamilies.heading);
// console.log(vars.opacity[40]]);
export const buttonStyle = style({
  background: col,
  color: vars.colors.bronze[11],
  fontSize: vars.fontSizes["3xl"],
  borderRadius: vars.radii["full"],
  borderWidth: vars.borderWidth[8],
  fontFamily: vars.fontFamilies.heading,
  // color: vars.colors.text.normal,
  // backgroundColor: vars.colors.tomato[5],
  // padding: vars.spacing[2],
});

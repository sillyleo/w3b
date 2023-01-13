import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";
import { sprinkles } from "../styles/sprinkles.css";

// const col = vars.colors.bronze[11];

// console.log(col);
// console.log(vars.opacity[40]]);
export const buttonStyle = sprinkles({
  padding: "9",
  color: "violet12",
  backgroundColor: "violet10",
  borderRadius: "full",
  // background: col,
  // color: vars.colors.bronze[11],
  // fontSize: vars.fontSizes["3xl"],
  // borderRadius: vars.radii["full"],
  // borderWidth: vars.borderWidth[8],
  // fontFamily: vars.fontFamilies.heading,
  // opacity: vars.opacity[60],
  // marginTop: vars.spacing[8],
});

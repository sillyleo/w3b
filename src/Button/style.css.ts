import { style } from "@vanilla-extract/css";
import { theme } from "../../src/styles/theme.css";

console.log("theme:", theme);

export const baseStyle = style({
  display: "flex",
  // background: theme.colors,
  // paddingTop: theme.spacing[10],
});

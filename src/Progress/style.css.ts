import { style, styleVariants } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { allTones } from "src/constants";
import { theme } from "src/styles/theme.css";

export const rootStyle = style({
  boxSizing: "border-box",
  padding: theme.spacing["1"],
  borderColor: theme.colors["slate7"],
  borderWidth: theme.borderWidth["1"],
  borderStyle: "solid",
  borderRadius: theme.radii["full"],
});

export const rootSize = styleVariants({
  sm: {
    height: theme.spacing["1"],
  },
  md: {
    height: theme.spacing["2"],
  },
  lg: {
    height: theme.spacing["3"],
  },
});

export const indicatorColor = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    backgroundColor: theme.colors[tone + "9"],
  };
});

export const indicatorStyle = style({
  boxSizing: "border-box",
  borderRadius: theme.radii["full"],
  transform: "translateZ(0)",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
});

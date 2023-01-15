import React from "react";
import { styled } from "@macaron-css/react";
import { theme } from "../theme";

// convert colorsArray into an object
// eg. { "red", "pink"} => red: { "backgroundColor": "red" }
console.log(theme.colors.white);
const Button = styled("button", {
  base: {
    backgroundColor: theme.colors["slate9"],
    // borderRadius: theme.radii["xl"],
    // opacity: theme.opacity[100],
    // fontSize: theme.fontSize["4xl"],
    // letterSpacing: theme.letterSpacing.tight,
    // lineHeight: theme.lineHeight.heading,
    // padding: theme.spacing[8],
    ":hover": {
      backgroundColor: "lightgray",
    },
  },
});

export default Button;

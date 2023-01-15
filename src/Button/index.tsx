import { styled } from "@macaron-css/react";
import { theme } from "../theme";

// convert colorsArray into an object
// eg. { "red", "pink"} => red: { "backgroundColor": "red" }

const colorVariants = Object.keys(theme.colors).reduce((acc, color) => {
  const value = theme.colors[color][6];
  acc[color] = {
    backgroundColor: value,
  };

  return acc;
}, {});

console.log(colorVariants);

const Button = styled("button", {
  base: {
    borderRadius: theme.radii["xl"],
    opacity: theme.opacity[100],
    fontSize: theme.fontSize["4xl"],
    letterSpacing: theme.letterSpacing.tight,
    lineHeight: theme.lineHeight.heading,
    padding: theme.spacing[8],
    ":hover": {
      backgroundColor: "lightgray",
    },
  },
  variants: {
    color: {
      ...colorVariants,
    },
  },
  defaultVariants: {
    color: "sky",
  },
});

export default Button;

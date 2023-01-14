import { styled } from "@macaron-css/react";
import { theme } from "../theme";
import figmaTokens from "../../tokens/theme.json";

// use figmaTokens.colors to generate an array of objects
// eg. figmaTokens.colors.blue => { blue: { color: theme.colors.blue[6] } }

// colorVariants is a keyof theme.colors

interface ColorVariants {
  [key: string]: {
    backgroundColor: string;
  };
}

export const colorVariants: ColorVariants = Object.keys(theme.colors).reduce(
  (acc, color) => {
    return {
      ...acc,
      [color]: {
        backgroundColor: theme.colors[color][6],
      },
    };
  },
  {}
);

console.log(colorVariants);

const Button = styled("button", {
  base: {
    // backgroundColor: theme.colors.amber[10],
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
    color: colorVariants,
    colorScheme: {
      red: {
        color: "red",
      },
    },
  },
  defaultVariants: {
    color: "grass",
  },
});

export default Button;

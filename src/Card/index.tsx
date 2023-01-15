import figmaTokens from "../../tokens/theme.json";
import { styled } from "../stitches.config";
import type * as Stitches from "@stitches/react";

const colorsArray = Object.keys(figmaTokens.colors);

const colorVariants = colorsArray.reduce((acc, color) => {
  const value = `$${color}6`;
  acc[color] = {
    backgroundColor: value,
  };

  return acc;
}, {});

console.log(colorVariants);

const Card = styled("div", {
  borderRadius: "9999px",
  color: "$white",
  fontSize: "13px",
  padding: "10px 15px",
  variants: {
    color: {
      black: {
        backgroundColor: "$black",
      },
      white: {
        backgroundColor: "$white",
      },
      ...colorVariants,
    },
  },
  defaultVariants: {
    color: "white",
  },
});

type Card = Stitches.VariantProps<typeof Card>;

export default Card;

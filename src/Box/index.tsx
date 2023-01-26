import React from "react";
import { styled } from "@macaron-css/react";

export interface BoxProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
}

const Box = styled("div", {
  base: {
    backgroundColor: "red",
    width: 20,
    height: 20,
  },
  variants: {
    backgroundColor: {
      red: {
        backgroundColor: "red",
      },
      blue: {
        backgroundColor: "blue",
      },
    },
    defaultVariants: {
      backgroundColor: "red",
    },
  },
});

export default Box;

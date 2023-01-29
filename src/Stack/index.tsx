import Bento, { BentoProps } from "../Bento";
import React from "react";
import { Sprinkles } from "dist/dist/types/styles/theme.css";

export interface StackProps extends BentoProps {
  children?: React.ReactNode;
  direction?: "row" | "column";
  gap?: Sprinkles["gap"];
  display?: Sprinkles["display"];
}

export const Stack = ({
  children,
  direction = "column",
  gap = "4",
  display = "flex",
  ...props
}: StackProps) => {
  return (
    <Bento display={display} gap={gap} flexDirection={direction} {...props}>
      {children}
    </Bento>
  );
};

export default Stack;

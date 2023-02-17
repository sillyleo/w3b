// Button.tsx
import Bento, { BentoProps } from "../Bento";
import { textStyle, TextStyleVariants } from "./style.css";
import React from "react";

export interface TextProps extends TextStyleVariants, BentoProps {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  size?: TextStyleVariants["size"];
  color?: string;
}

export const Text = ({
  children,
  size = "body",
  element = "div",
  color = "baseText",
  // set default element
  ...props
}: TextProps) => {
  return (
    <Bento as={element} className={textStyle({ size })} color={color}>
      {children}
    </Bento>
  );
};

export default Text;

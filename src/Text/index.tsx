// Button.tsx
import Bento, { BentoProps } from "../Bento";
import { textStyle, TextStyleVariants } from "./style.css";
import React from "react";

export interface TextProps extends TextStyleVariants, BentoProps {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
}

export const Text = ({
  children,
  size = "body",
  element = "div", // set default element
  ...props
}: TextProps) => {
  return (
    <Bento as={element} className={textStyle({ size })} {...props}>
      {children}
    </Bento>
  );
};

export default Text;

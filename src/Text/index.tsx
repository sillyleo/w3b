// Button.tsx
import Bento, { BentoProps } from "../Bento";
import { textStyle, TextStyleVariants } from "./style.css";
import React from "react";

export interface TextProps extends BentoProps {
  children?: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  // @ts-ignore
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
    <Bento
      as={element}
      className={textStyle({ size })}
      color={color}
      {...props}
    >
      {children}
    </Bento>
  );
};

export default Text;

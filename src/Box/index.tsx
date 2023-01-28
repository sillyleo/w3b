import { Slot } from "@radix-ui/react-slot";
import React, { ReactElement } from "react";

export const DefaultElement = "div";

// rewrite BoxProps as interface
export interface BoxProps
  extends React.ComponentPropsWithoutRef<typeof DefaultElement> {
  // shortcut props

  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  overflow?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  textAlign?: string;
  // basic styling
  style?: React.CSSProperties;
  // as props

  asChild?: boolean;
  // chilren
  children?: React.ReactNode;
}

const Box = React.forwardRef<ReactElement, BoxProps>((props, forwardedRef) => {
  // add default value hereπ
  const {
    asChild,
    children,
    backgroundColor,
    border,
    borderRadius,
    color,
    overflow,
    fontFamily,
    fontSize,
    fontWeight,
    minHeight,
    margin,
    padding,
    width,
    height,
    textAlign,
    style,
    ...rest
  } = props;

  const Component = asChild ? Slot : DefaultElement;

  return (
    <Component
      style={{
        border,
        backgroundColor,
        borderRadius,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        overflow,
        minHeight,
        margin,
        padding,
        width,
        height,
        ...style,
      }}
      {...rest}
      ref={forwardedRef}
    >
      {children}
    </Component>
  );
});

export default Box;

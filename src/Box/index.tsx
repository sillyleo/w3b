import { Slot } from "@radix-ui/react-slot";
import type * as CSS from "csstype";
import React, { ReactElement } from "react";
import { sprinkles, Sprinkles } from "../styles/theme.css";

export const DefaultElement = "div";

// rewrite BoxProps as interface

// omit color from BoxProps

export interface BoxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DefaultElement>, "color"> {
  // show all sprinkle properties as props
  color?: Sprinkles["color"];
  border?: Sprinkles["border"];
  borderColor?: Sprinkles["borderColor"];
  boxShadow?: Sprinkles["boxShadow"];
  fontFamily?: Sprinkles["fontFamily"];
  margin?: Sprinkles["margin"];
  padding?: Sprinkles["padding"];
  textAlign?: Sprinkles["textAlign"];
  display?: Sprinkles["display"];
  flexDirection?: Sprinkles["flexDirection"];
  position?: Sprinkles["position"];
  justifyContent?: Sprinkles["justifyContent"];
  alignItems?: Sprinkles["alignItems"];
  gap?: Sprinkles["gap"];
  lineHeight?: Sprinkles["lineHeight"];
  cursor?: Sprinkles["cursor"];
  letterSpacing?: Sprinkles["letterSpacing"];
  paddingTop?: Sprinkles["paddingTop"];
  paddingBottom?: Sprinkles["paddingBottom"];
  paddingLeft?: Sprinkles["paddingLeft"];
  paddingRight?: Sprinkles["paddingRight"];
  marginTop?: Sprinkles["marginTop"];
  marginBottom?: Sprinkles["marginBottom"];
  marginLeft?: Sprinkles["marginLeft"];
  marginRight?: Sprinkles["marginRight"];
  fontSize?: Sprinkles["fontSize"];
  fontWeight?: Sprinkles["fontWeight"];
  borderRadius?: Sprinkles["borderRadius"];
  overflow?: Sprinkles["overflow"];
  // color: Sprinkles["color"];
  background?: Sprinkles["color"];
  backgroundColor?: Sprinkles["color"];
  paddingX?: Sprinkles["paddingX"];
  paddingY?: Sprinkles["paddingY"];
  marginX?: Sprinkles["marginX"];
  marginY?: Sprinkles["marginY"];
  // sizing
  width?: CSS.Properties["width"];
  height?: CSS.Properties["height"];
  minWidth?: CSS.Properties["minWidth"];
  minHeight?: CSS.Properties["minHeight"];
  // override
  style?: React.CSSProperties;
  // as props

  asChild?: boolean;
  // chilren
  children?: React.ReactNode;
}

const Box = React.forwardRef<ReactElement, BoxProps>((props, forwardedRef) => {
  // add default value hereπ
  const {
    border,
    borderColor,
    boxShadow,
    fontFamily,
    margin,
    padding,
    textAlign,
    display,
    flexDirection,
    position,
    justifyContent,
    alignItems,
    gap,
    lineHeight,
    cursor,
    letterSpacing,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    fontSize,
    fontWeight,
    borderRadius,
    overflow,
    color,
    background,
    backgroundColor,
    paddingX,
    paddingY,
    marginX,
    marginY,
    width,
    height,
    minWidth,
    minHeight,

    style,
    asChild,
    children,
    ...rest
  } = props;

  const Component = asChild ? Slot : DefaultElement;

  return (
    <Component
      // pass into custom sprinkles
      className={sprinkles({
        border,
        borderColor,
        boxShadow,
        fontFamily,
        margin,
        padding,
        textAlign,
        display,
        flexDirection,
        position,
        justifyContent,
        alignItems,
        gap,
        lineHeight,
        cursor,
        letterSpacing,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        fontSize,
        fontWeight,
        borderRadius,
        overflow,
        color,
        background,
        backgroundColor,
        paddingX,
        paddingY,
        marginX,
        marginY,
      })}
      style={{
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
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

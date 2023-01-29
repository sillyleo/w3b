import { Slot } from '@radix-ui/react-slot';
import type * as CSS from 'csstype';
import React, { ReactElement } from 'react';
import { sprinkles, Sprinkles } from '../styles/theme.css';
import { clsx } from 'clsx';

export const DefaultElement = 'div';

// rewrite BoxProps as interface

// omit color from BoxProps

export interface BoxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DefaultElement>, 'color'> {
// show all sprinkle properties as props
  color?: Sprinkles['color'];
  border?: Sprinkles['border'];
  borderColor?: Sprinkles['borderColor'];
  boxShadow?: Sprinkles['boxShadow'];
  fontFamily?: Sprinkles['fontFamily'];
  p?: Sprinkles['p'];
  m?: Sprinkles['m'];
  margin?: Sprinkles['margin'];
  padding?: Sprinkles['padding'];
  paddingTop?: Sprinkles['paddingTop'];
  paddingBottom?: Sprinkles['paddingBottom'];
  paddingLeft?: Sprinkles['paddingLeft'];
  paddingRight?: Sprinkles['paddingRight'];
  marginTop?: Sprinkles['marginTop'];
  marginBottom?: Sprinkles['marginBottom'];
  marginLeft?: Sprinkles['marginLeft'];
  marginRight?: Sprinkles['marginRight'];
  px?: Sprinkles['px'];
  py?: Sprinkles['py'];
  mx?: Sprinkles['mx'];
  my?: Sprinkles['my'];
  pl?: Sprinkles['pl'];
  pr?: Sprinkles['pr'];
  pt?: Sprinkles['pt'];
  pb?: Sprinkles['pb'];
  ml?: Sprinkles['ml'];
  mr?: Sprinkles['mr'];
  mt?: Sprinkles['mt'];
  mb?: Sprinkles['mb'];
  bg?: Sprinkles['bg'];

  textAlign?: Sprinkles['textAlign'];
  display?: Sprinkles['display'];
  flexDirection?: Sprinkles['flexDirection'];
  position?: Sprinkles['position'];
  justifyContent?: Sprinkles['justifyContent'];
  alignItems?: Sprinkles['alignItems'];
  gap?: Sprinkles['gap'];
  lineHeight?: Sprinkles['lineHeight'];
  cursor?: Sprinkles['cursor'];
  letterSpacing?: Sprinkles['letterSpacing'];
  fontSize?: Sprinkles['fontSize'];
  fontWeight?: Sprinkles['fontWeight'];
  borderRadius?: Sprinkles['borderRadius'];
  overflow?: Sprinkles['overflow'];
  background?: Sprinkles['color'];
  backgroundColor?: Sprinkles['color'];

  // sizing
  width?: CSS.Properties['width'];
  height?: CSS.Properties['height'];
  minWidth?: CSS.Properties['minWidth'];
  minHeight?: CSS.Properties['minHeight'];
  // override
  style?: React.CSSProperties;
  // as props

  className?: string;

  asChild?: boolean;
  // chilren
  children?: React.ReactNode;
}


const Box = React.forwardRef<ReactElement, BoxProps>((props, forwardedRef) => {
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
    px,
    py,
    m,
    p,
    mx,
    my,
    pl,
    pr,
    pt,
    pb,
    ml,
    mr,
    mt,
    mb,

    width,
    height,
    minWidth,
    minHeight,
    bg,

    style,
    asChild,
    children,
    className,
    ...rest
  } = props;
  const builtInSprinkles = sprinkles({
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
    px,
    py,
    m,
    p,
    mx,
    my,
    pl,
    pr,
    pt,
    pb,
    ml,
    mr,
    mt,
    mb,
    bg
  });

  const Component = asChild ? Slot : DefaultElement;

  return (
    <Component
      // pass into custom sprinkles
      className={
        clsx(
          builtInSprinkles,
          className
        )
      }
      style={{
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
        ...style
      }}
      {...rest}
      ref={forwardedRef}
    >
      {children}
    </Component>
  );
});

export default Box;

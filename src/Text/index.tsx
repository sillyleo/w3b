import { Slot } from '@radix-ui/react-slot';
import React, { ReactElement } from 'react';
import Box, { BoxProps } from '../Box';
import { textStyle, TextStyleVariants } from './style.css';

export const DefaultElement = 'p';

// rewrite TextProps as interface
export interface TextProps
  extends BoxProps, TextStyleVariants {

  children?: React.ReactNode;
  asChild?: boolean;
}

const Text = React.forwardRef<ReactElement, TextProps>(
  (props, forwardedRef) => {
    // add default value here
    const {
      asChild,
      children,
      size,
      ...rest
    } = props;

    const Component = asChild ? Slot : DefaultElement;


    return (
      <Box
        asChild={asChild}
        className={textStyle({
          size: size
        })}
        {...rest}
        ref={forwardedRef}
      >
        {children}
      </Box>
    );
  }
);

export default Text;

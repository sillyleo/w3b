// Button.tsx
import Bento, { BentoProps } from '../Bento';
import { textStyle, TextStyleVariants } from './style.css';
import React from 'react';

export interface TextProps extends TextStyleVariants, BentoProps {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
}

export const Text = ({
                       children,
                       size = 'body',
                       element = 'div', // set default element
                       ...props
                     }: TextProps) => {
  return (
    <Bento as={element}
           className={textStyle({ size })}
           {...props}
    >
      {children}
    </Bento>
  );
};

export default Text;

// import { Slot } from '@radix-ui/react-slot';
// import React, { ReactElement } from 'react';
// import Box, { BoxProps } from '../Box';
// import { textStyle, TextStyleVariants } from './style.css';
//
// export const DefaultElement = 'p';
//
// // rewrite TextProps as interface
// export interface TextProps
//   extends BoxProps, TextStyleVariants {
//
//   children?: React.ReactNode;
//   asChild?: boolean;
// }
//
// const Text = React.forwardRef<ReactElement, TextProps>(
//   (props, forwardedRef) => {
//     // add default value here
//     const {
//       asChild,
//       children,
//       size,
//       ...rest
//     } = props;
//
//     const Component = asChild ? Slot : DefaultElement;
//
//
//     return (
//       <Box
//         asChild={asChild}
//         className={textStyle({
//           size: size
//         })}
//         {...rest}
//         ref={forwardedRef}
//       >
//         {children}
//       </Box>
//     );
//   }
// );
//
// export default Text;

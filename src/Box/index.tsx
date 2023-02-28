import React from "react";
import { styled } from "src/stitches.config";

const Box = styled("div", {});

export default Box;

// import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// type BoxProps<T extends ElementType> = {
//   as?: T;
//   children: ReactNode;
// };

// const Box = <T extends ElementType = "span">(
//   { as, children, ...others }: BoxProps<T> & ComponentPropsWithoutRef<T>,
//   ref
// ) => {
//   let Component = as || "span";

//   return (
//     <Component ref={ref} {...others}>
//       {children}
//     </Component>
//   );
// };

// export default React.forwardRef(Box);

// // https://betterprogramming.pub/polymorphic-react-components-in-typescript-b6ce455ca70e
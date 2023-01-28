import { Slot } from "@radix-ui/react-slot";
import React, { ReactElement } from "react";

export const DefaultElement = "p";

// rewrite TextProps as interface
export interface TextProps
  extends React.ComponentPropsWithoutRef<typeof DefaultElement> {
  // add custom props here
  // blah: string;
  asChild?: boolean;
}

const Text = React.forwardRef<ReactElement, TextProps>(
  (props, forwardedRef) => {
    // add default value here
    const {
      asChild,
      // blah = "yo",
      ...rest
    } = props;

    const Component = asChild ? Slot : DefaultElement;

    return (
      <Component
        {...rest}
        ref={forwardedRef}
        // className={clsx(
        // )}
      />
    );
  }
);

export default Text;

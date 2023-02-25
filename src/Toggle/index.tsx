import {styled} from "../stitches.config";
import React from "react";

const TogglePrimitive = styled("div", {
  variants: {
    size: {
      sm: {
        padding: 8,
      },
      md: {
        padding: 16,
      },
      lg: {
        padding: 24,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ToggleProps = React.ComponentProps<typeof TogglePrimitive> & {
  tone?: keyof Colors;
};

const Toggle = ({tone, ...props}: ToggleProps) => {
  return (
      <TogglePrimitive
          css={{
            bgTone7: tone,
            ...props.css,
          }}
          {...props}
      >
        Toggle
      </TogglePrimitive>
  );
};

export default Toggle;
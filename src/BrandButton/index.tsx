import React, { ForwardedRef, ReactNode } from "react";
import { styled } from "src/stitches.config";
import type * as Stitches from "@stitches/react";

const BaseButton = styled("button", {
  backgroundColor: "red",
  color: "white",
  variants: {
    tone: {
      red: {
        backgroundColor: "red",
      },
      green: {
        backgroundColor: "green",
      },
    },
  },
  defaultVariants: {
    tone: "red",
  },
});

// export interface BrandButtonProps
//   extends React.ComponentProps<typeof BaseButton> {
//   children?: ReactNode;
//   leftIcon?: ReactNode;
//   size?: "sm" | "md" | "lg";
//   // onClick: () => void;
//   // variant: 'primary' | 'secondary';
// }

export interface BrandButtonProps
  extends Stitches.VariantProps<typeof BaseButton> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
  // onClick: () => void;
  // variant: 'primary' | 'secondary';
}

const BrandButton = (
  { children, size, leftIcon, ...props }: BrandButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <BaseButton
      css={{
        padding: size === "sm" ? 3 : size === "md" ? 6 : size === "lg" ? 9 : 6,
      }}
      ref={ref}
      {...props}
    >
      {leftIcon}
      xxx {children} xxx
    </BaseButton>
  );
};

export default React.forwardRef(BrandButton);

import React, { ForwardedRef, ReactNode } from "react";
import { styled } from "src/stitches.config";

const BaseButton = styled("button", {
  backgroundColor: "red",
  color: "white",
});

export interface BrandButtonProps
  extends React.ComponentProps<typeof BaseButton> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  size: "sm" | "md" | "lg";
  // onClick: () => void;
  // variant: 'primary' | 'secondary';
}

const BrandButton = (
  { children, leftIcon, ...props }: BrandButtonProps,
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

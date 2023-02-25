import React, { ForwardedRef, ReactNode } from "react";
import { styled } from "src/stitches.config";

const BaseButton = styled("button", {
  backgroundColor: "red",
  color: "white",
});

export interface BrandButtonProps {
  children?: ReactNode;
  leftIcon?: ReactNode;
  // onClick: () => void;
  // variant: 'primary' | 'secondary';
}

const BrandButton = (
  { children, leftIcon, ...props }: BrandButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <BaseButton ref={ref} {...props}>
      {leftIcon}
      xxx {children} xxx
    </BaseButton>
  );
};

export default React.forwardRef(BrandButton);

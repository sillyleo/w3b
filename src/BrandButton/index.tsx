import React, { ForwardedRef, ReactNode } from "react";
import { styled, css } from "src/stitches.config";
import Spinner from "../Spinner";
import { Slot } from "@radix-ui/react-slot";

const buttonStyle = css("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  fontWeight: "$medium",
  overflow: "hidden",
  lineHeight: 1.5,
  transition: "$fast",
  "&:active": {
    transform: "scale(0.98) translateY(1px)",
  },
  "&:disabled": {
    transform: "none",
    cursor: "not-allowed",
    opacity: 0.75,
  },
  borderRadius: "$xl",
  variants: {
    size: {
      xs: {
        px: "$2",
        py: "$2",
        fontSize: "$sm",
        "& .spinner": {
          boxSize: 16,
        },
      },
      s: {
        px: "$3",
        py: "$2",
        "& .spinner": {
          boxSize: 20,
        },
      },
      m: {
        px: "$4",
        py: "$3",
        "& .spinner": {
          boxSize: 20,
        },
      },
      l: {
        px: "$6",
        py: "$4",
        "& .spinner": {
          boxSize: 24,
        },
      },
    },
    brand: {
      primary: {
        borderRadius: "$full",
        background: "$colors$primary",
        color: "black",
        "&:hover": {
          background: "$colors$hover",
        },
      },
      secondary: {
        borderRadius: "$xl",
        background: "$colors$gray6",
        color: "$colors$gray12",
        "&:hover": {
          background: "$colors$gray7",
        },
      },
    },
  },
  defaultVariants: {
    size: "m",
    brand: "primary",
  },
});

// const innerWrapper = css({
//   px: 6,
//   "& > p": {
//     lineHeight: "inherit",
//   },
// });

export interface BrandButtonProps
  extends Stitches.VariantProps<typeof buttonStyle> {
  isLoading?: boolean;
  children?: ReactNode;
  asChild?: boolean;
  size?: "xs" | "s" | "m" | "l";
  brand?: "primary" | "secondary";
}

const BrandButton = (
  { children, isLoading, size, brand, asChild, ...props }: BrandButtonProps,
  ref
) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={buttonStyle({ size: size, brand: brand })}
      ref={ref}
      {...props}
    >
      {isLoading && <Spinner className={"spinner"} />}
      {!asChild && children}
    </Comp>
  );
};

export default React.forwardRef(BrandButton);

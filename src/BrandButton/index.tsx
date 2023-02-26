import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { styled, css } from "src/stitches.config";
import Spinner from "../Spinner";
import { Slot } from "@radix-ui/react-slot";
import * as Stitches from "@stitches/react";

type BrandButtonProps<T extends ElementType> = Stitches.VariantProps<
  typeof buttonStyle
> & {
  as?: T;
  children: ReactNode;
  isLoading?: boolean;
};

export const BrandButton = <T extends ElementType = "span">(
  {
    as,
    children,
    isLoading,
    ...props
  }: BrandButtonProps<T> & ComponentPropsWithoutRef<T>,
  ref
) => {
  let Component = as || "span";

  return (
    <Component
      className={buttonStyle({ size: props.size, brand: props.brand })}
      ref={ref}
      {...props}
    >
      {isLoading && <Spinner />}
      {children}
    </Component>
  );
};

const buttonStyle = css({
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

export default React.forwardRef(BrandButton);

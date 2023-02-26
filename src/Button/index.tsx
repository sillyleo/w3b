import React from "react";
import _ from "lodash";
import type { CSS } from "src/stitches.config";
import { styled } from "src/stitches.config";
import { getButtonShadowStyle, getButtonToneStyle } from "src/util/tones";
import Box from "../Box";
import { AutoSpinner } from "../Spinner";
import type * as Stitches from "@stitches/react";

const ButtonPrimitive = styled("button", {
  all: "unset",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75,
  },

  "&:hover": {
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
  // mdx fix
  "& p": {
    lineHeight: 1,
  },
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  lineHeight: 1,
  alignItems: "center",
  fontSize: "$base",
  border: "0",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: "$7",
        px: "$3",
        py: "$2",
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$4",
        py: "$2",
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$11",
        px: "$5",
        py: "$3",
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$6",
        py: "$4",
      },
    },

    align: {
      left: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      right: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
  },
  defaultVariants: {
    size: "md",
    align: "center",
  },
});

export interface ButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive> {
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right" | "between" | "around";
  tone?: keyof Colors;
  intent?: "primary" | "secondary" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  depth?: "0" | "1" | "2" | "3";
  css?: CSS;
}

const Button = (
  {
    size,
    align,
    tone = "slate",
    intent = "primary",
    loading,
    children,
    leftIcon,
    rightIcon,
    depth,
    css,
    ...props
  }: ButtonProps,
  ref
) => {
  return (
    <ButtonPrimitive
      ref={ref}
      size={size}
      align={align}
      css={_.merge(
        getButtonToneStyle(tone, intent),
        getButtonShadowStyle(tone, depth),
        css
      )}
      {...props}
    >
      {loading && "loading"}
      {/*left icon*/}
      <div>{leftIcon}</div>

      <div>{children}</div>
      {/*right icon*/}
      <div>{rightIcon}</div>
    </ButtonPrimitive>
  );
};

export default React.forwardRef(Button);

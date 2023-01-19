import { style, styleVariants } from "@macaron-css/core";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { allTones, ColorTones, theme } from "../theme";

// Base style

const baseClass = style({
  backgroundColor: theme.colors.accent[8],
  fontWeight: theme.fontWeight.bold,
  letterSpacing: theme.letterSpacing.decreased,
  // borderRadius: theme.radii["xl"],
  // opacity: theme.opacity[100],
  // fontWeight: theme.fontWeight,
  // fontSize: theme.fontSize["4xl"],
  // letterSpacing: theme.letterSpacing.increased,
  // lineHeight: theme.lineHeight.heading,
  padding: theme.spacing[8],
  ":hover": {
    backgroundColor: "lightgray",
  },
});

// Sizes

const sizeClass = styleVariants({
  sm: {
    padding: theme.spacing[2],
  },
  md: {
    padding: theme.spacing[3],
  },
  lg: {
    padding: theme.spacing[5],
  },
});

//  Dynamic tones and intents

const primaryClass = styleVariants(allTones, (tone) => ({
  backgroundColor: theme.colors[tone][9],
  ":hover": {
    backgroundColor: theme.colors[tone][10],
  },
  color: theme.colors.white,
}));

const secondaryClass = styleVariants(allTones, (tone) => ({
  backgroundColor: theme.colors[tone][8],
  ":hover": {
    backgroundColor: theme.colors[tone][9],
  },
  color: theme.colors.white,
}));

const tertiaryClass = styleVariants(allTones, (tone) => ({
  backgroundColor: theme.colors[tone][3],
  ":hover": {
    backgroundColor: theme.colors[tone][4],
  },
  color: theme.colors.black,
}));

const transparentClass = styleVariants(allTones, (tone) => ({
  background: "transparent",
  ":hover": {
    backgroundColor: theme.colors[tone][2],
  },
  // border: "none",
  color: theme.colors[tone][10],
}));

// Compose variants with class names

function getVariant(intent, tone) {
  switch (intent) {
    case "primary":
      return primaryClass[tone];
    case "secondary":
      return secondaryClass[tone];
    case "tertiary":
      return tertiaryClass[tone];
    case "transparent":
      return transparentClass[tone];
    default:
      return primaryClass[tone];
  }
}

const buttonStyle = cva(baseClass, {
  variants: {
    size: {
      sm: sizeClass.sm,
      md: sizeClass.md,
      lg: sizeClass.lg,
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

// Button component

export interface ButtonProp extends VariantProps<typeof buttonStyle> {
  children?: React.ReactNode;
  intent?: "primary" | "secondary" | "tertiary" | "transparent";
  tone?: ColorTones;
}

const Button = ({ size, intent, tone, ...props }: ButtonProp) => {
  return (
    <button
      className={buttonStyle({
        size,
        className: getVariant(intent, tone), // for dynamic variants that's not composed with variants API
      })}
      {...props}
    />
  );
};

export default Button;

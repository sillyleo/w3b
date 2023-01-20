import { globalFontFace, style, styleVariants } from "@macaron-css/core";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { theme } from "../theme";
import figmaTokens from "../theme.json";

//  all colors as allTones from figmaTokens.colors
// eg. {blue: "blue", red: "red", green: "green"}
const allTones = Object.keys(figmaTokens.light).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

// Base style

const baseClass = style({
  fontFamily: theme.fontFamily.heading,
  backgroundColor: theme.colors.blue[9],
  fontWeight: theme.fontWeight.bold,
  letterSpacing: theme.letterSpacing.default,
  color: theme.colors.white,
  borderRadius: theme.radii["xl"],
  // opacity: theme.opacity[30],
  fontSize: theme.fontSize["sm"],
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

const primaryClass = styleVariants(allTones, (tone) => {
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      backgroundColor: theme.colors[tone][9],
      ":hover": {
        backgroundColor: theme.colors[tone][10],
      },
      color: theme.colors[tone][12],
    };
  } else {
    return {
      backgroundColor: theme.colors[tone][9],
      ":hover": {
        backgroundColor: theme.colors[tone][10],
      },
      color: theme.colors.white,
    };
  }
});

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

type ToneType = keyof Colors;

// Button component
export interface ButtonProp extends VariantProps<typeof buttonStyle> {
  children?: React.ReactNode;
  /**
   * the intent of button
   * @defaultValue 'primary'
   */
  intent?: "primary" | "secondary" | "tertiary" | "transparent";

  tone?: ToneType;
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

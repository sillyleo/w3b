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
  cursor: "pointer",
  boxSizing: "border-box",
  // backgroundColor: theme.colors.slate[9],
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.bold,
  letterSpacing: theme.letterSpacing.default,
  // color: theme.colors.white,
  borderRadius: theme.radii["xl"],
  fontSize: theme.fontSize["base"],
  lineHeight: 1,
  border: "none",
});

// Sizes

const sizeClass = styleVariants({
  sm: {
    fontSize: theme.fontSize["xs"],
    lineHeight: "2.777em",
    paddingLeft: theme.spacing[3],
    paddingRight: theme.spacing[3],
  },
  md: {
    fontSize: theme.fontSize["sm"],

    lineHeight: "2.4615em",
    paddingLeft: theme.spacing[4],
    paddingRight: theme.spacing[4],
  },
  lg: {
    fontSize: theme.fontSize["base"],

    lineHeight: "2.5333em",

    paddingLeft: theme.spacing[5],
    paddingRight: theme.spacing[5],
  },
});

//  Dynamic tones and intents

const primaryClass = styleVariants(allTones, (tone) => {
  // color bg + black text
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
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone][12],
      ":hover": {
        backgroundColor: theme.colors[tone][12],
      },
      color: theme.colors[tone][2],
    };
  } else {
    // color bg + white text

    return {
      backgroundColor: theme.colors[tone][9],
      ":hover": {
        backgroundColor: theme.colors[tone][10],
      },
      color: theme.colors.white,
    };
  }
});

const secondaryClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      backgroundColor: theme.colors[tone][4],
      ":hover": {
        backgroundColor: theme.colors[tone][5],
      },
      color: theme.colors[tone][11],
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone][4],
      ":hover": {
        backgroundColor: theme.colors[tone][5],
      },
      color: theme.colors[tone][12],
    };
  } else {
    // color bg

    return {
      backgroundColor: theme.colors[tone][4],
      ":hover": {
        backgroundColor: theme.colors[tone][5],
      },
      color: theme.colors[tone][11],
    };
  }
});

const tertiaryClass = styleVariants(allTones, (tone) => ({
  backgroundColor: "transparent",
  ":hover": {
    color: theme.colors[tone][12],
  },
  color: theme.colors[tone][11],
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

  intent?: "primary" | "secondary" | "tertiary";

  tone?: ToneType;
}

const Button = ({
  size = "md",
  intent = "primary",
  tone = "slate",
  ...props
}: ButtonProp) => {
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

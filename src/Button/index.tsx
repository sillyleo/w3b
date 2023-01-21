import { style, styleVariants } from "@macaron-css/core";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { SkModernistBold, SkModernistRegular, theme } from "../theme";
import figmaTokens from "../theme.json";

//  all colors as allTones from figmaTokens.colors
// eg. {blue: "blue", red: "red", green: "green"}
const allTones = Object.keys(figmaTokens.light).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

// Base style

const baseClass = style({
  // font conbimation for skmondenist bold
  fontFamily: SkModernistBold + ",sans-serif",
  fontWeight: 500, // magic number for safari font rendering
  cursor: "pointer",
  display: "inline-flex",
  gap: theme.spacing[2],
  padding: 0,
  alignItems: "center",
  borderRadius: theme.radii["xl"],
  fontSize: theme.fontSize["base"],
  lineHeight: 1,
  border: "none",
  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.75,
  },
});

// Sizes

const sizeClass = styleVariants({
  sm: {
    borderRadius: theme.radii["lg"],
    fontSize: theme.fontSize["xs"],
    height: theme.spacing[7],
    paddingLeft: theme.spacing[3],
    paddingRight: theme.spacing[3],
  },
  md: {
    fontSize: theme.fontSize["sm"],

    height: theme.spacing[8],
    paddingLeft: theme.spacing[4],
    paddingRight: theme.spacing[4],
  },
  lg: {
    fontSize: theme.fontSize["base"],

    height: theme.spacing[11],

    paddingLeft: theme.spacing[5],
    paddingRight: theme.spacing[5],
  },
});

// Alignments

const alignmentClass = styleVariants({
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
});

// Icon position

const iconSpacingClass = style({
  justifyContent: "space-between",
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

const secondaryClass = styleVariants(allTones, (tone: keyof Colors) => {
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

const tertiaryClass = styleVariants(allTones, (tone: keyof Colors) => ({
  backgroundColor: "transparent",
  ":hover": {
    color: theme.colors[tone][12],
  },
  color: theme.colors[tone][11],
}));

// Compose variants with class names

function getVariant(
  intent: "primary" | "secondary" | "tertiary",
  tone: keyof Colors
) {
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
    align: {
      left: alignmentClass.left,
      center: alignmentClass.center,
      right: alignmentClass.right,
      between: alignmentClass.between,
    },
    iconSpacing: {
      true: iconSpacingClass,
    },
  },
  defaultVariants: {
    size: "lg",
    align: "center",
    iconSpacing: false,
  },
});

type ToneType = keyof Colors;

// Button component
export interface ButtonProps
  extends VariantProps<typeof buttonStyle>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  intent?: "primary" | "secondary" | "tertiary";

  tone?: ToneType;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right" | "between";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconSpacing?: boolean;
}

const Button = ({
  intent = "primary",
  tone = "slate",
  size = "md",
  align = "center",
  iconLeft,
  iconRight,
  iconSpacing = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyle({
        size,
        align,
        iconSpacing,
        className: getVariant(intent, tone), // for dynamic variants that's not composed with variants API
      })}
      {...props}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
};

export default Button;

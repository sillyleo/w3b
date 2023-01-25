import { style, styleVariants } from "@macaron-css/core";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "../Icon";
import { intentVariants, toneVariants } from "../constants";
import { theme } from "../theme";

// Compose classnames with macaron

// Base style

export const base = style({
  fontFamily: theme.fontFamily.heading,
  overflow: "hidden",
  fontWeight: "bold",
  cursor: "pointer",
  justifyContent: "center",
  display: "inline-flex",
  // gap: theme.spacing[1],

  alignItems: "center",
  borderRadius: theme.radii["lg"],
  fontSize: theme.fontSize["base"],
  lineHeight: 1,
  border: "none",
  transition: "all 0.2s",
  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.75,
  },
  ":active": {
    // @ts-ignore
    transform: "translateY(1px) scale(0.98)",
  },
});

// Size style

export const sizeSm = style({
  borderRadius: theme.radii["lg"],
  fontSize: theme.fontSize["xs"],
  height: theme.spacing[7],
  minWidth: theme.spacing[7],
  paddingLeft: theme.spacing[1],
  paddingRight: theme.spacing[1],
});
export const sizeMd = style({
  borderRadius: theme.radii["lg"],

  fontSize: theme.fontSize["sm"],
  height: theme.spacing[8],
  minWidth: theme.spacing[8],
  paddingLeft: theme.spacing[1],
  paddingRight: theme.spacing[1],
});
export const sizeLg = style({
  borderRadius: theme.radii["xl"],

  fontSize: theme.fontSize["base"],
  height: theme.spacing[11],
  minWidth: theme.spacing[11],
  paddingLeft: theme.spacing[2],
  paddingRight: theme.spacing[2],
});

//  Dynamic tones and intents

const allTones = Object.keys(theme.colors).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

// primaryClass[tone]
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
      ":active": {
        backgroundColor: theme.colors[tone][11],
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
      ":active": {
        backgroundColor: theme.colors[tone][11],
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
      ":active": {
        backgroundColor: theme.colors[tone][11],
      },
      color: theme.colors.white,
    };
  }
});

// secondaryClass[tone]
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
      ":active": {
        backgroundColor: theme.colors[tone][6],
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
      ":active": {
        backgroundColor: theme.colors[tone][6],
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
      ":active": {
        backgroundColor: theme.colors[tone][6],
      },
      color: theme.colors[tone][11],
    };
  }
});
// tertiaryClass[tone]
const ghostClass = styleVariants(allTones, (tone: keyof Colors) => {
  if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    return {
      // grayscale series

      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: theme.colors[tone][3],
        color: theme.colors[tone][12],
      },
      ":active": {
        backgroundColor: theme.colors[tone][4],
      },

      color: theme.colors[tone][11],
    };
  } else {
    return {
      backgroundColor: "transparent",
      ":hover": {
        color: theme.colors[tone][12],
        backgroundColor: theme.colors[tone][3],
      },
      ":active": {
        backgroundColor: theme.colors[tone][4],
      },
      color: theme.colors[tone][11],
    };
  }
});

const buttonStyle = cva(base, {
  variants: {
    size: {
      sm: sizeSm,
      md: sizeMd,
      lg: sizeLg,
    },

    // tone and intents are only here for type management, real styles are set by custom function `getVariant`
    tone: toneVariants,
    intent: intentVariants,
  },
  defaultVariants: {
    size: "md",
  },
});

// Get class name from intent and tone

function getVariant(intent: string, tone: string) {
  if (intent === "primary") {
    return primaryClass[tone];
  } else if (intent === "secondary") {
    return secondaryClass[tone];
  } else if (intent === "ghost") {
    return ghostClass[tone];
  } else {
    return primaryClass[tone];
  }
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  name: string;
  size?: "sm" | "md" | "lg";
  tone?: keyof Colors;
  intent?: "primary" | "secondary" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const IconButton = ({
  // list all available props here and default values
  name,
  size = "md",
  tone = "sand",
  intent = "secondary",
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  // switch icon size
  const iconSize = size === "sm" ? 18 : size === "md" ? 22 : 26;

  return (
    <button
      className={buttonStyle({
        size: size,
        tone: tone,
        intent: intent,
        className: [getVariant(intent, tone), "icon-button"],
      })}
      {...props}
    >
      {leftIcon}
      <Icon size={iconSize} name={"camera"} />
      {rightIcon}
    </button>
  );
};

export default IconButton;

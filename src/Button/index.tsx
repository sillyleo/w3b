import React from "react";
import { macaron$, style, styleVariants } from "@macaron-css/core";
import { cva, VariantProps } from "class-variance-authority";
import { theme } from "../theme";
import { intentVariants, toneVariants } from "../constants";

// Compose classnames with macaron

// Base style

const base = style({
  // font conbimation for skmondenist bold
  fontFamily: theme.fontFamily.heading,
  fontWeight: "bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: theme.spacing[2],
  padding: 0,
  alignItems: "center",
  borderRadius: theme.radii["xl"],
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

const sizeSm = style({
  borderRadius: theme.radii["lg"],
  fontSize: theme.fontSize["xs"],
  height: theme.spacing[7],
  paddingLeft: theme.spacing[3],
  paddingRight: theme.spacing[3],
});
const sizeMd = style({
  fontSize: theme.fontSize["sm"],
  height: theme.spacing[8],
  paddingLeft: theme.spacing[4],
  paddingRight: theme.spacing[4],
});
const sizeLg = style({
  fontSize: theme.fontSize["base"],
  height: theme.spacing[11],
  paddingLeft: theme.spacing[5],
  paddingRight: theme.spacing[5],
});

// Alignment style

const alignLeft = style({
  justifyContent: "flex-start",
});
const alignCenter = style({
  justifyContent: "center",
});
const alignRight = style({
  justifyContent: "flex-end",
});
const alignBetween = style({
  justifyContent: "space-between",
});
const alignAround = style({
  justifyContent: "space-around",
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
        backgroundColor: theme.colors[tone][2],
      },
      ":active": {
        backgroundColor: theme.colors[tone][3],
      },

      color: theme.colors[tone][12],
    };
  } else {
    return {
      backgroundColor: "transparent",
      ":hover": {
        color: theme.colors[tone][12],
        backgroundColor: theme.colors[tone][2],
      },
      ":active": {
        backgroundColor: theme.colors[tone][3],
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
    align: {
      left: alignLeft,
      center: alignCenter,
      right: alignRight,
      between: alignBetween,
      around: alignAround,
    },
    // tone and intents are only here for type management, real styles are set by custom function `getVariant`
    tone: toneVariants,
    intent: intentVariants,
  },
  defaultVariants: {
    size: "md",
    align: "center",
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
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right" | "between" | "around";
  tone?: keyof Colors;
  intent?: "primary" | "secondary" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  // list all available props here and default values
  size = "md",
  align,
  tone = "sand",
  intent = "secondary",
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyle({
        size: size,
        align: align,
        tone: tone,
        intent: intent,
        className: getVariant(intent, tone),
      })}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;

import { styled } from "@macaron-css/react";

import { styleVariants } from "@macaron-css/core";

import { allTones, ButtonIntent, ColorKeys, theme } from "../theme";
import { motion } from "framer-motion";
import React from "react";

const MotionButton = motion("button");

const BaseButton = styled("button", {
  base: {
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
  },
  variants: {
    size: {
      sm: {
        padding: theme.spacing[2],
      },
      md: {
        padding: theme.spacing[3],
      },
      lg: {
        padding: theme.spacing[5],
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

// Different coloe pallete depending on ButtonVariant

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

interface ToneProps {
  tone?: ColorKeys;
  intent?: ButtonIntent;
  className?: string;
}

// extend Button props with ToneProps
export type ButtonProps = ToneProps & React.ComponentProps<typeof BaseButton>;

const Button = (props: ButtonProps) => {
  function setClassName(variant: string, tone: string) {
    switch (variant) {
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

  return (
    <BaseButton className={setClassName(props.intent, props.tone)} {...props} />
  );
};

export { Button };

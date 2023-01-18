import { styled } from "@macaron-css/react";

import { style, styleVariants } from "@macaron-css/core";
import clsx from "clsx";
import { allTones, ButtonIntent, ColorKeys, theme } from "../theme";
import { motion } from "framer-motion";
import React from "react";

// export interface ButtonProps {
//   size?: string;
//   children: React.ReactNode;
// }

// const Button = ({ children, size = "medium", ...props }: ButtonProps) => {
//   return <button {...props}>{children}</button>;
// };

// const MotionButton = motion("button");

const buttonStyle = style({
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

// // Different coloe pallete depending on ButtonVariant

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

const sizeVariants = styleVariants({
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

// export interface ToneProps {
//   tone?: ColorKeys;
//   intent?: ButtonIntent;
//   className?: string;
// }

// // extend Button props with ToneProps
// export type ButtonProps = ToneProps & React.ComponentProps<typeof BaseButton>;

// // TODO: This will have type definition for local repo, but not for the published package

type sizeType = typeof sizeVariants;
console.log(ColorKeys);
interface ButtonProps {
  className?: any;
  tone?: keyof typeof ColorKeys;
  intent?: ButtonIntent;
  size?: keyof sizeType;
  children?: React.ReactNode;
}

// console.log(sizeVariants);
// interface ButtonProps extends React.ComponentProps<typeof BaseButton> {
//   tone?: ColorKeys;
//   intent?: ButtonIntent;
// }

const Button = ({ tone, intent, size, ...props }: ButtonProps) => {
  function getVariant(variant, tone) {
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
    <button
      className={clsx(
        buttonStyle,
        getVariant(intent, tone),
        sizeVariants[size]
      )}
      {...props}
    />
  );
};

export default Button;

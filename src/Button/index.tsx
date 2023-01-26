import React from "react";
import {
  buttonStyle,
  ghostClass,
  primaryClass,
  secondaryClass,
  ButtonVariants,
  ghostShadowClass,
  primaryShadowClass,
  secondaryShadowClass,
} from "./style.css";
import { clsx } from "clsx";

// set variant class names
export function getVariant(intent: string, tone: keyof Colors) {
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

// set variant class names
export function getShadowVariant(
  shadow: boolean,
  intent: string,
  tone: keyof Colors
) {
  if (shadow) {
    if (intent === "primary") {
      return primaryShadowClass[tone];
    } else if (intent === "secondary") {
      return secondaryShadowClass[tone];
    } else if (intent === "ghost") {
      return ghostShadowClass[tone];
    } else {
      return primaryShadowClass[tone];
    }
  }
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right" | "between" | "around";
  tone?: keyof Colors;
  intent?: "primary" | "secondary" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  gradient?: boolean;
  shadow?: boolean;
}

export const Button = ({
  // list all available props here and default values
  size = "md",
  align = "center",
  tone = "sand",
  intent = "primary",
  children,
  leftIcon,
  rightIcon,
  gradient = false,
  shadow = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      // clsx is only for combing multiple classes together
      className={clsx(
        buttonStyle({
          size: size,
          align: align,
          gradient: gradient,
        }),
        getVariant(intent, tone),
        getShadowVariant(shadow, intent, tone)
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;

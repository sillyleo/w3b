import React from "react";
import {
  buttonStyle,
  ghostClass,
  primaryClass,
  secondaryClass,
  ButtonVariants,
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right" | "between" | "around";
  tone?: keyof Colors;
  intent?: "primary" | "secondary" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
  ...props
}: ButtonProps) => {
  return (
    <button
      // clsx is only for combing multiple classes together
      className={clsx(
        buttonStyle({
          size: size,
          align: align,
        }),
        getVariant(intent, tone)
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

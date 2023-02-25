import React from "react";
import { buttonStyle, ButtonVariants } from "./style.css";
import { clsx } from "clsx";
import {
  primaryClass,
  secondaryClass,
  ghostClass,
  smPrimaryShadowClass,
  mdPrimaryShadowClass,
  lgPrimaryShadowClass,
  smSecondaryShadowClass,
  mdSecondaryShadowClass,
  lgSecondaryShadowClass,
  smGhostShadowClass,
  mdGhostShadowClass,
  lgGhostShadowClass,
  theme,
} from "../styles/theme.css";
import Bento, { BentoProps } from "../Bento";

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

// update
// set variant class names
export function getShadowVariant(
  shadow: boolean,
  size: string,
  tone: keyof Colors,
  intent: string
) {
  if (shadow && intent === "primary") {
    if (size === "sm") {
      return smPrimaryShadowClass[tone];
    } else if (size === "md") {
      // console.log(mdPrimaryShadowClass[tone]);
      return mdPrimaryShadowClass[tone];
    } else {
      return lgPrimaryShadowClass[tone];
    }
  }
  if (shadow && intent === "secondary") {
    if (size === "sm") {
      return smSecondaryShadowClass[tone];
    } else if (size === "md") {
      return mdSecondaryShadowClass[tone];
    } else {
      return lgSecondaryShadowClass[tone];
    }
  }

  if (shadow && intent === "ghost") {
    if (size === "sm") {
      return smGhostShadowClass[tone];
    } else if (size === "md") {
      return mdGhostShadowClass[tone];
    } else {
      return lgGhostShadowClass[tone];
    }
  }
}

export interface ButtonProps extends ButtonVariants, BentoProps {
  size?: "sm" | "md" | "lg";

  align?: "left" | "center" | "right" | "between" | "around";
  tone?: keyof Colors;
  intent?: "primary" | "secondary" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  gradient?: boolean;
  shadow?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  // list all available props here and default values
  size = "md",
  align = "center",
  tone = "sand",
  intent = "primary",
  isLoading = false,
  children,
  leftIcon,
  rightIcon,
  gradient = false,
  shadow = false,
  ...props
}: ButtonProps) => {
  // console.log(theme.colors.basebackground);
  return (
    <Bento
      // clsx is only for combing multiple classes together
      className={clsx(
        buttonStyle({
          size: size,
          align: align,
          gradient: gradient,
          isLoading: isLoading,
        }),
        getVariant(intent, tone),
        getShadowVariant(shadow, size, tone, intent)
      )}
      {...props}
    >
      <Bento opacity={isLoading ? "0" : "100"}>{leftIcon}</Bento>
      {isLoading && (
        <Bento
          position={"absolute"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          left="0"
          top="0"
          right="0"
          bottom="0"
        >
          {spinner}
        </Bento>
      )}
      <Bento opacity={isLoading ? "0" : "100"}>{children}</Bento>
      <Bento opacity={isLoading ? "0" : "100"}>{rightIcon}</Bento>
    </Bento>
  );
};

const spinner = (
  <svg
    version="1.1"
    id="L9"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 100 100"
    enableBackground="new 0 0 0 0"
    xmlSpace="preserve"
  >
    <path
      fill="currentColor"
      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1s"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default Button;

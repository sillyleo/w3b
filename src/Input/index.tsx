import { clsx } from "clsx";
import React, { HTMLInputTypeAttribute } from "react";
import Bento, { BentoProps } from "../Bento";
import Stack from "../Stack";
import Text from "../Text";
import {
  inputIcon,
  inputStyle,
  InputStyleVariants,
  inputToneVariants,
  disabledClass,
  invisibleInput,
  inputTextVariants,
} from "./style.css";

export interface InputProps extends InputStyleVariants, BentoProps {
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  align?: "left" | "center" | "right";
  tone?: keyof Colors;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
  label?: string;
}

export const Input = ({
  size = "md",
  type = "text",
  align = "left",
  tone = "gray",
  leftIcon,
  rightIcon,
  disabled,
  label,
  ...props
}: InputProps) => {
  return (
    <Stack gap={"1"} alignItems={"stretch"}>
      {label && (
        <Text size="label" color={"textTertiary"}>
          {label}
        </Text>
      )}
      <Stack
        gap={"1"}
        direction="row"
        wrap={"nowrap"}
        alignItems={"stretch"}
        className={clsx(
          inputStyle({ size: size }),
          inputToneVariants[tone],
          disabled && disabledClass
        )}
      >
        {leftIcon && <div className={inputIcon["left"]}>{leftIcon}</div>}
        <Bento
          flexGrow={1}
          as={"input"}
          className={clsx(invisibleInput[size], inputTextVariants[tone])}
          type={type}
          disabled={disabled}
          {...props}
        />
        {rightIcon && <div className={inputIcon["right"]}>{rightIcon}</div>}
      </Stack>
    </Stack>
  );
};

export default Input;

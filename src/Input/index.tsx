import { clsx } from "clsx";
import React, { HTMLInputTypeAttribute } from "react";
import Bento, { BentoProps } from "../Bento";
import Stack from "../Stack";
import Text from "../Text";
import {
  innerStatusClass,
  inputIcon,
  inputStyle,
  InputStyleVariants,
  inputTextVariants,
  inputToneVariants,
  invisibleInput,
  outerStatusClass,
} from "./style.css";

export interface InputProps extends InputStyleVariants, BentoProps {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  tone?: keyof Colors;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
  label?: string;
  disabled?: boolean;
  invalid?: boolean;
  error?: boolean;
}

export const Input = ({
  size = "md",
  type = "text",
  align = "left",
  tone = "gray",
  leftIcon,
  rightIcon,
  label,
  disabled,
  invalid,
  error,
  ...props
}: InputProps) => {
  const status = () => {
    if (disabled) {
      return "disabled";
    }
    if (invalid) {
      return "invalid";
    }
    if (error) {
      return "error";
    }
    return "default";
  };

  return (
    <Stack gap={"1"} alignItems={"stretch"} className={status()}>
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
          outerStatusClass
        )}
      >
        {leftIcon && <div className={inputIcon["left"]}>{leftIcon}</div>}
        <Bento
          flexGrow={1}
          as={"input"}
          className={clsx(
            invisibleInput[size],
            inputTextVariants[tone],
            innerStatusClass
          )}
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

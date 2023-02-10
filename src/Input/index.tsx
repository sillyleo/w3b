import { clsx } from "clsx";
import React, { forwardRef, HTMLInputTypeAttribute } from "react";
import Bento, { BentoProps } from "../Bento";
import Stack from "../Stack";
import Text from "../Text";

import {
  innerStatusClass,
  inputBasicStyle,
  inputIcon,
  inputStyle,
  InputStyleVariants,
  inputTextVariants,
  inputToneVariants,
  invisibleInput,
  outerStatusClass,
} from "./style.css";

export interface InputProps extends InputStyleVariants, BentoProps {
  id?: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  tone?: keyof Colors;
  leftIcon?: React.ReactNode | any;
  rightIcon?: React.ReactNode | any;
  type?: HTMLInputTypeAttribute;
  label?: React.ReactNode;
  description?: React.ReactNode | any;
  errorMessage?: React.ReactNode | any;
  disabled?: boolean;
  invalid?: boolean;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
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
      description,
      errorMessage,
      ...props
    },
    ref
  ) => {
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
    const generatedId = React.useId();
    const appliedId = id || generatedId;
    return (
      <Stack gap={"1"} alignItems={"stretch"} className={status()}>
        {label && typeof label === "string" ? (
          <Text
            as={"label"}
            htmlFor={appliedId}
            pl="2"
            size="label"
            color={"textSecondary"}
          >
            {label}
          </Text>
        ) : (
          label
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
            ref={ref}
            flexGrow={1}
            as={"input"}
            id={appliedId}
            className={clsx(
              invisibleInput[size],
              inputTextVariants[tone],
              innerStatusClass,
              inputBasicStyle
            )}
            type={type}
            disabled={disabled}
            {...props}
          />
          {rightIcon && <div className={inputIcon["right"]}>{rightIcon}</div>}
        </Stack>
        {description && typeof description === "string" ? (
          <Text pl="2" size="label" color="textTertiary">
            {description}
          </Text>
        ) : (
          description
        )}
        {errorMessage && typeof errorMessage === "string" ? (
          <Text pl="2" size="label" color="red9">
            {errorMessage}
          </Text>
        ) : (
          errorMessage
        )}
      </Stack>
    );
  }
);

export default Input;

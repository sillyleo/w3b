import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import Bento from "../Bento";
import { TextProps } from "../Text";
import "./style.css";
import {
  checkboxEmoji,
  checkboxIcon,
  checkboxIndicator,
  checkboxLabel,
  checkboxRoot,
} from "./style.css";
import { clsx } from "clsx";
import { formTone } from "../styles/theme.css";

export interface CheckboxProps {
  // basic props from radix-ui
  children?: React.ReactNode | string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;

  disabled?: boolean;

  required?: boolean;

  name?: string;

  value?: "on" | "off";

  // extra custom  props
  checkEmoji?: React.ReactNode;

  fontSize?: TextProps["fontSize"];

  tone?: TextProps["tone"];
}

export const Checkbox = ({
  children,
  tone = "gray",
  defaultChecked,
  checked,
  onCheckedChange,
  disabled,
  required,
  name,
  checkEmoji,
  value = "on",
  fontSize = "base",
  ...props
}: CheckboxProps) => {
  const generatedId = React.useId();
  const appliedId = name || generatedId;
  return (
    <Bento
      fontSize={fontSize}
      as={"label"}
      className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
      htmlFor={appliedId}
      {...props}
    >
      {/* <input
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        required={required}
        name={appliedId}
        id={appliedId}
        type="checkbox"
        {...props}
      /> */}
      <CheckboxPrimitive.Root
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={appliedId}
        id={appliedId}
        value={value}
        className={clsx(checkboxRoot, formTone[tone])}
      >
        <CheckboxPrimitive.Indicator className={checkboxIndicator}>
          {checkEmoji ? (
            <div className={checkboxEmoji}>{checkEmoji}</div>
          ) : (
            <CheckIcon className={checkboxIcon} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span>{children}</span>
    </Bento>
  );
};

export default Checkbox;

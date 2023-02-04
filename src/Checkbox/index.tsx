import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import Bento from "../Bento";
import { TextProps } from "../Text";
import "./style.css";
import {
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
  // return <div>check box</div>;
  return (
    <Bento
      fontSize={fontSize}
      as={"label"}
      className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
      htmlFor={name}
      {...props}
    >
      <CheckboxPrimitive.Root>
        <CheckboxPrimitive.Indicator />
      </CheckboxPrimitive.Root>
      {/* <CheckboxPrimitive.Root
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        className={clsx(checkboxRoot, formTone[tone])}
        id={name}
      >
        <CheckboxPrimitive.Indicator
        // className={checkboxIndicator}
        >
          {checkEmoji ? (
            <div className={checkboxIcon}>{checkEmoji}</div>
          ) : (
            <CheckIcon className={checkboxIcon} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children} */}
    </Bento>
  );
};

export default Checkbox;

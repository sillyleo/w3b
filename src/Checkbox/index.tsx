import { useToggleState } from "react-stately";
import { AriaCheckboxProps, useCheckbox, VisuallyHidden } from "react-aria";
import React from "react";
import { Bento, LucideIcon } from "../../src";
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
export interface CheckboxProps extends AriaCheckboxProps {
  // basic props
  children?: React.ReactNode | string;

  // map some standard props to react-aria
  disabled?: boolean;

  // extra custom  props
  checkEmoji?: React.ReactNode;

  fontSize?: TextProps["fontSize"];

  tone?: TextProps["tone"];
}

const Checkbox = (
  {
    children,
    fontSize,
    tone = "gray",
    disabled,

    checkEmoji,
    ...props
  }: CheckboxProps,
  ref
) => {
  let state = useToggleState(props);
  let fallbackRef = React.useRef();
  let domRef = ref || fallbackRef;

  let { inputProps } = useCheckbox(props, state, domRef);
  // console.log("inputProps", inputProps);
  return (
    <label
      // fontSize={fontSize}
      className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
    >
      <VisuallyHidden>
        <input ref={domRef} {...inputProps} disabled={disabled} />
      </VisuallyHidden>

      <div
        data-status={state.isSelected} // this is only for formTone checked styling
        className={clsx(checkboxRoot, formTone[tone])}
      >
        <div className={checkboxIndicator}>
          {state.isSelected &&
            (checkEmoji ? (
              <div className={checkboxEmoji}>{checkEmoji}</div>
            ) : (
              <LucideIcon name="check" className={checkboxIcon} />
            ))}
        </div>
      </div>
      <span>{children}</span>
    </label>
  );
};

export default React.forwardRef(Checkbox);

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import React from "react";
import { AriaCheckboxProps, useCheckbox, VisuallyHidden } from "react-aria";
import { useToggleState } from "react-stately";
import { Bento, LucideIcon } from "../../src";
import { formTone } from "../styles/theme.css";
import { TextProps } from "../Text";
import "./style.css";
import {
  checkboxEmoji,
  checkboxIcon,
  checkboxIndicator,
  checkboxLabel,
  checkboxRoot,
} from "./style.css";
export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  // basic props
  children?: React.ReactNode | string;

  // map some standard props
  // if standard onchange event comes in
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // extra custom  props
  checkEmoji?: React.ReactNode;

  fontSize?: TextProps["fontSize"];

  tone?: TextProps["tone"];
}

const Checkbox = (
  {
    children,
    fontSize,
    onChange,
    tone = "gray",
    checkEmoji,
    ...props
  }: CheckboxProps,
  ref
) => {
  return (
    <Bento
      fontSize={fontSize}
      as={"label"}
      className={checkboxLabel[!!props.disabled ? "disabled" : "enabled"]}
    >
      <CheckboxPrimitive.Root
        className={clsx(checkboxRoot, formTone[tone])}
        {...props}
        onChange={onChange}
        ref={ref}
      >
        <CheckboxPrimitive.Indicator className={checkboxIndicator}>
          {checkEmoji ? (
            <div className={checkboxEmoji}>{checkEmoji}</div>
          ) : (
            <LucideIcon name="check" className={checkboxIcon} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span>{children}</span>
    </Bento>
  );
};

// const _Checkbox = (
//   {
//     children,
//     fontSize,
//     tone = "gray",
//     disabled,

//     checkEmoji,
//     ...props
//   }: CheckboxProps,
//   ref
// ) => {
//   let state = useToggleState(props);
//   let fallbackRef = React.useRef();
//   let domRef = ref || fallbackRef;

//   let { inputProps } = useCheckbox(props, state, domRef);
//   // console.log("inputProps", inputProps);
//   return (
//     <label
//       // fontSize={fontSize}
//       className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
//     >
//       <VisuallyHidden>
//         <input ref={domRef} {...inputProps} disabled={disabled} />
//       </VisuallyHidden>

//       <div className={clsx(checkboxRoot, formTone[tone])}>
//         <div className={checkboxIndicator}>
//           {state.isSelected &&
//             (checkEmoji ? (
//               <div className={checkboxEmoji}>{checkEmoji}</div>
//             ) : (
//               <LucideIcon name="check" className={checkboxIcon} />
//             ))}
//         </div>
//       </div>
//       <span>{children}</span>
//     </label>
//   );
// };

export default React.forwardRef(Checkbox);

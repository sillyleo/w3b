import React, { useState } from "react";
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

// export interface CheckboxProps {
//   // basic props from radix-ui
//   children?: React.ReactNode | string;
//   defaultChecked?: boolean;
//   checked?: boolean;
//   onCheckedChange?: (checked: boolean) => void;

//   disabled?: boolean;

//   required?: boolean;

//   name?: string;

//   value?: string;

//   // extra custom  props
//   checkEmoji?: React.ReactNode;

//   fontSize?: TextProps["fontSize"];

//   tone?: TextProps["tone"];
// }

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  id?: string;
  children?: React.ReactNode | string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;

  disabled?: boolean;

  required?: boolean;

  name?: string;

  value?: string;

  // extra custom  props
  checkEmoji?: React.ReactNode;

  fontSize?: TextProps["fontSize"];

  tone?: TextProps["tone"];
}

export const Checkbox = React.forwardRef(
  (
    {
      id,
      children,
      defaultChecked,
      fontSize,
      disabled,
      checked,
      required,
      value,
      onCheckedChange,
      checkEmoji,
      tone = "gray",

      ...props
    }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const generatedId = React.useId();
    const appliedId = id || generatedId;

    const handleChange = (event) => {
      setCheckStatus(event.target.checked);
    };

    const [checkStatus, setCheckStatus] = useState(defaultChecked);

    return (
      <Bento
        fontSize={fontSize}
        as={"label"}
        className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
        htmlFor={appliedId}
      >
        {/* This is the real slim shaddy */}
        <input
          // style={{ display: "none" }}
          disabled={disabled}
          name={appliedId}
          id={appliedId}
          type="checkbox"
          ref={ref}
          onChange={handleChange}
          {...props}
        />
        {/* This is only a shell for the real checkbox */}
        <CheckboxPrimitive.Root
          defaultChecked={defaultChecked}
          checked={checkStatus}
          disabled={disabled}
          required={required}
          name={appliedId}
          id={appliedId}
          className={clsx(checkboxRoot, formTone[tone])}
          {...props}
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
  }
);

// export const Checkbox = React.forwardRef(
//   (
//     {
//       children,
//       tone = "gray",
//       defaultChecked,
//       checked,
//       onCheckedChange,
//       disabled,
//       required,
//       name,
//       checkEmoji,
//       value = "on",
//       fontSize = "base",
//       ...props
//     }: CheckboxProps,
//     ref: React.ForwardedRef<HTMLInputElement>
//   ) => {
//     const generatedId = React.useId();
//     const appliedId = name || generatedId;
//     return (
//       <Bento
//         fontSize={fontSize}
//         as={"label"}
//         className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
//         htmlFor={appliedId}
//       >
//         <CheckboxPrimitive.Root
//           defaultChecked={defaultChecked}
//           checked={checked}
//           disabled={disabled}
//           required={required}
//           name={appliedId}
//           id={appliedId}
//           value={value}
//           onCheckedChange={onCheckedChange}
//           className={clsx(checkboxRoot, formTone[tone])}
//           ref={ref}
//           {...props}
//         >
//           <CheckboxPrimitive.Indicator className={checkboxIndicator}>
//             {checkEmoji ? (
//               <div className={checkboxEmoji}>{checkEmoji}</div>
//             ) : (
//               <CheckIcon className={checkboxIcon} />
//             )}
//           </CheckboxPrimitive.Indicator>
//         </CheckboxPrimitive.Root>
//         <span>{children}</span>
//       </Bento>
//     );
//   }
// );

export default Checkbox;

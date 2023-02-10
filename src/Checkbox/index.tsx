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
import { useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "react-stately";

function Checkbox(props) {
  let { children } = props;
  let state = useToggleState(props);
  let ref = React.useRef();
  let { inputProps } = useCheckbox(props, state, ref);

  return (
    <label style={{ display: "block" }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}
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
  // extra custom  props
  checkEmoji?: React.ReactNode;

  fontSize?: TextProps["fontSize"];

  tone?: TextProps["tone"];
}

// export const Checkbox = React.forwardRef(
//   (
//     {
//       checkEmoji,
//       fontSize,
//       tone = "gray",

//       ...props
//     }: CheckboxProps,
//     ref: React.ForwardedRef<HTMLInputElement>
//   ) => {
//     // const generatedId = React.useId();
//     // const appliedId = id || generatedId;

//     // const [checkStatus, setCheckStatus] = useState(defaultChecked);

//     return (
//       <Bento
//         fontSize={fontSize}
//         as={"label"}
//         className={checkboxLabel[!!props.disabled ? "disabled" : "enabled"]}
//         htmlFor={props.name}
//       >
//         <CheckboxPrimitive.Root
//           // value={value}
//           // disabled={disabled}
//           // required={required}
//           // checked={checked}
//           // onCheckedChange={onCheckedChange}
//           // name={appliedId}
//           // defaultChecked={props.defaultChecked}
//           // checked={checked}
//           // id={appliedId}
//           className={clsx(checkboxRoot, formTone[tone])}
//           ref={ref}
//         >
//           <CheckboxPrimitive.Indicator className={checkboxIndicator}>
//             {checkEmoji ? (
//               <div className={checkboxEmoji}>{checkEmoji}</div>
//             ) : (
//               <CheckIcon className={checkboxIcon} />
//             )}
//           </CheckboxPrimitive.Indicator>
//         </CheckboxPrimitive.Root>
//         <span>{props.children}</span>
//       </Bento>
//     );
//   }
// );

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

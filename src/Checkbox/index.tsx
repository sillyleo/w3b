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

export interface CheckboxProps {
  id?: string;
  children?: React.ReactNode | string;
}

export const Checkbox = React.forwardRef(
  (
    { id, children, ...props }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const generatedId = React.useId();
    const appliedId = id || generatedId;

    return (
      <label htmlFor={appliedId}>
        <input
          name={appliedId}
          id={appliedId}
          type="checkbox"
          ref={ref}
          {...props}
        />
        <span>{children}</span>
      </label>
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

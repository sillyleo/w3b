import React from "react";
import {
  useCheckboxState,
  Checkbox as CheckboxPrimitive,
  CheckboxProps,
} from "reakit/Checkbox";
import { clsx } from "clsx";
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
import { VisuallyHidden } from "react-aria";
export interface CheckboxExtendedProps extends CheckboxProps {
  //realkit
  disabled?: boolean | undefined;
  //custom
  defaultChecked?: boolean | undefined;
  children?: React.ReactNode;
  tone?: TextProps["tone"];
  fontSize?: TextProps["fontSize"];
  checkEmoji?: React.ReactNode;
}

function Checkbox(
  {
    disabled,
    defaultChecked,
    children,
    checkEmoji,
    fontSize,
    tone = "gray",
    ...props
  }: CheckboxExtendedProps,
  ref
) {
  const checkbox = useCheckboxState({
    state: defaultChecked,
  });
  // console.log(checkbox.state);
  return (
    <Bento
      fontSize={fontSize}
      as={"label"}
      className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
    >
      <VisuallyHidden>
        <CheckboxPrimitive
          disabled={disabled}
          ref={ref}
          {...checkbox}
          {...props}
        />
      </VisuallyHidden>
      <div
        data-state={
          props.checked !== undefined
            ? props.checked
              ? "checked"
              : "unchecked"
            : checkbox.state
            ? "checked"
            : "unchecked"
        } // styling based on state
        className={clsx(checkboxRoot, formTone[tone])}
      >
        {/* use checked if it's present, else use state */}
        {props.checked === true ? (
          <div className={checkboxIndicator}>
            {checkEmoji ? (
              <div className={checkboxEmoji}>{checkEmoji}</div>
            ) : (
              <LucideIcon name="check" className={checkboxIcon} />
            )}
          </div>
        ) : (
          checkbox.state && (
            <div className={checkboxIndicator}>
              {checkEmoji ? (
                <div className={checkboxEmoji}>{checkEmoji}</div>
              ) : (
                <LucideIcon name="check" className={checkboxIcon} />
              )}
            </div>
          )
        )}
      </div>

      <span>{children}</span>
    </Bento>
  );
}

export default React.forwardRef(Checkbox);
// import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
// import React from "react";
// import { AriaCheckboxProps, useCheckbox, VisuallyHidden } from "react-aria";
// import { useToggleState } from "react-stately";
// import { clsx } from "clsx";
// import { Bento, LucideIcon } from "../../src";
// import { formTone } from "../styles/theme.css";
// import { TextProps } from "../Text";
// import "./style.css";
// import {
//   checkboxEmoji,
//   checkboxIcon,
//   checkboxIndicator,
//   checkboxLabel,
//   checkboxRoot,
// } from "./style.css";
// export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
//   // basic props
//   children?: React.ReactNode | string;

//   // map some standard props
//   // if standard onchange event comes in
//   onChange?: (any) => void;
//   // extra custom  props
//   checkEmoji?: React.ReactNode;

//   fontSize?: TextProps["fontSize"];

//   tone?: TextProps["tone"];
// }

// const Checkbox = (
//   { children, fontSize, tone = "gray", checkEmoji, ...props }: CheckboxProps,
//   ref
// ) => {
//   return (
//     <Bento
//       fontSize={fontSize}
//       as={"label"}
//       className={checkboxLabel[!!props.disabled ? "disabled" : "enabled"]}
//     >
//       <CheckboxPrimitive.Root
//         className={clsx(checkboxRoot, formTone[tone])}
//         {...props}
//         ref={ref}
//       >
//         <CheckboxPrimitive.Indicator className={checkboxIndicator}>
//           {checkEmoji ? (
//             <div className={checkboxEmoji}>{checkEmoji}</div>
//           ) : (
//             <LucideIcon name="check" className={checkboxIcon} />
//           )}
//         </CheckboxPrimitive.Indicator>
//       </CheckboxPrimitive.Root>
//       <span>{children}</span>
//     </Bento>
//   );
// };

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

// export default React.forwardRef(Checkbox);

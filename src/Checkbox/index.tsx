import React from "react";
// import {
//   Checkbox as CheckboxPrimitive,
//   CheckboxProps,
//   useCheckboxState,
// } from "reakit/Checkbox";
// import { clsx } from "clsx";
// import { Bento, LucideIcon } from "../../src";
// import { formTone } from "../styles/theme.css";
// import { TextProps } from "../Text";
// import {
//   checkboxEmoji,
//   checkboxIcon,
//   checkboxIndicator,
//   checkboxLabel,
//   checkboxRoot,
// } from "./style.css";
// import { VisuallyHidden } from "react-aria";

// export interface CheckboxExtendedProps extends CheckboxProps {
//   //realkit
//   disabled?: boolean | undefined;
//   //custom
//   defaultChecked?: boolean | undefined;
//   children?: React.ReactNode;
//   tone?: keyof Colors;
//   fontSize?:
//     | "xs"
//     | "sm"
//     | "base"
//     | "lg"
//     | "xl"
//     | "2xl"
//     | "3xl"
//     | "4xl"
//     | "5xl"
//     | "6xl";
//   checkEmoji?: React.ReactNode;
// }

// function Checkbox(
//   {
//     disabled,
//     defaultChecked,
//     children,
//     checkEmoji,
//     fontSize,
//     tone = "gray",
//     ...props
//   }: CheckboxExtendedProps,
//   ref: React.ForwardedRef<HTMLInputElement>
// ) {
//   const checkbox = useCheckboxState({
//     state: defaultChecked,
//   });
//   // console.log(checkbox.state);
//   return (
//     <Bento
//       fontSize={fontSize}
//       as={"label"}
//       className={checkboxLabel[!!disabled ? "disabled" : "enabled"]}
//     >
//       <VisuallyHidden>
//         <CheckboxPrimitive
//           disabled={disabled}
//           ref={ref}
//           {...checkbox}
//           {...props}
//         />
//       </VisuallyHidden>
//       <div
//         data-state={
//           props.checked !== undefined
//             ? props.checked
//               ? "checked"
//               : "unchecked"
//             : checkbox.state
//             ? "checked"
//             : "unchecked"
//         } // styling based on state
//         //@ts-ignore
//         className={clsx(checkboxRoot, formTone[tone])}
//       >
//         {/* use checked if it's present, else use state */}
//         {props.checked === true ? (
//           <div className={checkboxIndicator}>
//             {checkEmoji ? (
//               <div className={checkboxEmoji}>{checkEmoji}</div>
//             ) : (
//               <LucideIcon name="check" className={checkboxIcon} />
//             )}
//           </div>
//         ) : (
//           checkbox.state && (
//             <div className={checkboxIndicator}>
//               {checkEmoji ? (
//                 <div className={checkboxEmoji}>{checkEmoji}</div>
//               ) : (
//                 <LucideIcon name="check" className={checkboxIcon} />
//               )}
//             </div>
//           )
//         )}
//       </div>

//       <Bento as="span" color="baseText" fontSize={fontSize}>
//         {children}
//       </Bento>
//     </Bento>
//   );
// }

const Checkbox = () => {
	return <p>Checkbox is depricated.</p>;
};

export default React.forwardRef(Checkbox);
import { useToggleState } from "react-stately";
import { useCheckbox } from "react-aria";
import React from "react";

const Checkbox = ({ children, ...props }, ref) => {
  let state = useToggleState(props);
  let fallbackRef = React.useRef();
  let domRef = ref || fallbackRef;

  let { inputProps } = useCheckbox(props, state, domRef);

  return (
    <label style={{ display: "block" }}>
      <input {...inputProps} ref={domRef} />
      {children}
    </label>
  );
};

export default React.forwardRef(Checkbox);

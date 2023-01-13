import React from "react";
import { lightTheme } from "../../src/styles/theme.css";
import { buttonStyle } from "./style.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: Props) => {
  return (
    <div className={lightTheme}>
      <button className={buttonStyle} {...props} />
    </div>
  );
};

export default Button;

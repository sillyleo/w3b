import React from "react";
import { buttonStyle } from "./style.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: Props) => {
  return <button className={buttonStyle} {...props} />;
};

export default Button;

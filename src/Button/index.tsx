import React from "react";
import { container } from "../Button/styles.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: Props) => {
  return <button className={container} {...props} />;
};

export default Button;

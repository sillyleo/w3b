import React from "react";
import { style } from "@vanilla-extract/css";
// import { vars, lightThemeClass } from "../../src/styles/theme.css";

export const container = style({
  padding: 10,
});

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: Props) => {
  return <button className={container} {...props} />;
};

export default Button;

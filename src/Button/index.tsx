import React from "react";
import { colors, darkTheme, lightTheme } from "../../src/styles/colors.css";
import { buttonStyle, ButtonVariants } from "./style.css";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: ButtonVariants;
};

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <div className={lightTheme}>
      <button className={buttonStyle(variant)} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;

import React from 'react';
import { buttonStyle } from './style.css';
import { lightThemeClass, darkThemeClass, vars } from '../styles/theme.css';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: Props) => {
  return (
    <div className={lightThemeClass}>
      <button className={buttonStyle} {...props} />
    </div>
  );
};

export default Button;

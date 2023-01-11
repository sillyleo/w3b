import { style } from '@vanilla-extract/css';
import { lightThemeClass, darkThemeClass, vars } from '../styles/theme.css';

export const buttonStyle = style([
  {
    color: vars.tomato[10],
    background: vars.tomato[5],
    padding: 30,
  },
]);

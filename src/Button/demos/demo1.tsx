/**
 * @title Card Demo1 Title
 * @description Card demo1 description
 */

import React from "react";
import { Button } from "w3b";
import { darkTheme, lightTheme } from '../../theme';

const Demo1 = () => {
  return (
    <div className={darkTheme}>
      <Button >Click me!</Button>
    </div>
  );
};

export default Demo1;

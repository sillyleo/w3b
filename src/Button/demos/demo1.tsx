/**
 * @title Button shadow Demo1 Title
 * @description Button shadow demo1 description
 */

import React from "react";
import Button from "..";
import { darkTheme } from "../../styles/theme.css";

{
  /* <div> */
}
const Demo1 = () => {
  return (
    <div style={{ background: "black" }} className={darkTheme}>
      <Button shadow size="sm" tone="mauve" intent="primary">
        Button
      </Button>
      <Button shadow size="md" tone="mauve" intent="primary">
        Button
      </Button>
      <Button shadow size="lg" tone="mauve" intent="primary">
        Button
      </Button>

      <Button shadow size="sm" tone="mauve" intent="secondary">
        Button
      </Button>
      <Button shadow size="md" tone="mauve" intent="secondary">
        Button
      </Button>
      <Button shadow size="lg" tone="mauve" intent="secondary">
        Button
      </Button>

      <Button shadow size="sm" tone="mauve" intent="ghost">
        Button
      </Button>
      <Button shadow size="md" tone="mauve" intent="ghost">
        Button
      </Button>
      <Button shadow size="lg" tone="mauve" intent="ghost">
        Button
      </Button>
    </div>
  );
};

export default Demo1;

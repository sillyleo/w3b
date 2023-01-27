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
    <div>
      <Button shadow size="sm" tone="mint" intent="primary">
        Button
      </Button>
      <Button shadow size="md" tone="mint" intent="primary">
        Button
      </Button>
      <Button shadow size="lg" tone="mint" intent="primary">
        Button
      </Button>

      <Button shadow size="sm" tone="mint" intent="secondary">
        Button
      </Button>
      <Button shadow size="md" tone="mint" intent="secondary">
        Button
      </Button>
      <Button shadow size="lg" tone="mint" intent="secondary">
        Button
      </Button>

      <Button shadow size="sm" tone="mint" intent="ghost">
        Button
      </Button>
      <Button shadow size="md" tone="mint" intent="ghost">
        Button
      </Button>
      <Button shadow size="lg" tone="mint" intent="ghost">
        Button
      </Button>
    </div>
  );
};

export default Demo1;

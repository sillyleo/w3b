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
      <Button shadow size="sm" tone="gray" intent="primary">
        Button
      </Button>
      <Button shadow size="md" tone="gray" intent="primary">
        Button
      </Button>
      <Button shadow size="lg" tone="gray" intent="primary">
        Button
      </Button>

      <Button shadow size="sm" tone="gray" intent="secondary">
        Button
      </Button>
      <Button shadow size="md" tone="gray" intent="secondary">
        Button
      </Button>
      <Button shadow size="lg" tone="gray" intent="secondary">
        Button
      </Button>

      <Button shadow size="sm" tone="gray" intent="ghost">
        Button
      </Button>
      <Button shadow size="md" tone="gray" intent="ghost">
        Button
      </Button>
      <Button shadow size="lg" tone="gray" intent="ghost">
        Button
      </Button>
    </div>
  );
};

export default Demo1;

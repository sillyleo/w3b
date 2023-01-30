/**
 * @title Button shadow Demo1 Title
 * @description Button shadow demo1 description
 */

import { IceCream } from "lucide-react";
import React from "react";
import Button from "..";
import { darkTheme } from "../../styles/theme.css";

{
  /* <div> */
}
const Demo1 = () => {
  return (
    <div>
      <Button
        align="left"
        style={{ width: "200px" }}
        leftIcon={<IceCream />}
        intent="primary"
        tone="blue"
      >
        New Button
      </Button>
      <Button
        align="between"
        style={{ width: "200px" }}
        rightIcon={<IceCream />}
        intent="secondary"
        tone="blue"
      >
        New Button
      </Button>
      <Button
        style={{ width: "200px" }}
        leftIcon={<IceCream />}
        intent="ghost"
        tone="blue"
      >
        New Button
      </Button>

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

/**
 * @title Button shadow Demo1 Title
 * @description Button shadow demo1 description
 */

import React from "react";
import Icon from "../../Icon";
import Button from "..";

{
  /* <div> */
}
const Demo1 = () => {
  return (
    <div>
      <Button
        align="left"
        style={{ width: "200px" }}
        leftIcon={<Icon name="ice-cream" />}
        intent="primary"
        tone="blue"
        size="sm"
      >
        New Button
      </Button>
      <Button
        align="between"
        style={{ width: "200px" }}
        rightIcon={<Icon name="ice-cream" />}
        intent="secondary"
        tone="blue"
        size="md"
      >
        New Button
      </Button>
      <Button
        style={{ width: "200px" }}
        leftIcon={<Icon name="ice-cream" />}
        intent="ghost"
        tone="blue"
        size="lg"
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

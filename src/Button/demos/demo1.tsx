/**
 * @title Button shadow Demo1 Title
 * @description Button shadow demo1 description
 */

import React from "react";
import Icon from "../../Icon";
import Button from "..";

const Demo1 = () => {
  return (
    <div>
      <Button shadow size="sm" tone="tomato" intent="primary">
        Button
      </Button>
      <Button shadow size="md" tone="tomato" intent="primary">
        Button
      </Button>
      <Button shadow size="lg" tone="tomato" intent="primary">
        Button
      </Button>

      <Button shadow size="sm" tone="tomato" intent="secondary">
        Button
      </Button>
      <Button shadow size="md" tone="tomato" intent="secondary">
        Button
      </Button>
      <Button shadow size="lg" tone="tomato" intent="secondary">
        Button
      </Button>

      <Button shadow size="sm" tone="tomato" intent="ghost">
        Button
      </Button>
      <Button shadow size="md" tone="tomato" intent="ghost">
        Button
      </Button>
      <Button shadow size="lg" tone="tomato" intent="ghost">
        Button
      </Button>
    </div>
  );
};

export default Demo1;

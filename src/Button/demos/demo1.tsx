/**
 * @title Button Demo1 Title
 * @description Button demo1 description
 */

import React from "react";
import Icon from "../../Icon";
import Button from "..";

const Demo1 = () => {
  return (
    <div>
      <Button
        shadow
        gradient
        intent="secondary"
        leftIcon={<Icon name="camera" />}
      >
        Hello
      </Button>
      <Button
        gradient
        intent="secondary"
        leftIcon={<Icon name="camera" />}
        tone="indigo"
        size="lg"
      >
        Hello
      </Button>{" "}
      <Button leftIcon={<Icon name="camera" />} tone="indigo" size="md">
        Hello
      </Button>{" "}
      <Button
        gradient
        intent="secondary"
        leftIcon={<Icon name="camera" />}
        tone="tomato"
        size="sm"
      >
        Hello
      </Button>
      <Button intent="secondary" tone="sky">
        Hello
      </Button>
    </div>
  );
};

export default Demo1;

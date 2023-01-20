/**
 * @title Macaron Card Demo1 Title
 * @description Card demo1 description
 */

import React from "react";
import Button from "..";

const Demo1 = () => {
  return (
    <div>
      <Button size="lg" tone="cyan">
        Hello
      </Button>
      <Button size="md" tone={"tomato"} intent="primary">
        XXXXXtone="blue" size="md" intent="primary"
      </Button>
      <Button
        size="md"
        intent="secondary"
        tone="accent"

        // animate={{ scale: [1, 1.5, 1], transition: { repeat: Infinity } }}
      >
        Macaron
      </Button>
      <Button intent="tertiary" size="sm" tone="accent">
        Macaron
      </Button>
      <Button intent="transparent" tone="accent" size={undefined}>
        Macaron
      </Button>
      <Button tone={"blue"} intent={"transparent"} size={undefined}>
        Click me!
      </Button>
      <Button tone="bronze" size="sm" intent={undefined}>
        oisjdfoijsaoidj
      </Button>
      <Button tone="lime" size="md" intent={undefined}>
        oisjdfoijsaoidj
      </Button>
      <Button tone="tomato" size="lg" intent={undefined}>
        oisjdfoijsaoidj
      </Button>
      <Button tone={undefined} intent={undefined} size={undefined}>
        oisjdfoijsaoidj
      </Button>
      <Button tone={undefined} intent={undefined} size={undefined}>
        oisjdfoijsaoidj
      </Button>
      <Button intent="primary" tone={undefined} size={undefined}>
        tertiary
      </Button>
    </div>
  );
};

export default Demo1;

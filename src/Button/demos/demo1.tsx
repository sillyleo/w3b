/**
 * @title Macaron Card Demo1 Title
 * @description Card demo1 description
 */

import { motion } from "framer-motion";
import React from "react";
import { Button } from "..";

const Demo1 = () => {
  return (
    <div>
      <Button
        size="lg"
        intent="primary"
        animate={{ scale: [1, 1.5, 1], transition: { repeat: Infinity } }}
        tone="accent"
      >
        Macaron22
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
      <Button intent="transparent" tone="accent">
        Macaron
      </Button>
      <Button tone={"blue"} intent={"transparent"}>
        Click me!
      </Button>
      <Button tone="bronze" size="sm">
        oisjdfoijsaoidj
      </Button>
      <Button tone="lime" size="md">
        oisjdfoijsaoidj
      </Button>
      <Button size="lg">oisjdfoijsaoidj</Button>
      <Button>oisjdfoijsaoidj</Button>
      <Button>oisjdfoijsaoidj</Button>
      <Button intent="primary">tertiary</Button>
    </div>
  );
};

export default Demo1;

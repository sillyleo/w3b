/**
 * @title Macaron Card Demo1 Title
 * @description Card demo1 description
 */

import { motion } from "framer-motion";
import React from "react";
import { Button, MotionButton } from "w3b";

const Demo1 = () => {
  return (
    <div>
      <MotionButton color="blue" animate={{ scale: 1.4 }}>
        oiasjd
      </MotionButton>
      <Button
        // animate={{ scale: [1, 1.5, 1], transition: { repeat: Infinity } }}
        color="crimson"
      >
        Macaron
      </Button>
      <Button color="sky">Macaron</Button>
      <Button color="sage">Macaron</Button>
      <Button>Click me!</Button>
    </div>
  );
};

export default Demo1;

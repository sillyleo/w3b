/**
 * @title Card Demo1 Title
 * @description Card demo1 description
 */

import React from "react";
import { Card } from "w3b";

const Demo1 = () => {
  return (
    <div>
      <Card animate={{ scale: [1, 1.5, 1], transition: { repeat: Infinity } }}>
        stitches card demo
      </Card>
      <Card tone="gold">stitches card demo</Card>
    </div>
  );
};

export default Demo1;

/**
 * @title Popover Demo1 Title
 * @description Popover demo1 description
 */
import { loremIpsum } from "react-lorem-ipsum";

import React from "react";
import Text from "../../Text";
import Popover from "..";
import Bento from "../../Bento";

const Demo1 = () => {
  return (
    <Popover popoverContentProps={{ side: "right" }}>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </Popover>
  );
};

export default Demo1;

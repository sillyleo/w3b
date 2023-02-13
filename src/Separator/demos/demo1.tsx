/**
 * @title Avatar Demo1 Title
 * @description Avatar demo1 description
 */

import React from "react";
import Stack from "../../Stack";
import Separator from "..";
import Bento from "../../Bento";
import Text from "../../Text";

const Demo1 = () => {
  return (
    <Stack>
      <Stack>
        <Text>Hi</Text>
        <Separator tone="blue" />
        <Text>Hi</Text>
        <Separator />
        <Text>Hi</Text>
        <Separator />
        <Text>Hi</Text>
        <Separator />
      </Stack>
      <Stack direction="row" alignItems={"stretch"}>
        <Text>Hi</Text>
        <Separator orientation="vertical" />
        <Text>Hi</Text>
      </Stack>
    </Stack>
  );
};

export default Demo1;

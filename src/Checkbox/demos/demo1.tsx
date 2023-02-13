/**
 * @title Avatar Demo1 Title
 * @description Avatar demo1 description
 */

import React from "react";
import { Checkbox, Stack, Text } from "../../";

const Demo1 = () => {
  return (
    <Stack>
      <Checkbox>woifj</Checkbox>
      <Checkbox checkEmoji={"😃"} name={"c1"} tone={"tomato"} fontSize={"xl"}>
        <Text>This wwis a checkbox</Text>
      </Checkbox>
      <Checkbox checkEmoji={"123"} name={"c61"} tone={"tomato"} fontSize={"xl"}>
        This is a checkbox
      </Checkbox>
      <Checkbox checkEmoji={"😃"} name={"c2"} tone={"mint"} fontSize={"lg"}>
        This is a checkbox
      </Checkbox>
      <Checkbox checkEmoji={"😃"} name={"c3"} tone={"gray"} fontSize={"base"}>
        This is a checkbox
      </Checkbox>
      <Checkbox checkEmoji={"😃"} name={"c4"} tone={"sky"} fontSize={"sm"}>
        This is a checkbox
      </Checkbox>
      <Checkbox checkEmoji={"😃"} name={"c5"} tone={"amber"} fontSize={"xs"}>
        This is a checkbox
      </Checkbox>
      <Checkbox name={"c1"} disabled tone={"tomato"} fontSize={"xl"}>
        This is a checkbox
      </Checkbox>
      <Checkbox name={"c2"} disabled tone={"blue"} fontSize={"lg"}>
        This is a checkbox
      </Checkbox>
      <Checkbox name={"c3"} disabled tone={"gray"} fontSize={"base"}>
        This is a checkbox
      </Checkbox>
      <Checkbox name={"c4"} disabled tone={"sky"} fontSize={"sm"}>
        This is a checkbox
      </Checkbox>
      <Checkbox name={"c5"} disabled tone={"amber"} fontSize={"xs"}>
        This is a checkbox
      </Checkbox>
    </Stack>
  );
};

export default Demo1;

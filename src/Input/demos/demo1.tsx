/**
 * @title Input Demo1 Title
 * @description Input demo1 description
 */
import { loremIpsum } from "react-lorem-ipsum";

import React from "react";
import Input from "..";
import Stack from "../../Stack";
import Icon from "../../Icon";
import IconButton from "../../IconButton";

const Demo1 = () => {
  return (
    <Stack>
      <Stack direction="row">
        <Input
          label=""
          rightIcon={<Icon name={"chevron-down"} />}
          leftIcon={<Icon name={"search"} />}
          size={"sm"}
          placeholder={"Input field"}
        />
        <IconButton size="sm" />
      </Stack>
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"md"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"lg"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"sm"}
        tone={"tomato"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"md"}
        tone={"tomato"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"lg"}
        tone={"tomato"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"sm"}
        tone={"lime"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"md"}
        tone={"lime"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"lg"}
        tone={"lime"}
        placeholder={"Input field"}
      />

      <Input size={"sm"} tone={"sage"} placeholder={"Input field"} />
      <Input size={"md"} tone={"sage"} placeholder={"Input field"} />
      <Input size={"lg"} tone={"sage"} placeholder={"Input field"} />

      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"sm"}
        tone={"sage"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"md"}
        tone={"sage"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        size={"lg"}
        tone={"sage"}
        placeholder={"Input field"}
      />
      <Input
        label="Label"
        rightIcon={<Icon name={"chevron-down"} />}
        leftIcon={<Icon name={"search"} />}
        disabled
        size={"sm"}
        placeholder={"Input field"}
      />
      <Input disabled size={"md"} placeholder={"Input field"} />
      <Input disabled size={"lg"} placeholder={"Input field"} />
    </Stack>
  );
};

export default Demo1;

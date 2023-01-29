/**
 * @title Stack Demo1 Title
 * @description Stack demo1 description
 */
import { loremIpsum } from "react-lorem-ipsum";

import React from "react";
import Text from "../../Text";
import Stack from "..";

const Demo1 = () => {
  return (
    <Stack
      borderRadius={"2xl"}
      bg="slate3"
      p="6"
      boxShadow={"lg"}
      direction="column"
    >
      <Text size="page-title">Page Title</Text>
      <Text size="title1">Title 1</Text>
      <Text size="title2">Title 2</Text>
      <Text size="title3">Title 3</Text>
      <Text size="subtitle1" color={"textSecondary"}>
        Subtitle 1
      </Text>
      <Text size="subtitle2" color={"textSecondary"}>
        Subtitle 2
      </Text>
      <Text size="overline" color={"textTertiary"}>
        Overline
      </Text>
      <Text size="body">Body {loremIpsum()}</Text>
      <Text size="body-bold">Body Bold </Text>
      <Text size="label" color={"textSecondary"}>
        Label
      </Text>
      <Text size="caption" color={"textTertiary"}>
        Caption
      </Text>
    </Stack>
  );
};

export default Demo1;

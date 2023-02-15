/**
 * @title Text Demo1 Title
 * @description Text demo1 description
 */

import React from "react";
import Text from "..";
import Stack from "../../Stack";
import { loremIpsum } from "lorem-ipsum";
("lorem-ipsum");

const Demo1 = () => {
  return (
    <Stack>
      <Text size="page-title">Page Title</Text>
      <Text size="title1">Title 1</Text>
      <Text size="title2">Title 2</Text>
      <Text size="title3">Title 3</Text>
      <Text size="subtitle1">Subtitle 1</Text>
      <Text size="subtitle2">Subtitle 2</Text>
      <Text size="overline">Overline</Text>
      <Text>{loremIpsum({ count: 4 })}</Text>
      <Text size="body-bold">Body Bold </Text>
      <Text size="label">Label</Text>
      <Text size="caption">Caption</Text>
    </Stack>
  );
};

export default Demo1;

/**
 * @title Icon Button
 * @description Icon Button description
 */

import React from "react";
import Icon from "../../Icon";
import IconButton from "..";

const Demo1 = () => {
  return (
    <div>
      <IconButton size="sm" name="camera" />
      <IconButton size="md" name="camera" />
      <IconButton size="lg" name="camera" />
      <IconButton
        size="sm"
        name="camera"
        rightIcon={<Icon name="chevron-right" />}
      />
      <IconButton
        size="md"
        name="camera"
        rightIcon={<Icon name="chevron-right" />}
      />
      <IconButton
        size="lg"
        rightIcon={<Icon name="chevron-right" />}
        name="camera"
      />{" "}
      <IconButton intent="primary" size="lg" name="camera" />
      <IconButton intent="secondary" size="lg" name="camera" />
      <IconButton intent="ghost" size="lg" name="camera" />
      <IconButton tone="amber" intent="primary" size="lg" name="camera" />
      <IconButton tone="amber" intent="secondary" size="lg" name="camera" />
      <IconButton tone="amber" intent="ghost" size="lg" name="camera" />
    </div>
  );
};

export default Demo1;

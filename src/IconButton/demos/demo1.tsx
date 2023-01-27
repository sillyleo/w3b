/**
 * @title IconButton shadow Demo1 Title
 * @description IconButton shadow demo1 description
 */

import React from "react";
import IconButton from "..";
import { darkTheme } from "../../styles/theme.css";

const Demo1 = () => {
  return (
    <div
    // className={darkTheme}
    >
      <IconButton shadow size="sm" tone="gray" intent="primary" />
      <IconButton shadow size="md" tone="gray" intent="primary" />
      <IconButton shadow size="lg" tone="gray" intent="primary" />

      <IconButton shadow size="sm" tone="gray" intent="secondary" />
      <IconButton shadow size="md" tone="gray" intent="secondary" />
      <IconButton shadow size="lg" tone="gray" intent="secondary" />

      <IconButton shadow size="sm" tone="gray" intent="ghost" />
      <IconButton shadow size="md" tone="gray" intent="ghost" />
      <IconButton shadow size="lg" tone="gray" intent="ghost" />
    </div>
  );
};

export default Demo1;

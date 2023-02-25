import React from "react";
import { styled } from "src/stitches.config";

const BaseButton = styled("button", {
  backgroundColor: "red",
  color: "white",
});

const BrandButton = (props, ref) => {
  return <BaseButton ref={ref} {...props} />;
};

export default React.forwardRef(BrandButton);

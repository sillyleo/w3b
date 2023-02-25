import React from "react";
import { styled } from "src/stitches.config";

const BaseButton = styled("button", {
  backgroundColor: "red",
  color: "white",
});

const BrandButton = ({ children, ...props }, ref) => {
  return (
    <BaseButton ref={ref} {...props}>
      xxx {children} xxx
    </BaseButton>
  );
};

export default React.forwardRef(BrandButton);

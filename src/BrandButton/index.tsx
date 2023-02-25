import React from "react";

const BrandButton = (children, ...props) => {
  return <button {...props}>{children}</button>;
};

export default BrandButton;

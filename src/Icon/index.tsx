// import { styled } from "@macaron-css/react";
import _ from "lodash";
import * as icons from "lucide-react";
import React from "react";
// import { sizeLg, sizeMd, sizeSm } from "src/Button";

export interface IconProps {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fill?: string;
}

/**
 * See icons here: https://lucide.dev and paste in the name of the icon you want to use like "air-vent"
 *
 * @param {IconProps} { name, color, size, strokeWidth, ...props }
 * @returns
 */

// Sizing depending on parent button variant class names
// const IconSizer = styled("div", {
//   base: {
//     selectors: {
//       [`${sizeSm} > &`]: {
//         width: "15px",
//         height: "15px",
//       },
//       [`${sizeMd} > &`]: {
//         width: "18px",
//         height: "18px",
//       },
//       [`${sizeLg} > &`]: {
//         width: "22px",
//         height: "22px",
//       },
//     },
//   },
// });

const Icon = ({
  name,
  color,
  size,
  fill = "none",
  strokeWidth,
  ...props
}: IconProps) => {
  const iconNameCamelCase = _.camelCase(name);
  const IconNameUpperCase =
    iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);

  const LucideIcon = icons[IconNameUpperCase];

  return (
    <LucideIcon
      color={color}
      size={size ? size : "1.4em"}
      strokeWidth={strokeWidth}
      fill={fill}
      {...props}
    />
  );
};

export default Icon;

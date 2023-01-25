import _ from "lodash";
import * as icons from "lucide-react";
import React from "react";

export interface IconProps {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fill?: string;
}

/**
 *
 *
 * @param {IconProps} {
 *   name,
 *   color,
 *   size,
 *   fill = "none",
 *   strokeWidth,
 *   ...props
 * }
 * @returns
 */
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
      style={{ flexShrink: 0 }}
      {...props}
    />
  );
};

export default Icon;

import * as ProgressPrimitive from "@radix-ui/react-progress";
import clsx from "clsx";
import { motion } from "framer-motion";
import Stack from "../Stack";
import Text from "../Text";
import Bento, { BentoProps } from "../Bento";
import {
  indicatorColor,
  indicatorStyle,
  rootSize,
  rootStyle,
} from "./style.css";
import React from "react";

export interface ProgressProps extends BentoProps {
  tone?: BentoProps["colors"];
  initialValue?: number;
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  barColor?: string;
  trackColor?: string;
  leftLabel?: React.ReactNode | string;
  rightLabel?: React.ReactNode | string;
  labelPosition?: "top" | "bottom";
}

const Progress = ({
  tone = "slate",
  initialValue = 0,
  value = 50,
  max = 100,
  size = "md",
  barColor,
  trackColor,
  leftLabel,
  rightLabel,
  labelPosition = "bottom",
  ...props
}: ProgressProps) => (
  <Bento {...props}>
    <Stack gap="1">
      <Stack
        __paddingLeft="6px"
        __paddingRight="6px"
        __order={
          labelPosition === "top" ? -1 : labelPosition === "bottom" ? 2 : 1
        }
        direction="row"
        justifyContent={"space-between"}
      >
        {leftLabel && typeof leftLabel === "string" ? (
          <Text size="label">{leftLabel}</Text>
        ) : (
          leftLabel
        )}
        {rightLabel && typeof rightLabel === "string" ? (
          <Text size="label">{rightLabel}</Text>
        ) : (
          rightLabel
        )}
      </Stack>
      <ProgressPrimitive.Root
        className={clsx(rootStyle)}
        style={{
          backgroundColor: trackColor,
        }}
        value={value}
        max={max}
      >
        <ProgressPrimitive.Indicator
          className={clsx(indicatorStyle, indicatorColor[tone], rootSize[size])}
          style={{
            width: `${(value / max) * 100}%`,
            backgroundColor: barColor,
          }}
          asChild
        >
          <motion.div
            initial={{ width: `${(initialValue / max) * 100}%` }}
            animate={{
              width: `${(value / max) * 100}%`,
              transition: { duration: 2, easings: "easeInOut" },
            }}
          />
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
    </Stack>
  </Bento>
);

export default Progress;

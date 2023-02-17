import * as ProgressPrimitive from "@radix-ui/react-progress";
import clsx from "clsx";
import { motion } from "framer-motion";
import Stack from "src/Stack";
import Text from "src/Text";
import Bento, { BentoProps } from "../Bento";
import {
  indicatorColor,
  indicatorStyle,
  rootSize,
  rootStyle,
} from "./style.css";

export interface ProgressProps extends BentoProps {
  tone?: BentoProps["colors"];
  initialValue?: number;
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  barColor?: string;
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
        {leftLabel && <Text size="label">leftLabel</Text>}
        {rightLabel && <Text size="label">rightLabel</Text>}
      </Stack>
      <ProgressPrimitive.Root
        className={clsx(rootStyle)}
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

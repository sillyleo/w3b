import React from "react";
import _ from "lodash";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { styled, CSS, Radix } from "../stitches.config";
import { getIndicatorToneStyle, getBarToneStyle } from "src/util/tones";

export interface ProgressProps {
  tone?: keyof Colors;
  initialValue?: number;
  value?: number;
  position: "relative";
  max?: number;
  size?: "sm" | "md" | "lg";
  barColor?: string;
  trackColor?: string;
  leftLabel?: React.ReactNode | string;
  rightLabel?: React.ReactNode | string;
  labelPosition?: "top" | "bottom";
  css?: CSS;
}

const Progress = ({
  max = 100,
  value = 200,
  tone = "slate",
  barColor,
  trackColor,
  size = "lg",
  spacing = 1,
  css,
  ...props
}: ProgressProps) => {
  const rawProgress = value ? (value / max) * 100 : 0;
  // make sure progress is between 0 and 100
  const progress = Math.min(Math.max(rawProgress, 0), 100);
  return (
    <ProgressRoot
      css={_.merge(
        getIndicatorToneStyle(tone),
        {
          bg: trackColor,
        },
        css
      )}
      spacing={spacing}
      size={size}
    >
      <ProgressIndicator
        glow
        css={_.merge(
          // getBarToneStyle(tone),
          // {
          //   width: `${progress}%`,
          //   // transform: `translateX(40%)`,
          //   bg: barColor,
          // },
          css
        )}
      />
    </ProgressRoot>
  );
};

const ProgressRoot = styled(ProgressPrimitive.Root, {
  boxSizing: "border-box",
  display: "block",
  position: "relative",
  // overflow: "hidden",
  borderRadius: "99999px",
  borderStyle: "inset",
  borderWidth: "1px",
  bg: Radix.blackA.blackA7,
  borderColor: Radix.blackA.blackA7,
  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: "translateZ(0)",
  variants: {
    size: {
      sm: {
        height: "$2",
      },
      md: {
        height: "$3",
      },
      lg: {
        height: "$4",
      },
    },
    spacing: {
      0: {
        p: 0,
      },
      1: {
        p: 2,
      },
      2: {
        p: 4,
      },
    },
  },
  defaultVariants: {
    spacing: 1,
    size: "md",
  },
});

const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  boxSizing: "border-box",
  position: "relative",
  boxSize: "100%",
  zIndex: 1,
  borderRadius: "99999px",
  bg: "green",
  "&::after": {
    zIndex: 2,
    bg: "red",
    content: "",
    position: "absolute",
    boxSize: "100%",
    inset: 0,
    top: 10,
  },
  variants: {
    glow: {
      true: {
        // this is shadow
        "&::before": {
          zIndex: 0,
          bg: "blue",
          filter: "blur(0px)",
          content: "''",
          boxSize: "100%",
          inset: 0,
          top: 16,
        },
      },
    },
  },
  transition: "width 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  // this is bar
});

export default Progress;

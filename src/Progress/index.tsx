import React from "react";
import _ from "lodash";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { CSS, styled } from "../stitches.config";
import { getBarToneStyle, getIndicatorToneStyle } from "src/util/tones";
import Box from "src/Box";

export interface ProgressProps {
  tone?: keyof Colors;
  value?: number;
  glow?: boolean;
  max?: number;
  size?: "sm" | "md" | "lg";
  barColor?: string;
  spacing?: 0 | 1 | 2;
  trackColor?: string;
  borderColor?: string;
  leftLabel?: React.ReactNode | string;
  rightLabel?: React.ReactNode | string;
  labelPosition?: "top" | "bottom";
  css?: CSS;
}

const Progress = ({
  max = 100,
  value = 46,
  tone = "slate",
  barColor,
  trackColor,
  borderColor,
  glow,
  spacing = 1,
  size = "lg",
  leftLabel,
  rightLabel,
  labelPosition = "bottom",
  css,
  ...props
}: ProgressProps) => {
  const rawProgress = value ? (value / max) * 100 : 0;
  // make sure progress is between 0 and 100
  const progress = Math.min(Math.max(rawProgress, 0), 100);
  return (
    <Box
      css={{ display: "flex", alignItems: "stretch", flexDirection: "column" }}
    >
      <Box
        css={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          order: labelPosition === "top" ? 0 : 1,
        }}
      >
        <div>{leftLabel}</div>
        <div>{rightLabel}</div>
      </Box>
      <ProgressRoot
        css={_.merge(
          getIndicatorToneStyle(tone),
          {
            bg: trackColor,
            border: borderColor ? `1px solid ${borderColor}` : undefined,
          },
          css
        )}
        size={size}
        spacing={spacing}
      >
        <ProgressIndicator
          glow={glow}
          css={_.merge(
            getBarToneStyle(tone),
            {
              "&::after": {
                background: barColor,
              },
              "&::before": {
                background: barColor,
              },
              width: `${progress}%`,
            },
            css
          )}
        />
      </ProgressRoot>
    </Box>
  );
};

const ProgressRoot = styled(ProgressPrimitive.Root, {
  boxSizing: "border-box",
  display: "block",
  position: "relative",
  // overflow: "hidden",
  borderRadius: "99999px",
  borderWidth: "1px",
  bg: "$slate1",
  borderColor: "$slate7",
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
        p: 3,
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
  bg: "transparent",
  transition: "width 660ms cubic-bezier(0.65, 0, 0.35, 1)",

  // bar
  "&::after": {
    zIndex: 1,
    borderRadius: "99999px",
    content: "",
    position: "absolute",
    boxSize: "100%",
    inset: 0,
    top: 0,
    transition: "width 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  },
  "&::before": {
    zIndex: 1,
    borderRadius: "99999px",
    content: "",
    opacity: 0,
    filter: "blur(4px)",
    position: "absolute",
    boxSize: "100%",
    inset: 0,
    top: 4,
    transition: "width 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  },
  variants: {
    glow: {
      true: {
        "&::before": {
          zIndex: 1,
          borderRadius: "99999px",
          content: "",
          opacity: 0.3,
          filter: "blur(4px)",
          position: "absolute",
          boxSize: "100%",
          inset: 0,
          top: "60%",
          transition: "width 660ms cubic-bezier(0.65, 0, 0.35, 1)",
        },
      },
    },
  },
});

export default Progress;

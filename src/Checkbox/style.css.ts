import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { sprinkles, theme } from "../styles/theme.css";
import { allTones } from "../constants";

export const checkboxBase = style({
  lineHeight: 1,
  height: "1em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4em",
  userSelect: "none",
});

export const checkboxLabel = styleVariants({
  enabled: [
    checkboxBase,
    {
      cursor: "pointer",
    },
  ],
  disabled: [
    checkboxBase,
    {
      cursor: "not-allowed",
    },
  ],
});

// checkboxRoot

export const checkboxRoot = style({
  aspectRatio: "1/1",
  fontSize: "inherit",
  width: "auto",
  height: "100%",
  flexShrink: 1,
  borderRadius: "25%",
  justifyContent: "center",
  padding: "0",
  border: "none",
  display: "inline-flex",
  transition: "all 0.2s",
  alignItems: "center",
  ":active": { transform: "scale(0.9)" },
  selectors: {
    [`${checkboxLabel.enabled}:active &`]: {
      transform: "scale(0.9)",
    },
    [`&[data-disabled]`]: {
      cursor: "not-allowed",
      opacity: 0.65,
    },
  },
  // ':focus': {
  // },
  // ':active': {
  //   boxShadow: '0 0 0 2px black',
  //   transform: 'scale(0.9)'
  // }
});

const up = keyframes({
  "0%": {
    transform: "scale(0.75)",
    opacity: 0,
  },
  "65%": {
    transform: " scale(1.38)",
    opacity: 1,
  },

  "100%": {
    transform: "scale(1)",
    opacity: 1,
  },
});

export const checkboxIndicator = style({
  aspectRatio: "1",
  height: "100%",
  // padding: "1px",
  // background: "red",
  position: "relative",
  textAlign: "center",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  selectors: {
    [`${checkboxRoot}[data-state=checked] &`]: {
      animationName: up,
      animationDuration: "0.3s",
    },
  },
});

export const checkboxEmoji = style({
  // width: "100%",
  // aspectRatio: "1",
  // margin: "1px",
  // textAlign: "center",
  // lineHeight: 1,
  // padding: 0,
  // background: "green",
  fontSize: "0.8em",
  // overflow: "hidden",
  // background: "red",

  // display: "block",

  // position: "absolute",
  // zIndex: 1,
  // left: 0,
  // top: 0,
  // bottom: 0,
  // right: 0,

  textAlign: "center",
  selectors: {
    [`${checkboxRoot}[data-state=checked] &`]: {
      transform: "rotate(0deg)",
    },
    [`${checkboxRoot}[data-state=unchecked] &`]: {
      transform: "rotate(145deg)",
    },
  },
});

export const checkboxIcon = style({
  width: "100%",
  height: "100%",
  selectors: {
    [`${checkboxRoot}[data-state=checked] &`]: {
      transform: "rotate(0deg)",
    },
    [`${checkboxRoot}[data-state=unchecked] &`]: {
      transform: "rotate(145deg)",
    },
  },
});

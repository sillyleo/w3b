import { styled } from "@macaron-css/react";
import { theme } from "../theme";
import { motion } from "framer-motion";
// convert colorsArray into an object
// eg. { "red", "pink"} => red: { "backgroundColor": "red" }

const MotionButton = motion("button");

const Button = styled(MotionButton, {
  base: {
    borderRadius: theme.radii["xl"],
    opacity: theme.opacity[100],
    fontSize: theme.fontSize["4xl"],
    letterSpacing: theme.letterSpacing.tight,
    lineHeight: theme.lineHeight.heading,
    padding: theme.spacing[8],
    ":hover": {
      backgroundColor: "lightgray",
    },
  },
  variants: {
    color: {
      // all color keys from theme.colors
      tomato: { backgroundColor: theme.colors.tomato[6] },
      red: { backgroundColor: theme.colors.red[6] },
      crimson: { backgroundColor: theme.colors.crimson[6] },
      pink: { backgroundColor: theme.colors.pink[6] },
      plum: { backgroundColor: theme.colors.plum[6] },
      purple: { backgroundColor: theme.colors.purple[6] },
      violet: { backgroundColor: theme.colors.violet[6] },
      indigo: { backgroundColor: theme.colors.indigo[6] },
      blue: { backgroundColor: theme.colors.blue[6] },
      cyan: { backgroundColor: theme.colors.cyan[6] },
      teal: { backgroundColor: theme.colors.teal[6] },
      green: { backgroundColor: theme.colors.green[6] },
      grass: { backgroundColor: theme.colors.grass[6] },
      brown: { backgroundColor: theme.colors.brown[6] },
      orange: { backgroundColor: theme.colors.orange[6] },
      sky: { backgroundColor: theme.colors.sky[6] },
      mint: { backgroundColor: theme.colors.mint[6] },
      lime: { backgroundColor: theme.colors.lime[6] },
      yellow: { backgroundColor: theme.colors.yellow[6] },
      amber: { backgroundColor: theme.colors.amber[6] },
      gold: { backgroundColor: theme.colors.gold[6] },
      bronze: { backgroundColor: theme.colors.bronze[6] },
      gray: { backgroundColor: theme.colors.gray[6] },
      mauve: { backgroundColor: theme.colors.mauve[6] },
      slate: { backgroundColor: theme.colors.slate[6] },
      sage: { backgroundColor: theme.colors.sage[6] },
      olive: { backgroundColor: theme.colors.olive[6] },
      sand: { backgroundColor: theme.colors.sand[6] },
    },
  },

  defaultVariants: {
    color: "red",
  },
});

export default Button;

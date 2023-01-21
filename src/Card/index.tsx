import figmaTokens from "../theme.json";
import { styled, theme } from "../stitches.config";
import type * as Stitches from "@stitches/react";
import { motion } from "framer-motion";
// Method 1
const colorsArray = Object.keys(figmaTokens.colors);

const colorVariants = colorsArray.reduce((acc, color) => {
  const value = `$${color}6`;
  acc[color] = {
    backgroundColor: value,
  };

  return acc;
}, {});

// Method 2

// const COLOR_PATTERN = "$––color––";
// const REGEX = /\"([^\"]*?\$––color––[^\"]*?)\"/;

// export const generateColorPaletteVariants = (css: Stitches.CSS) => {
//   const cssString = JSON.stringify(css);

//   return Object.values(theme.colors).reduce((prev, color) => {
//     const substringToReplace = REGEX.exec(cssString);
//     if (!substringToReplace?.length) throw Error("No Color Token provided.");

//     const replacedSubstring = substringToReplace[0].replace(
//       COLOR_PATTERN,
//       `$${color.token}`
//     );

//     const replacedString = cssString.replace(
//       substringToReplace[0],
//       replacedSubstring
//     );

//     return { ...prev, [color.token]: JSON.parse(replacedString) };
//   }, {}) as Record<keyof typeof theme.colors, Stitches.CSS>;
// };

// const colorVariants = generateColorPaletteVariants({
//   backgroundColor: "$––color––",
// });

// console.log(colorVariants);

const MotionDiv = motion("div");

const Card = styled(MotionDiv, {
  borderRadius: "9999px",
  color: "$black",
  fontSize: "15px",
  padding: "$space$8",
  opacity: "$opacity$100",
  fontFamily: "$heading",
  fontWeight: "$extrabold",
  lineHeight: "$heading",
  variants: {
    tone: {
      // all color keys from theme.colors
      tomato: { backgroundColor: "$tomato6" },
      red: { backgroundColor: "$red6" },
      crimson: { backgroundColor: "$crimson6" },
      pink: { backgroundColor: "$pink6" },
      plum: { backgroundColor: "$plum6" },
      purple: { backgroundColor: "$purple6" },
      violet: { backgroundColor: "$violet6" },
      indigo: { backgroundColor: "$indigo6" },
      blue: { backgroundColor: "$blue6" },
      cyan: { backgroundColor: "$cyan6" },
      teal: { backgroundColor: "$teal6" },
      green: { backgroundColor: "$green6" },
      grass: { backgroundColor: "$grass6" },
      brown: { backgroundColor: "$brown6" },
      orange: { backgroundColor: "$orange6" },
      sky: { backgroundColor: "$sky6" },
      mint: { backgroundColor: "$mint6" },
      lime: { backgroundColor: "$lime6" },
      yellow: { backgroundColor: "$yellow6" },
      amber: { backgroundColor: "$amber6" },
      gold: { backgroundColor: "$gold6" },
      bronze: { backgroundColor: "$bronze6" },
      gray: { backgroundColor: "$gray6" },
      mauve: { backgroundColor: "$mauve6" },
      slate: { backgroundColor: "$slate6" },
      sage: { backgroundColor: "$sage6" },
      olive: { backgroundColor: "$olive6" },
      sand: { backgroundColor: "$sand6" },
    },
  },
  defaultVariants: {
    tone: "violet",
  },
});

export type Card = Stitches.VariantProps<typeof Card>;

export default Card;

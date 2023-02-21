import { sprinkles } from "./../styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { allTones } from "src/constants";
import { theme } from "src/styles/theme.css";
import { violet, blackA, mauve, green } from "@radix-ui/colors";

export const rootStyle = style({});
export const triggerStyle = style({});
export const overlayStyle = style({
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
});

export const contentStyle = style([
  sprinkles({
    backgroundColor: "baseBackground",
    borderRadius: "2xl",
    boxShadow: "lg",
  }),
  {
    zIndex: 30,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    maxWidth: "650px",
    // maxHeight: "85vh",
    overflow: "hidden",
    ":focus": { outline: "none" },
  },
]);
export const contentWrapperStyle = style([
  sprinkles({
    padding: "6",
  }),
  {
    position: "relative",
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
    width: "100%",
    minWidth: "100%",
    maxHeight: "85vh",
    overflowY: "auto",
    ":focus": { outline: "none" },
    // "::-webkit-scrollbar": {
    //   width: "6px",
    // },
    // "::-webkit-scrollbar-track": {
    //   background: "rgba(0, 0, 0, 0)",
    //   // opacity: 0.2,
    //   borderRadius: "5px",
    // },

    // /* Handle */
    // "::-webkit-scrollbar-thumb": {
    //   background: "rgba(255, 255, 255, 0.5)",
    //   // opacity: 0.5,
    //   borderRadius: "5px",
    // },
  },
]);

export const closePositionStyle = style([
  sprinkles({
    position: "absolute",
    top: "2",
    right: "2",
  }),
  {
    zIndex: "32",
  },
]);

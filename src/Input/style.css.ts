import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, theme } from "../styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { allTones } from "../constants";

export const baseInputStyle = sprinkles({
  fontFamily: "body",
  borderRadius: "md",
  fontWeight: "normal",
});

export const outerStatusClass = style({
  // border: "1px solid",
  // outlineWidth: "1px",
  selectors: {
    ".disabled &": {
      cursor: "not-allowed",
      opacity: 0.65,
    },
    ".invalid  &": {
      borderColor: theme.colors["yellow" + "3"],
      backgroundColor: theme.colors["yellow" + "3"],

      // outlineWidth: "0px",
      // border: "0px solid",
      boxShadow: `0 0 0 3px ${theme.colors["yellow" + "7"]}`,
    },
    ".invalid  &:focus-within": {
      outlineColor: theme.colors["yellow8"],
      borderColor: theme.colors["yellow" + "8"],
    },
    ".error  &": {
      borderColor: theme.colors["red" + "3"],
      backgroundColor: theme.colors["red" + "3"],

      // outlineWidth: "0px",
      // border: "0px solid",
      boxShadow: `0 0 0 3px ${theme.colors["red" + "7"]}`,
    },
    ".error  &:focus-within": {
      outlineColor: theme.colors["red"],
      borderColor: theme.colors["red" + "8"],
    },
  },
  // ":hover": {},
  // ":focus-within": {
  //   borderColor: "red",
  // },
  // outlineColor: "red",
});

export const innerStatusClass = style({
  selectors: {
    ".disabled &": {
      cursor: "not-allowed",
      // opacity: 0.65,
      // borderColor: theme.colors["red" + "8"],
      // color: theme.colors["red" + "8"],
      // backgroundColor: "red",
    },
    ".invalid &": {
      // borderColor: theme.colors["orange" + "8"],
      // color: theme.colors["orange" + "8"],
      // backgroundColor: "orange",
    },
  },
  // cursor: "not-allowed",
  // opacity: 0.65,
  // border: "1px solid",
  // outlineWidth: "1px",
  // selectors: {
  //   ".invalid > &": {
  //     borderColor: theme.colors["orange" + "8"],
  //     color: theme.colors["orange" + "8"],
  //     backgroundColor: "orange",
  //   },
  // },
  // ":hover": {},
  // ":focus-within": {
  //   borderColor: "orange",
  // },
  // outlineColor: "orange",
});

// // Add some paddings if leftIcon and rightIcon are present
// export const inputPaddingX = styleVariants({
//   sm: {
//     paddingLeft: theme.spacing[2],
//     paddingRight: theme.spacing[2],
//     gap: theme.spacing[1],
//   },
//   md: {
//     paddingLeft: theme.spacing[2],
//     paddingRight: theme.spacing[2],
//     gap: theme.spacing[1],
//   },
//   lg: {
//     paddingLeft: theme.spacing[3],
//     paddingRight: theme.spacing[3],
//     gap: theme.spacing[2],
//   },
//   zero: {
//     paddingLeft: 0,
//     paddingRight: 0,
//   },
// });

export const inputIcon = styleVariants({
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: "0",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export const inputStyle = recipe({
  base: [
    baseInputStyle,
    {
      width: "100%",
      border: "1px solid",
      // ":focus-within": {
      //   outlineStyle: "solid",
      //   outlineWidth: "1px",
      //   border: "1px solid",
      // },
    },
  ],
  variants: {
    size: {
      sm: {
        fontSize: theme.fontSize.xs,
        borderRadius: theme.radii["lg"],
        height: theme.spacing[7],
        paddingLeft: theme.spacing[1],
        paddingRight: theme.spacing[1],
      },
      md: {
        fontSize: theme.fontSize.sm,

        borderRadius: theme.radii["lg"],

        height: theme.spacing[8],
        paddingLeft: theme.spacing[2],
        paddingRight: theme.spacing[2],
      },
      lg: {
        fontSize: theme.fontSize.base,

        borderRadius: theme.radii["xl"],

        height: theme.spacing[11],
        paddingLeft: theme.spacing[3],
        paddingRight: theme.spacing[3],
      },
    },
    // status: {
    //   invalid: {},
    //   disabled: {
    //     cursor: "not-allowed",
    //     opacity: 0.65,
    //     border: "1px solid",
    //     outlineWidth: "1px",
    //     outlineColor: theme.colors["red" + "8"],
    //     borderColor: theme.colors["red" + "8"],
    //     color: theme.colors["red" + "8"],
    //   },
    //   default: {},
    // },
  },
  defaultVariants: {
    size: "md",
    // status: "default",
  },
});

export const invisibleInput = styleVariants({
  sm: {
    borderRadius: theme.radii["lg"],

    width: "1fr",
    flexGrow: 1,
    ":disabled": {
      cursor: "not-allowed",
    },
    selectors: {
      "&[type]": {
        fontSize: theme.fontSize.sm,
        outline: "none",
        border: "none",
      },
    },
  },
  md: {
    borderRadius: theme.radii["lg"],

    width: "1fr",
    flexGrow: 1,
    ":disabled": {
      cursor: "not-allowed",
    },
    selectors: {
      "&[type]": {
        fontSize: theme.fontSize.base,
        outline: "none",
        border: "none",
      },
    },
  },
  lg: {
    borderRadius: theme.radii["xl"],

    width: "1fr",
    flexGrow: 1,
    ":disabled": {
      cursor: "not-allowed",
    },
    selectors: {
      "&[type]": {
        fontSize: theme.fontSize.lg,
        outline: "none",
        border: "none",
      },
    },
  },
});

// inputToneVariants[tone]
// controls the outer border input look-a-like
export const inputToneVariants = styleVariants(allTones, (tone) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      borderColor: theme.colors[tone + "7"],
      backgroundColor: theme.colors[tone + "1"],
      ":hover": {},
      ":focus-within": {
        borderColor: theme.colors[tone + "8"],
      },
      outlineColor: theme.colors[tone + "8"],
      color: theme.colors[tone + "8"],
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale seriesf
    return {
      borderColor: theme.colors[tone + "9"],

      backgroundColor: theme.colors[tone + "1"],
      ":hover": {},
      ":focus-within": {
        borderColor: theme.colors[tone + "10"],
      },
      outlineColor: theme.colors[tone + "10"],

      color: theme.colors[tone + "9"],
    };
  } else {
    // color bg

    return {
      borderColor: theme.colors[tone + "7"],
      backgroundColor: theme.colors[tone + "1"],
      ":hover": {},
      ":focus-within": {
        borderColor: theme.colors[tone + "8"],
      },
      outlineColor: theme.colors[tone + "8"],

      color: theme.colors[tone + "8"],
    };
  }
});

// inputTextVariants[tone]
// controls the look of invisible input
export const inputTextVariants = styleVariants(allTones, (tone) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      background: "transparent",
      color: theme.colors[tone + "12"],
      "::placeholder": {
        color: theme.colors[tone + "8"],
      },
      ":invalid": {
        color: theme.colors["red" + "8"],
      },
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale seriesf
    return {
      background: "transparent",

      color: theme.colors[tone + "12"],
      "::placeholder": {
        color: theme.colors[tone + "8"],
      },
    };
  } else {
    // color bg

    return {
      background: "transparent",

      color: theme.colors[tone + "12"],
      "::placeholder": {
        color: theme.colors[tone + "7"],
      },
    };
  }
});

export type InputStyleVariants = RecipeVariants<typeof inputStyle>;

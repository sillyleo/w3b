import { styleVariants } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "../../src/styles/theme.css";
import { allTones } from "./../constants";

export const buttonStyle = recipe({
  base: {
    fontFamily: theme.fontFamily.heading,
    fontWeight: "bold",
    cursor: "pointer",
    display: "inline-flex",
    gap: theme.spacing[2],
    padding: 0,
    alignItems: "center",
    fontSize: theme.fontSize["base"],
    lineHeight: 1,
    border: "none",
    position: "relative",
    transition: "all 0.2s",
    // ":before": {
    //   filter:
    //     "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='b' x='0' y='0'%3E%3CfeFlood x='4' y='4' height='2' width='2'/%3E%3CfeComposite width='10' height='10'/%3E%3CfeTile result='a'/%3E%3CfeComposite in='SourceGraphic' in2='a' operator='in'/%3E%3CfeMorphology operator='dilate' radius='5'/%3E%3C/filter%3E%3C/svg%3E#b\")",
    //   background: "red",
    //   position: "absolute",
    //   content: "''",
    //   top: 0,
    //   left: -2,
    //   right: -2,
    //   bottom: -3,
    //   zIndex: 1,
    // },
    ":disabled": {
      cursor: "not-allowed",
      opacity: 0.75,
    },
    ":active": {
      transform: "translateY(1px) scale(0.98)",
    },
  },
  variants: {
    size: {
      sm: {
        borderRadius: theme.radii["lg"],
        fontSize: theme.fontSize["xs"],
        height: theme.spacing[7],
        paddingLeft: theme.spacing[3],
        paddingRight: theme.spacing[3],
      },
      md: {
        borderRadius: theme.radii["lg"],
        fontSize: theme.fontSize["sm"],
        height: theme.spacing[8],
        paddingLeft: theme.spacing[4],
        paddingRight: theme.spacing[4],
      },
      lg: {
        borderRadius: theme.radii["xl"],
        fontSize: theme.fontSize["base"],
        height: theme.spacing[11],
        paddingLeft: theme.spacing[5],
        paddingRight: theme.spacing[5],
      },
    },

    gradient: {
      true: {
        ":before": {
          position: "absolute",
          overflow: "hidden",
          content: "''",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 100%)",
          backdropFilter: "saturate(120%)",
          // backgroundSize: "200% auto",
          mixBlendMode: "overlay",
        },
        selectors: {
          "&:hover:before": {
            backgroundImage:
              "linear-gradient(360deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,1) 100%)",
          },
        },
      },
    },
    align: {
      left: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      right: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "sm",
        gradient: true,
      },
      style: {
        ":before": {
          borderRadius: theme.radii["lg"],
        },
      },
    },
    {
      variants: {
        size: "md",
        gradient: true,
      },
      style: {
        ":before": {
          borderRadius: theme.radii["lg"],
        },
      },
    },
    {
      variants: {
        size: "lg",
        gradient: true,
      },
      style: {
        ":before": {
          borderRadius: theme.radii["xl"],
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    align: "center",
  },
});

// Export type
export type ButtonVariants = RecipeVariants<typeof buttonStyle>;

// Genertate tone and intent variants with code, using style variants

// primaryClass[tone]
export const primaryClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      backgroundColor: theme.colors[tone + "9"],
      ":hover": {
        backgroundColor: theme.colors[tone + "10"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "11"],
      },
      color: theme.colors[tone + "12"],
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone + "12"],
      ":hover": {
        backgroundColor: theme.colors[tone + "12"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "11"],
      },
      color: theme.colors[tone + "2"],
    };
  } else {
    // color bg + white text

    return {
      backgroundColor: theme.colors[tone + "9"],
      ":hover": {
        backgroundColor: theme.colors[tone + "10"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "11"],
      },
      color: theme.colors.white,
    };
  }
});

// secondaryClass[tone]
export const secondaryClass = styleVariants(allTones, (tone: keyof Colors) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      backgroundColor: theme.colors[tone + "4"],
      ":hover": {
        backgroundColor: theme.colors[tone + "5"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "6"],
      },
      color: theme.colors[tone + "11"],
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone + "4"],
      ":hover": {
        backgroundColor: theme.colors[tone + "5"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "6"],
      },
      color: theme.colors[tone + "12"],
    };
  } else {
    // color bg

    return {
      backgroundColor: theme.colors[tone + "4"],
      ":hover": {
        backgroundColor: theme.colors[tone + "5"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "6"],
      },
      color: theme.colors[tone + "11"],
    };
  }
});
// tertiaryClass[tone]
export const ghostClass = styleVariants(allTones, (tone: keyof Colors) => {
  if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    return {
      // grayscale series

      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: theme.colors[tone + "3"],
        color: theme.colors[tone + "12"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "4"],
      },

      color: theme.colors[tone + "11"],
    };
  } else {
    return {
      backgroundColor: "transparent",
      ":hover": {
        color: theme.colors[tone + "12"],
        backgroundColor: theme.colors[tone + "3"],
      },
      ":active": {
        backgroundColor: theme.colors[tone + "4"],
      },
      color: theme.colors[tone + "11"],
    };
  }
});

// Ref: https://www.joshwcomeau.com/shadow-palette/

export const smPrimaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: `
      0px 0.2px 0.2px ${theme.colors[tone + "7"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "7"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "7"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "7"]}
    `,
  };
});

export const mdPrimaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: `
      0px 0.2px 0.2px ${theme.colors[tone + "5"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "5"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "5"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "5"]}
    `,
  };
});

export const lgPrimaryShadowClass = styleVariants(allTones, (tone) => {
  return {
    boxShadow: `
    0px 0.1px 0.1px ${theme.colors[tone + "5"]},
    0px 0.7px 0.8px -0.4px ${theme.colors[tone + "5"]},
    -0.1px 1.3px 1.5px -0.7px ${theme.colors[tone + "5"]},
    -0.1px 2.2px 2.5px -1.1px ${theme.colors[tone + "5"]},
    -0.2px 3.4px 3.8px -1.4px ${theme.colors[tone + "5"]},
    -0.3px 5.4px 6.1px -1.8px ${theme.colors[tone + "5"]},
    -0.4px 8.2px 9.2px -2.1px ${theme.colors[tone + "5"]},
    -0.6px 12.1px 13.6px -2.5px ${theme.colors[tone + "5"]};
      `,
  };
});

export const smSecondaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: `
      0px 0.2px 0.2px ${theme.colors[tone + "5"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "5"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "5"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "5"]}
    `,
  };
});

export const mdSecondaryShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: `
      0px 0.2px 0.2px ${theme.colors[tone + "4"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "4"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "4"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "4"]}
    `,
  };
});

export const lgSecondaryShadowClass = styleVariants(allTones, (tone) => {
  return {
    boxShadow: `
    0px 0.1px 0.1px ${theme.colors[tone + "3"]},
    0px 0.7px 0.8px -0.4px ${theme.colors[tone + "3"]},
    -0.1px 1.3px 1.5px -0.7px ${theme.colors[tone + "3"]},
    -0.1px 2.2px 2.5px -1.1px ${theme.colors[tone + "3"]},
    -0.2px 3.4px 3.8px -1.4px ${theme.colors[tone + "3"]},
    -0.3px 5.4px 6.1px -1.8px ${theme.colors[tone + "3"]},
    -0.4px 8.2px 9.2px -2.1px ${theme.colors[tone + "3"]},
    -0.6px 12.1px 13.6px -2.5px ${theme.colors[tone + "3"]}
      `,
  };
});

export const smGhostShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: `
      0px 0.2px 0.2px ${theme.colors[tone + "4"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "4"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "4"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "4"]}
    `,
  };
});

export const mdGhostShadowClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  return {
    boxShadow: `
      0px 0.2px 0.2px ${theme.colors[tone + "4"]},
      0px 0.8px 0.9px -0.8px ${theme.colors[tone + "4"]},
      -0.1px 2px 2.3px -1.7px ${theme.colors[tone + "4"]},
      -0.1px 4.8px 5.4px -2.5px ${theme.colors[tone + "4"]}
    `,
  };
});

export const lgGhostShadowClass = styleVariants(allTones, (tone) => {
  return {
    boxShadow: `
    0px 0.1px 0.1px ${theme.colors[tone + "4"]},
    0px 0.7px 0.8px -0.4px ${theme.colors[tone + "4"]},
    -0.1px 1.3px 1.5px -0.7px ${theme.colors[tone + "4"]},
    -0.1px 2.2px 2.5px -1.1px ${theme.colors[tone + "4"]},
    -0.2px 3.4px 3.8px -1.4px ${theme.colors[tone + "4"]},
    -0.3px 5.4px 6.1px -1.8px ${theme.colors[tone + "4"]},
    -0.4px 8.2px 9.2px -2.1px ${theme.colors[tone + "4"]},
    -0.6px 12.1px 13.6px -2.5px ${theme.colors[tone + "4"]};
      `,
  };
});

import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";
import { allTones } from "src/constants";
import { theme, sprinkles, darkTheme } from "../styles/theme.css";

export const listStyle = recipe({
  variants: {
    size: {
      sm: {
        borderRadius: theme.radii["lg"],
        padding: "2px",
      },
      md: {
        borderRadius: theme.radii["lg"],
        padding: "3px",
      },
      lg: {
        borderRadius: theme.radii["xl"],
        padding: theme.spacing[2],
      },
    },
  },
});
export type listVariant = RecipeVariants<typeof listStyle>;

export const itemStyle = style({});

export const panelStyle = style({});

export const triggerStyle = recipe({
  base: [
    {},
    sprinkles({
      transition: "slow",
      fontWeight: "normal",
      fontFamily: "heading",
      cursor: "pointer",
      display: "inline-flex",
      gap: "2",
      p: "0",
      alignItems: "center",
      fontSize: "base",
      lineHeight: "single",
      border: "0",
      position: "relative",
      borderRadius: "lg",
    }),
  ],
  variants: {
    size: {
      sm: {
        fontSize: theme.fontSize["xs"],
        height: theme.spacing[7],
        paddingLeft: theme.spacing[3],
        paddingRight: theme.spacing[3],
      },
      md: {
        fontSize: theme.fontSize["sm"],
        height: theme.spacing[8],
        paddingLeft: theme.spacing[4],
        paddingRight: theme.spacing[4],
      },
      lg: {
        fontSize: theme.fontSize["base"],
        height: theme.spacing[11],
        paddingLeft: theme.spacing[5],
        paddingRight: theme.spacing[5],
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

// triggerShadowTone[tone]

export const triggerShadowTone = styleVariants(
  allTones,
  (tone: keyof Colors) => {
    return {
      selectors: {
        [`:not(${darkTheme}) > [data-state=active]&`]: {
          boxShadow: `
        0 3px 10px -4px ${theme.colors[tone + "8"]}`,
          // border: "4px solid red",
        },
      },
    };
  }
);

// triggerTone[tone]
export const triggerTone = styleVariants(allTones, (tone: keyof Colors) => {
  // color bg + black text
  if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      selectors: {
        [`[data-state=active]&`]: {
          backgroundColor: theme.colors.background,
          color: theme.colors[tone + "11"],
        },
      },

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
    // grayscale series
    return {
      selectors: {
        [`[data-state=active]&`]: {
          backgroundColor: theme.colors.background,
          color: theme.colors[tone + "11"],
        },
      },

      color: theme.colors[tone + "8"],
    };
  } else {
    // color bg

    return {
      selectors: {
        [`[data-state=active]&`]: {
          backgroundColor: theme.colors.background,
          color: theme.colors[tone + "11"],
        },
      },

      color: theme.colors[tone + "8"],
    };
  }
});

// triggerTone[tone]
export const listTone = styleVariants(allTones, (tone: keyof Colors) => {
  return {
    backgroundColor: theme.colors[tone + "3"],
  };
});

// Export type
export type triggerVariants = RecipeVariants<typeof triggerStyle>;

export const contentStyle = style({});

export const rootStyle = style({});

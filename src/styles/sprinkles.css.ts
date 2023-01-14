// This is for sprinkle styles so we all use token styles
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import figmaTokens from "../../tokens/theme.json";
import { colors } from "./colors.css";

// Spacing

const space = {
  ...figmaTokens.spacing,
};

const spacingProperties = defineProperties({
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
});

// Colors (get from themes for auto switching)
// TODO: add sementic colors to the theme from Figma
// accentColors from accent1 to 12

// export const accentVar = createVar();

// export const accentColors = style({
//   vars: {
//     [accentVar]: "blue",
//     color: accentVar,
//   },
// });
// accent1: figmaTokens.colors.tomato[1],
// accent2: figmaTokens.colors.tomato[2],
// accent3: figmaTokens.colors.tomato[3],
// accent4: figmaTokens.colors.tomato[4],
// accent5: figmaTokens.colors.tomato[5],
// accent6: figmaTokens.colors.tomato[6],
// accent7: figmaTokens.colors.tomato[7],
// accent8: figmaTokens.colors.tomato[8],
// accent9: figmaTokens.colors.tomato[9],
// accent10: figmaTokens.colors.tomato[10],
// accent11: figmaTokens.colors.tomato[11],
// accent12: figmaTokens.colors.tomato[12],

const colorProperties = defineProperties({
  properties: {
    color: {
      ...colors,
    },
    backgroundColor: {
      ...colors,
    },
    background: {
      ...colors,
    },
    // etc.
  },
});

// BorderRadius

const borderRadius = {
  ...figmaTokens.borderRadius,
};

const borderRadiusProperties = defineProperties({
  properties: {
    borderRadius: borderRadius,
  },
});

export const sprinkles = createSprinkles(
  spacingProperties,
  colorProperties,
  borderRadiusProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];

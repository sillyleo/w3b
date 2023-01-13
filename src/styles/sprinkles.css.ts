// sprinkles.css.ts
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import figmaTokens from "../../tokens/theme.json";
import { vars } from "./theme.css";

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
const colorProperties = defineProperties({
  properties: {
    color: { ...vars.colors },
    backgroundColor: { ...vars.colors },
    background: { ...vars.colors },
    // background: vars.colors,
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

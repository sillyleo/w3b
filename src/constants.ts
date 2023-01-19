import { macaron$ } from "@macaron-css/core";
import figmaTokens from "./theme.json";

// export keys of colors as string
// eg. "blue" | "red" | "green"

//  all colors as allTones from figmaTokens.colors
// eg. {blue: "blue", red: "red", green: "green"}
export const allTones = macaron$(() =>
  Object.keys(figmaTokens.colors).reduce((acc, key) => {
    acc[key] = key;
    return acc;
  }, {})
);

export type Tone = typeof allTones;

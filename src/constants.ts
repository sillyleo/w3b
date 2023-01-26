import figmaTokens from "./theme.json";

//  all colors as allTones from figmaTokens.colors
// eg. {blue: "blue", red: "red", green: "green"}
export const allTones = Object.keys(figmaTokens.colors).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

// Dummy class name

const dummy = {};
export const toneVariants = {
  accent: dummy,
  amber: dummy,
  blue: dummy,
  bronze: dummy,
  brown: dummy,
  crimson: dummy,
  cyan: dummy,
  gold: dummy,
  grass: dummy,
  gray: dummy,
  green: dummy,
  indigo: dummy,
  lime: dummy,
  mauve: dummy,
  mint: dummy,
  olive: dummy,
  orange: dummy,
  pink: dummy,
  plum: dummy,
  purple: dummy,
  red: dummy,
  sage: dummy,
  sand: dummy,
  sky: dummy,
  slate: dummy,
  teal: dummy,

  tomato: dummy,
  violet: dummy,
  yellow: dummy,
};

// Compose buttonStyle with cva

export const intentVariants = {
  primary: dummy,
  secondary: dummy,
  ghost: dummy,
};

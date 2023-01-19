import figmaTokens from './theme.json';

//  all colors as allTones from figmaTokens.colors
// eg. {blue: "blue", red: "red", green: "green"}
export const allTones = Object.keys(figmaTokens.colors).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});


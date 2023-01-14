import figmaTokens from '../tokens/theme.json'
import { createGlobalThemeContract, createTheme, createThemeContract } from '@macaron-css/core';



const theme = createThemeContract({
  ...figmaTokens.colors,
  ...figmaTokens.base
});

export const lightTheme = createTheme(theme, {
    ...figmaTokens.light,
    ...figmaTokens.base
});

export const darkTheme = createTheme(theme, {
    ...figmaTokens.dark,
    ...figmaTokens.base
});

export const colors = {
  // ...root,
  ...theme,
};

import { createGlobalTheme } from '@macaron-css/core';
import figmaTokens from '../tokens/theme.json'
export const colorTheme = createGlobalTheme(':root', {
  color: {
    brand: 'blue',
    tomato: {1: 'red'},
  },
  font: {
    body: 'arial',
  },
});


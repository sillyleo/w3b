import { theme, lightColors, darkColors } from '~/theme';
import typography from '@tailwindcss/typography';
import figmaTokens from '~/tokens/theme.json';
import themeSwapper from 'tailwindcss-theme-swapper';
const config = {
  theme,
  plugins: [
    typography,
    themeSwapper({
      themes: [
        { name: 'base', selectors: [':root'], theme: lightColors },
        { name: 'dark', selectors: ['dark'], theme: darkColors },
      ],
    }),
  ],
};

export default config;

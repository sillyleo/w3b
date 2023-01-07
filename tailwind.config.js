import { theme } from '~/theme';
import typography from '@tailwindcss/typography';
import { createThemes } from 'tw-colors';
import figmaTokens from '~/tokens/theme.json';

const config = {
  theme: {
    colors: figmaTokens.colors,
    ...theme,
  },
  plugins: [
    typography,
    createThemes({
      light: {
        primary: 'green',
      },
      dark: {
        primary: 'red',
      },
    }),
  ],
};

export default config;

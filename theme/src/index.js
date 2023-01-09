import figmaTokens from '~/tokens/theme.json';

const fontSize = Object.keys(figmaTokens.fontSizes).reduce((acc, key) => {
  acc[key] = `${figmaTokens.fontSizes[key]}px`;
  return acc;
}, {});

export const lightColors = {
  colors: figmaTokens.light,
};
export const darkColors = {
  colors: figmaTokens.light,
};

export const theme = {
  fontFamily: {
    heading: [figmaTokens.fontFamilies['heading'], 'sans-serif'],
    body: [
      figmaTokens.fontFamilies['body'],
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    mono: [
      'Sk-Modernist-Mono',
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
  },
  colors: figmaTokens.colors,
};

// all options here: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

import figmaTokens from '~/tokens/theme.json';
// 1. import fontSized from theme.json
// 2. map to tailwind fontSize
// 3. export fontSize

const fontSize = Object.keys(figmaTokens.fontSizes).reduce((acc, key) => {
  acc[key] = `${figmaTokens.fontSizes[key]}px`;
  return acc;
}, {});

console.log(fontSize);

// const fontSize = Object.keys(figmaTokens.fontSizes).reduce((acc, key) => {
//   acc[key] = `${figmaTokens.fontSizes[key]}px`;
//   return acc;
// }, {});

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
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    heading: '110%',
    body: '140%',
  },
  extend: {},
};

// all options here: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

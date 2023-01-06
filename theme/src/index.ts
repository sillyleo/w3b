import figmaTokens from '~/tokens/theme.json';

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
  fontSize: {
    xs: '0.75rem',
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  },
  extend: {},
};

// all options here: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

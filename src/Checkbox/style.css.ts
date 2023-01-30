import { style, styleVariants } from '@vanilla-extract/css';
import { sprinkles, theme } from '../styles/theme.css';
import { allTones } from '../constants';

export const checkboxLabel = style({
  lineHeight: 1,
  height: '1em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4em',
  userSelect: 'none'

});


// checkboxRoot

export const checkboxRoot = style({
  aspectRatio: '1',
  height: '120%',
  flexShrink: 1,
  borderRadius: '25%',
  justifyContent: 'center',
  padding: '1px',
  border: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'all 0.2s',
  selectors: {
    [`&[data-disabled]`]: {
      cursor: 'not-allowed',
      opacity: 0.65
    }


  }
  // ':focus': {
  // },
  // ':active': {
  //   boxShadow: '0 0 0 2px black',
  //   transform: 'scale(0.9)'
  // }

});

// checkboxRootTone[tone]
export const checkboxRootTone = styleVariants(allTones, (tone: keyof Colors) => {
  // color bg + black text
  if (
    tone === 'sky' ||
    tone === 'mint' ||
    tone === 'lime' ||
    tone === 'yellow' ||
    tone === 'amber'
  ) {
    return {
      backgroundColor: theme.colors[tone + '4'],
      boxShadow: `0 0 0 1px ${theme.colors[tone + '7']}`,
      ':hover': {
        backgroundColor: theme.colors[tone + '5'],
        boxShadow: `0 0 0 1px ${theme.colors[tone + '8']}`

      },
      ':active': {
        backgroundColor: theme.colors[tone + '6']
      },
      color: theme.colors[tone + '11']
    };
  } else if (
    tone === 'gray' ||
    tone === 'mauve' ||
    tone === 'slate' ||
    tone === 'sage' ||
    tone === 'olive' ||
    tone === 'sand'
  ) {
    // grayscale series
    return {
      backgroundColor: theme.colors[tone + '5'],
      boxShadow: `0 0 0 1px ${theme.colors[tone + '8']}`,

      ':hover': {
        backgroundColor: theme.colors[tone + '7'],
        boxShadow: `0 0 0 1px ${theme.colors[tone + '9']}`

      },
      ':active': {
        backgroundColor: theme.colors[tone + '8']
      },
      color: theme.colors[tone + '12']
    };
  } else {
    // color bg

    return {
      backgroundColor: theme.colors[tone + '4'],
      boxShadow: `0 0 0 1px ${theme.colors[tone + '7']}`,

      ':hover': {
        backgroundColor: theme.colors[tone + '5'],
        boxShadow: `0 0 0 1px ${theme.colors[tone + '8']}`

      },
      ':active': {
        backgroundColor: theme.colors[tone + '6']
      },
      color: theme.colors[tone + '11']
    };
  }
});

export const checkboxIndicator = style({
  aspectRatio: '1',
  padding: 0,
  height: '100%',
  transitionDelay: '250ms',
  transform: 'scale(0)',
  selectors: {
    [`${checkboxRoot}[data-state=checked] &`]: {
      transform: 'scale(1)'
    },
    [`${checkboxRoot}[data-state=unchecked] &`]: {
      transform: 'scale(0)'
    }
  }
});


export const checkboxIcon = style({
  width: '100%',
  height: '100%'
});



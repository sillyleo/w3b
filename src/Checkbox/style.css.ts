import { style, styleVariants } from '@vanilla-extract/css';
import { sprinkles, theme } from '../styles/theme.css';
import { allTones } from '../constants';


export const checkboxBase = style({
  lineHeight: 1,
  height: '1em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4em',
  userSelect: 'none'
});

export const checkboxLabel = styleVariants({

  enabled: [checkboxBase, {
    cursor: 'pointer'
  }],
  disabled: [checkboxBase, {
    cursor: 'not-allowed'
  }]

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



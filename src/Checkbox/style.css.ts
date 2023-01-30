import { style, styleVariants } from '@vanilla-extract/css';
import { sprinkles, theme } from '../styles/theme.css';

export const checkboxLabel = style({
  lineHeight: 1,
  height: '1em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4em'

});


export const checkboxRoot = style({
  backgroundColor: 'gray',
  aspectRatio: '1',
  height: '120%',
  flexShrink: 1,
  borderRadius: '25%',
  justifyContent: 'center',
  padding: '1px',
  border: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'all 0.2s ease-in-out',
  ':focus': {
    // boxShadow: '0 0 0 2px black'
  },
  ':active': {
    boxShadow: '0 0 0 2px black',
    transform: 'scale(0.9)'

  },
  ':hover': {
    backgroundColor: 'black'
  },
  selectors: {
    ['&[data-state=checked]']: {
      backgroundColor: 'green'

    }
  }
});


export const checkboxIndicator = style({
  aspectRatio: '1',
  color: 'white',
  padding: 0,
  height: '100%',
  selectors: {
    ['[data-state=checked] &']: {
      color: 'red'
    }
  }
});


export const checkboxIcon = style({
  width: '100%',
  height: '100%'
});



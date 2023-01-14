import { styled } from '@macaron-css/react'
import { colorTheme } from '../theme';

const Button = styled('button', {

  base: {
    backgroundColor: colorTheme.color.brand,
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    ':hover': {
      backgroundColor: 'lightgray',
    },
  },
  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        ':hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: colorTheme.color.tomato['1'],
        ':hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
  defaultVariants: {
    color: 'gray',
  },

});

export default Button;

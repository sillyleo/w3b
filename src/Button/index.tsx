import { styled } from '@macaron-css/react'
import { colors } from '../theme';

const Button = styled('button', {

  base: {
    backgroundColor: colors.orange["9"],
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
        // backgroundColor: colors.tomato["6"],
        color: 'white',
        ':hover': {
          backgroundColor: 'blue',
        },
      },
      gray: {
        // backgroundColor: colors.colors.slate["6"],
        ':hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
  defaultVariants: {
    color: 'violet',
  },

});

export default Button;

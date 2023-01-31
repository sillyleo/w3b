import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles, theme } from '../styles/theme.css';
import { styleVariants } from '@vanilla-extract/css';
import { allTones } from '../constants';


export const baseInputStyle = sprinkles({
  fontFamily: 'heading',
  borderRadius: 'md'
});
export const inputStyle = recipe({
  base: [baseInputStyle, {
    border: '1px solid',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed'
      }
    }
  }],
  variants: {
    size: {
      sm: {
        borderRadius: theme.radii['lg'],

        height: theme.spacing[7],
        paddingLeft: theme.spacing[3],
        paddingRight: theme.spacing[3],
        selectors: {
          '&[type]': {
            fontSize: theme.fontSize.sm
          }
        }
      }
      ,
      md: {
        borderRadius: theme.radii['lg'],

        height: theme.spacing[8],
        paddingLeft: theme.spacing[3],
        paddingRight: theme.spacing[3],
        selectors: {
          '&[type]': {
            fontSize: theme.fontSize.base
          }
        }
      },
      lg: {
        borderRadius: theme.radii['xl'],

        height: theme.spacing[11],
        paddingLeft: theme.spacing[4],
        paddingRight: theme.spacing[4],
        selectors: {
          '&[type]': {
            fontSize: theme.fontSize.lg
          }
        }
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});


// inputToneVariants[tone]
export const inputToneVariants = styleVariants(allTones, (tone) => {
  // color bg + black text
  if (
    tone === 'sky' ||
    tone === 'mint' ||
    tone === 'lime' ||
    tone === 'yellow' ||
    tone === 'amber'
  ) {
    return {
      borderColor: theme.colors[tone + '7'],
      backgroundColor: theme.colors[tone + '1'],
      ':hover': {},
      ':active': {
        borderColor: theme.colors[tone + '8']

      },
      outlineColor: theme.colors[tone + '8'],
      color: theme.colors[tone + '11'],
      '::placeholder': {
        color: theme.colors[tone + '8']
      }
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
      borderColor: theme.colors[tone + '9'],

      backgroundColor: theme.colors[tone + '1'],
      ':hover': {},
      ':active': {
        borderColor: theme.colors[tone + '10']

      },
      outlineColor: theme.colors[tone + '10'],

      color: theme.colors[tone + '12'],
      '::placeholder': {
        color: theme.colors[tone + '8']
      }
    };
  } else {
    // color bg

    return {
      borderColor: theme.colors[tone + '7'],
      backgroundColor: theme.colors[tone + '1'],
      ':hover': {},
      ':active': {
        borderColor: theme.colors[tone + '8']

      },
      outlineColor: theme.colors[tone + '8'],

      color: theme.colors[tone + '11'],
      '::placeholder': {
        color: theme.colors[tone + '8']
      }
    };
  }

});


export type InputStyleVariants = RecipeVariants<typeof inputStyle>;

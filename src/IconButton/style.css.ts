import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { theme } from '../styles/theme.css';
import { styleVariants } from '@vanilla-extract/css';


// Add some paddings if leftIcon and rightIcon are present
export const iconPaddingX = styleVariants({
  sm: {
    paddingLeft: theme.spacing[2],
    paddingRight: theme.spacing[2],
    gap: theme.spacing[1]
  },
  md: {

    paddingLeft: theme.spacing[2],
    paddingRight: theme.spacing[2],
    gap: theme.spacing[1]
  },
  lg: {

    paddingLeft: theme.spacing[3],
    paddingRight: theme.spacing[3],
    gap: theme.spacing[2]

  },
  zero: {
    paddingLeft: 0,
    paddingRight: 0
  }
});
export const iconButtonStyle = recipe({
  base: {
    fontFamily: theme.fontFamily.heading,
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    gap: theme.spacing[0],
    // padding: 0,
    alignItems: 'center',
    fontSize: theme.fontSize['base'],
    lineHeight: 1,
    border: 'none',
    position: 'relative',
    transition: 'all 0.2s',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.75
    },
    ':active': {
      transform: 'translateY(1px) scale(0.98)'
    }
  },
  variants: {
    size: {
      sm: {
        borderRadius: theme.radii['lg'],
        fontSize: theme.fontSize['xs'],
        height: theme.spacing[7],
        minWidth: theme.spacing[7]
        // paddingLeft: theme.spacing[3],
        // paddingRight: theme.spacing[3]
      },
      md: {
        borderRadius: theme.radii['lg'],
        fontSize: theme.fontSize['sm'],
        height: theme.spacing[8],
        minWidth: theme.spacing[8]
        // paddingLeft: theme.spacing[4],
        // paddingRight: theme.spacing[4]
      },
      lg: {
        borderRadius: theme.radii['xl'],
        fontSize: theme.fontSize['base'],
        height: theme.spacing[11],
        minWidth: theme.spacing[11]
        // paddingLeft: theme.spacing[5],
        // paddingRight: theme.spacing[5]
      }
    },

    gradient: {
      true: {
        ':before': {
          position: 'absolute',
          overflow: 'hidden',
          content: '\'\'',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 100%)',
          backdropFilter: 'saturate(120%)',
          // backgroundSize: "200% auto",
          mixBlendMode: 'overlay'
        },
        selectors: {
          '&:hover:before': {
            backgroundImage:
              'linear-gradient(360deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,1) 100%)'
          }
        }
      }
    },
    align: {
      left: {
        justifyContent: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      right: {
        justifyContent: 'flex-end'
      },
      between: {
        justifyContent: 'space-between'
      },
      around: {
        justifyContent: 'space-around'
      }
    }
  },
  compoundVariants: [
    {
      variants: {
        size: 'sm',
        gradient: true
      },
      style: {
        ':before': {
          borderRadius: theme.radii['lg']
        }
      }
    },
    {
      variants: {
        size: 'md',
        gradient: true
      },
      style: {
        ':before': {
          borderRadius: theme.radii['lg']
        }
      }
    },
    {
      variants: {
        size: 'lg',
        gradient: true
      },
      style: {
        ':before': {
          borderRadius: theme.radii['xl']
        }
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    align: 'center'
  }
});

// Export type
export type IconButtonVariants = RecipeVariants<typeof iconButtonStyle>;

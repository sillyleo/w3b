import { style, styleVariants } from '@macaron-css/core';
import { variants } from 'classname-variants';
import { variantProps, VariantPropsOf } from 'classname-variants/react';
import React from 'react';
import { SkModernistBold, theme } from '../theme';

// Compose classnames with macaron

// Base style

const base = style({
  // font conbimation for skmondenist bold
  fontFamily: SkModernistBold + ',sans-serif',
  fontWeight: 500, // magic number for safari font rendering
  cursor: 'pointer',
  display: 'inline-flex',
  gap: theme.spacing[2],
  padding: 0,
  alignItems: 'center',
  borderRadius: theme.radii['xl'],
  fontSize: theme.fontSize['base'],
  lineHeight: 1,
  border: 'none',
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.75
  }
});

// Sizes

const sizeSm = style({
  borderRadius: theme.radii['lg'],
  fontSize: theme.fontSize['xs'],
  height: theme.spacing[7],
  paddingLeft: theme.spacing[3],
  paddingRight: theme.spacing[3]
});
const sizeMd = style({
  fontSize: theme.fontSize['sm'],
  height: theme.spacing[8],
  paddingLeft: theme.spacing[4],
  paddingRight: theme.spacing[4]
});
const sizeLg = style({
  fontSize: theme.fontSize['base'],
  height: theme.spacing[11],
  paddingLeft: theme.spacing[5],
  paddingRight: theme.spacing[5]
});

// Alignments

const alignLeft = style({
  justifyContent: 'flex-start'
});
const alignCenter = style({
  justifyContent: 'center'
});
const alignRight = style({
  justifyContent: 'flex-end'
});
const alignBetween = style({
  justifyContent: 'space-between'
});
const alignAround = style({
  justifyContent: 'space-around'
});

//  Dynamic tones and intents

const allTones = Object.keys(theme.colors).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

// primaryClass[tone]
const primaryClass = styleVariants(allTones, (tone) => {
  // color bg + black text
  if (
    tone === 'sky' ||
    tone === 'mint' ||
    tone === 'lime' ||
    tone === 'yellow' ||
    tone === 'amber'
  ) {
    return {
      backgroundColor: theme.colors[tone][9],
      ':hover': {
        backgroundColor: theme.colors[tone][10]
      },
      color: theme.colors[tone][12]
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
      backgroundColor: theme.colors[tone][12],
      ':hover': {
        backgroundColor: theme.colors[tone][12]
      },
      color: theme.colors[tone][2]
    };
  } else {
    // color bg + white text

    return {
      backgroundColor: theme.colors[tone][9],
      ':hover': {
        backgroundColor: theme.colors[tone][10]
      },
      color: theme.colors.white
    };
  }
});

// secondaryClass[tone]
const secondaryClass = styleVariants(allTones, (tone: keyof Colors) => {
  // color bg + black text
  if (
    tone === 'sky' ||
    tone === 'mint' ||
    tone === 'lime' ||
    tone === 'yellow' ||
    tone === 'amber'
  ) {
    return {
      backgroundColor: theme.colors[tone][4],
      ':hover': {
        backgroundColor: theme.colors[tone][5]
      },
      color: theme.colors[tone][11]
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
      backgroundColor: theme.colors[tone][4],
      ':hover': {
        backgroundColor: theme.colors[tone][5]
      },
      color: theme.colors[tone][12]
    };
  } else {
    // color bg

    return {
      backgroundColor: theme.colors[tone][4],
      ':hover': {
        backgroundColor: theme.colors[tone][5]
      },
      color: theme.colors[tone][11]
    };
  }
});
// tertiaryClass[tone]
const ghostClass = styleVariants(allTones, (tone: keyof Colors) => ({
  backgroundColor: 'transparent',
  ':hover': {
    color: theme.colors[tone][12]
  },
  color: theme.colors[tone][11]
}));

// Compose variants with classname-variants
const buttonStyle = variants({
  base: base,
  variants: {
    size: {
      sm: sizeSm,
      md: sizeMd,
      lg: sizeLg
    },
    align: {
      left: alignLeft,
      center: alignCenter,
      right: alignRight,
      between: alignBetween,
      around: alignAround
    }
  },
  defaultVariants: {
    size: 'md',
    align: 'center'
  }
});

export type BasicButtonProps = JSX.IntrinsicElements['button'] &
  VariantPropsOf<typeof buttonStyle>;

interface ButtonProps extends BasicButtonProps {
  tone?: keyof Colors;
  intent?: 'primary' | 'secondary' | 'ghost';
}


// pass intent and tone to primaryClass, secondaryClass, ghostClass


function Button({
                  tone = 'sky',
                  intent = 'primary',
                  ...props
                }: ButtonProps) {


  // This manages the props outside of variants
  function getVariant(
    intent,
    tone
  ) {
    switch (intent) {
      case 'primary':
        return primaryClass[tone];
      case 'secondary':
        return secondaryClass[tone];
      case 'ghost':
        return ghostClass[tone];
      default:
        return primaryClass[tone];
    }
  }

  return (
    <button
      className={getVariant(intent, tone) + ' ' + buttonStyle({ size: props.size, align: props.align })}
      {...props}
    />
  );
}

// const Button = ({
//   intent = "primary",
//   tone = "slate",
//   size = "md",
//   align = "center",
//   iconLeft,
//   iconRight,
//   iconSpacing = false,
//   children,
//   ...props
// }: ButtonProps) => {
//   return (
//     <button
//       className={buttonStyle({
//         size,
//         align,
//         iconSpacing,
//         className: getVariant(intent, tone), // for dynamic variants that's not composed with variants API
//       })}
//       {...props}
//     >
//       {iconLeft}
//       <span>{children}</span>
//       {iconRight}
//     </button>
//   );
// };

export default Button;

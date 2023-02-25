import React, { ForwardedRef, ReactNode } from "react";
import { styled } from "src/stitches.config";
const ButtonPrimitive = styled("button", {
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75,
  },

  "&:hover": {
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
  // mdx fix
  "& > p": {
    lineHeight: 1,
  },
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  lineHeight: 1,
  alignItems: "center",
  fontSize: "$base",
  border: "0",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: "$7",
        px: "$3",
        py: "$2",
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$4",
        py: "$2",
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$11",
        px: "$5",
        py: "$3",
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$6",
        py: "$4",
      },
    },

    align: {
      left: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      right: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
  },
  defaultVariants: {
    size: "md",
    align: "center",
  },
});

const BaseButton = styled("button", {
  backgroundColor: "red",
  color: "white",
  variants: {
    tone: {
      red: {
        backgroundColor: "red",
      },
      green: {
        backgroundColor: "green",
      },
    },
  },
  defaultVariants: {
    tone: "red",
  },
});

export interface BrandButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  // onClick: () => void;
  // variant: 'primary' | 'secondary';
}

const BrandButton = (
  { children, size, leftIcon, ...props }: BrandButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <ButtonPrimitive ref={ref} {...props}>
      {leftIcon}
      xxx {children} xxx
    </ButtonPrimitive>
  );
};

export default React.forwardRef(BrandButton);

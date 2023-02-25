import { css, styled } from "src/stitches.config";
import Spinner from "../Spinner";
import _ from "lodash";
const StyledButton = styled("button", {
  display: "flex",
  alignItems: "center",
  fontWeight: "$medium",
  overflow: "hidden",
  lineHeight: 1.5,
  transition: "$fast",
  "&:active": {
    transform: "scale(0.98) translateY(1px)",
  },
  "&:disabled": {
    transform: "none",
    cursor: "not-allowed",
    opacity: 0.75,
  },
  borderRadius: "$xl",
  variants: {
    size: {
      xs: {
        borderRadius: "$lg",

        px: "$2",
        py: "$2",
        fontSize: "$sm",
        "& .spinner": {
          boxSize: 16,
        },
      },
      s: {
        borderRadius: "$xl",

        px: "$3",
        py: "$2",
        "& .spinner": {
          boxSize: 20,
        },
      },
      m: {
        borderRadius: "$xl",

        px: "$4",
        py: "$3",
        "& .spinner": {
          boxSize: 20,
        },
      },
      l: {
        borderRadius: "$2xl",

        px: "$6",
        py: "$4",
        "& .spinner": {
          boxSize: 24,
        },
      },
    },
    brand: {
      primary: {
        borderRadius: "$full",
        background: "$colors$primary",
        color: "black",
        "&:hover": {
          background: "$colors$hover",
        },
      },
      secondary: {
        borderRadius: "$xl",
        background: "$colors$gray6",
        color: "$colors$gray12",
        "&:hover": {
          background: "$colors$gray7",
        },
      },
    },
    // border: {
    //   1: {
    //     borderRadius: "$lg",
    //   },
    //   2: {
    //     borderRadius: "$xl",
    //   },
    //   3: {
    //     borderRadius: "$full",
    //   },
    // },
  },
  defaultVariants: {
    size: "m",
  },
  compoundVariants: [{}],
});

const innterWrapper = css({
  px: 6,
  "& > p": {
    lineHeight: "inherit",
  },
});

function getButtonToneStyle(
  tone: keyof Colors
  //   intent: "primary" | "secondary" | "ghost"
) {
  if (!tone) {
    return;
  } else if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      bgTone9: tone,
      "&:hover": {
        bgTone10: tone,
      },
      "&:active": {
        bgTone11: tone,
      },
      color: "black",
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      bgTone12: tone,
      "&:hover": {
        bgTone12: tone,
      },
      "&:active": {
        bgTone11: tone,
      },
      color: `$${tone}2`,
    };
  } else {
    return {
      bgTone9: tone,
      "&:hover": {
        bgTone10: tone,
      },
      "&:active": {
        bgTone11: tone,
      },
      color: "white",
    };
  }
}

export interface BrandButtonProps
  extends React.ComponentProps<typeof StyledButton> {
  tone?: keyof Colors;
}

function BrandButton({ tone = "slate", ...props }: BrandButtonProps) {
  return (
    <StyledButton css={_.merge(getButtonToneStyle(tone), props.css)} {...props}>
      <Spinner className={"spinner"} />
      <span className={innterWrapper()}>{props.children}</span>
    </StyledButton>
  );
}

export default BrandButton;

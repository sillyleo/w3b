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
        px: "$2",
        py: "$2",
        fontSize: "$sm",
        "& .spinner": {
          boxSize: 16,
        },
      },
      s: {
        px: "$3",
        py: "$2",
        "& .spinner": {
          boxSize: 20,
        },
      },
      m: {
        px: "$4",
        py: "$3",
        "& .spinner": {
          boxSize: 20,
        },
      },
      l: {
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
  },
  defaultVariants: {
    size: "m",
    brand: "primary",
  },
});

const innterWrapper = css({
  px: 6,
  "& > p": {
    lineHeight: "inherit",
  },
});

export interface BrandButtonProps
  extends React.ComponentProps<typeof StyledButton> {
  isLoading?: boolean;
}

function BrandButton({ isLoading, ...props }) {
  return (
    <StyledButton {...props}>
      {isLoading && <Spinner className={"spinner"} />}
      <span className={innterWrapper()}>{props.children}</span>
    </StyledButton>
  );
}

export default BrandButton;

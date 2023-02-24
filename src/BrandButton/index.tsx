import {Button} from "reakit/Button";
import {css, styled} from "src/stitches.config";
import Spinner from "../Spinner";

{
    /* <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: 8,
      borderRadius: 9999,
      overflow: "hidden",
      backgroundColor: "#3ceaaa",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >

    </div>
    <div
      style={{
        padding: 4,
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        lineHeight: 150,
      }}
    >
      Button
    </div>
  </div>; */
}

const StyledButton = styled("button", {
    display: "flex",
    alignItems: "center",
    fontWeight: "$medium",
    overflow: "hidden",
    lineHeight: 1.5,
    transition: '$fast',
    '&:active': {
        transform: "scale(0.98) translateY(1px)",
    },
    '&:disabled': {
        transform: 'none',
        cursor: "not-allowed",
    },
    variants: {
        size: {
            // xs, s,m,l
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

            }
        },
        intent: {
            primary: {
                borderRadius: "$full",

                background: "$colors$primary",
                color: 'black',
                '&:hover': {
                    background: "$colors$hover",
                },
                '&:disabled': {
                    opacity: 0.5,
                },
            },
            secondary: {
                borderRadius: "$xl",

                background: "$colors$gray6",
                color: "$colors$gray12",
                '&:hover': {
                    background: "$colors$gray7",
                },
                '&:disabled': {
                    opacity: 0.5,
                },
            }
        }

    },
    defaultVariants: {
        size: "m",
        intent: "primary"
    }

});

const innterWrapper = css({
    px: 6
})

function BrandButton(props) {
    return (
        <StyledButton {...props}>
            <Spinner className={"spinner"}/>
            <span className={innterWrapper()}>{props.children}</span>
        </StyledButton>
    );
}

export default BrandButton;
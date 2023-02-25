import React from "react";
import _ from "lodash";
import type {CSS} from "src/stitches.config";
import {styled} from "src/stitches.config";
import {getButtonShadowStyle, getButtonToneStyle} from "src/util/tones";
import Box from "../Box";
import {AutoSpinner} from "../Spinner";

export interface ButtonProps
    extends React.ReactComponentElement<typeof ButtonPrimitive> {
    size?: "sm" | "md" | "lg" | "xl";
    align?: "left" | "center" | "right" | "between" | "around";
    tone?: keyof Colors;
    intent?: "primary" | "secondary" | "ghost";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isLoading?: boolean;
    children?: React.ReactNode;
    depth?: "0" | "1" | "2" | "3"
    css?: CSS;
}

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
        isLoading: {
            true: {
                opacity: 0.75,
                cursor: "wait",
            },
        },
    },
    defaultVariants: {
        size: "md",
        align: "center",
        isLoading: false,
    },
});

const Button = ({
                    size,
                    align,
                    isLoading,
                    tone = "slate",
                    intent = "primary",
                    children,
                    leftIcon,
                    rightIcon,
                    depth,
                    css,
                    ...props
                }: ButtonProps) => {
    return (
        <ButtonPrimitive
            size={size}
            align={align}
            isLoading={isLoading}
            css={_.merge(
                getButtonToneStyle(tone, intent),
                getButtonShadowStyle(tone, depth),
                css)}
            {...props}
        >
            {/*left icon*/}
            <Box css={{
                opacity: isLoading ? 0 : 1,
            }}>{leftIcon}</Box>
            {/*loading*/}
            {isLoading && (
                <Box
                    css={{
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        inset: 0
                    }}
                >
                    <AutoSpinner/>
                </Box>
            )}

            <Box css={{
                "& p": {lineHeight: 1},
                opacity: isLoading ? 0 : 1,
            }}>{children}</Box>
            {/*right icon*/}
            <Box css={{
                opacity: isLoading ? 0 : 1,
            }}>{rightIcon}</Box>
        </ButtonPrimitive>
    );
};

export default Button;
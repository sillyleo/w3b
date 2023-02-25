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

// export const Button = ({
//   // list all available props here and default values
//   size = "md",
//   align = "center",
//   tone = "sand",
//   intent = "primary",
//   isLoading = false,
//   children,
//   leftIcon,
//   rightIcon,
//   gradient = false,
//   shadow = false,
//   ...props
// }: ButtonProps) => {
//   // console.log(theme.colors.basebackground);
//   return (
//     <Bento
//       // clsx is only for combing multiple classes together
//       className={clsx(
//         buttonStyle({
//           size: size,
//           align: align,
//           gradient: gradient,
//           isLoading: isLoading,
//         }),
//         getVariant(intent, tone),
//         getShadowVariant(shadow, size, tone, intent)
//       )}
//       {...props}
//     >
//       <Bento opacity={isLoading ? "0" : "100"}>{leftIcon}</Bento>
//       {isLoading && (
//         <Bento
//           position={"absolute"}
//           display="flex"
//           alignItems={"center"}
//           justifyContent="center"
//           left="0"
//           top="0"
//           right="0"
//           bottom="0"
//         >
//           {spinner}
//         </Bento>
//       )}
//       <Bento opacity={isLoading ? "0" : "100"}>{children}</Bento>
//       <Bento opacity={isLoading ? "0" : "100"}>{rightIcon}</Bento>
//     </Bento>
//   );
// };

// const spinner = (
//   <svg
//     version="1.1"
//     id="L9"
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     x="0px"
//     y="0px"
//     width={"100%"}
//     height={"100%"}
//     viewBox="0 0 100 100"
//     enableBackground="new 0 0 0 0"
//     xmlSpace="preserve"
//   >
//     <path
//       fill="currentColor"
//       d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
//     >
//       <animateTransform
//         attributeName="transform"
//         attributeType="XML"
//         type="rotate"
//         dur="1s"
//         from="0 50 50"
//         to="360 50 50"
//         repeatCount="indefinite"
//       />
//     </path>
//   </svg>
// );

export default Button;
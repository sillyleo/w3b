import { styled } from "src/stitches.config";

export type TextProps = React.ComponentProps<typeof Text>;

const Text = styled("div", {
  fontFamily: "$heading",
  variants: {
    size: {
      "page-title": {
        fontWeight: "$bold",
        fontSize: "$6xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased",
      },
      "page-title2": {
        fontWeight: "$bold",
        fontSize: "$5xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased",
      },
      title1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased",
      },
      title2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased",
      },
      title3: {
        fontWeight: "$bold",
        fontSize: "$xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased",
      },
      subtitle1: {
        fontWeight: "$bold",
        fontSize: "$lg",
        lineHeight: "$heading",
        letterSpacing: "$decreased",
      },
      subtitle2: {
        fontWeight: "$bold",
        fontSize: "$base",
        lineHeight: "$heading",
        letterSpacing: "$decreased",
      },
      overline: {
        fontFamily: "$body",
        fontWeight: "$bold",
        fontSize: "$xs",
        lineHeight: "$heading",
        letterSpacing: "$increased",
        textTransform: "$uppercase",
      },
      body: {
        fontFamily: "$body",
        fontWeight: "$normal",
        fontSize: "$base",
        lineHeight: "$body",
        letterSpacing: "$default",
      },
      "body-bold": {
        fontWeight: "$bold",
        fontFamily: "$body",
        fontSize: "$base",
        lineHeight: "body",
        letterSpacing: "$default",
      },
      label: {
        fontFamily: "$body",
        fontSize: "$sm",
        lineHeight: "$body",
        letterSpacing: "$default",
      },
      caption: {
        fontFamily: "$body",
        fontSize: "$xs",
        lineHeight: "$body",
        letterSpacing: "$default",
      },
    },
  },
  defaultVariants: {
    size: "body",
  },
});

export default Text;

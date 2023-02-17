import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, theme } from "../styles/theme.css";

export const baseTextStyle = sprinkles({
  fontFamily: "heading",
});
export const textStyle = recipe({
  base: baseTextStyle,
  variants: {
    size: {
      "page-title": sprinkles({
        fontWeight: "bold",
        fontSize: "4xl",
        lineHeight: "heading",
        letterSpacing: "decreased",
      }),
      title1: sprinkles({
        fontWeight: "bold",
        fontSize: "3xl",
        lineHeight: "heading",
        letterSpacing: "decreased",
      }),
      title2: sprinkles({
        fontWeight: "bold",
        fontSize: "2xl",
        lineHeight: "heading",
        letterSpacing: "decreased",
      }),
      title3: sprinkles({
        fontWeight: "bold",
        fontSize: "xl",
        lineHeight: "heading",
        letterSpacing: "decreased",
      }),
      subtitle1: sprinkles({
        fontWeight: "bold",
        fontSize: "lg",
        lineHeight: "heading",
        letterSpacing: "decreased",
      }),
      subtitle2: sprinkles({
        fontWeight: "bold",
        fontSize: "base",
        lineHeight: "heading",
        letterSpacing: "decreased",
      }),
      overline: sprinkles({
        fontFamily: "body",
        fontWeight: "bold",
        fontSize: "xs",
        lineHeight: "heading",
        letterSpacing: "increased",
        textTransform: "uppercase",
      }),
      body: sprinkles({
        fontFamily: "body",
        fontWeight: "normal",
        fontSize: "base",
        lineHeight: "body",
        letterSpacing: "default",
      }),
      "body-bold": sprinkles({
        fontWeight: "bold",
        fontFamily: "body",
        fontSize: "base",
        lineHeight: "body",
        letterSpacing: "default",
      }),
      label: sprinkles({
        fontFamily: "body",
        fontSize: "sm",
        lineHeight: "body",
        letterSpacing: "default",
      }),
      caption: sprinkles({
        fontFamily: "body",
        fontSize: "xs",
        lineHeight: "body",
        letterSpacing: "default",
      }),
    },
  },
  defaultVariants: {
    size: "body",
  },
});
export type TextStyleVariants = RecipeVariants<typeof textStyle>;

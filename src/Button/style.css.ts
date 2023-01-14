import { style } from "@vanilla-extract/css";
import { sprinkles } from "../styles/sprinkles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: sprinkles({
    padding: "9",
    borderRadius: "full",
  }),
  variants: {
    color: {
      tomato: sprinkles({
        background: "tomato9",
        color: "tomato12",
      }),
      grass: sprinkles({
        background: "grass9",
        color: "grass12",
      }),
    },
  },
  defaultVariants: {
    color: "grass",
  },
});
export type ButtonVariants = RecipeVariants<typeof buttonStyle>;

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
        color: "white",
      }),
      grass: sprinkles({
        background: "grass9",
        color: "white",
      }),
    },
  },
  defaultVariants: {
    color: "grass",
  },
});
export type ButtonVariants = RecipeVariants<typeof buttonStyle>;

import {
  colorVariants,
  colorVariantsData,
  colorVariantsStatic,
  styled,
} from "../stitches.config";
import type * as Stitches from "@stitches/react";

const Card = styled("div", {
  borderRadius: "9999px",
  color: "$white",
  fontSize: "13px",
  padding: "10px 15px",
  variants: { color: colorVariantsData },
  defaultVariants: {
    color: "grass",
  },
});

// type Card = Stitches.VariantProps<typeof Card>;

export default Card;

import { styled } from "../stitches.config";

const Card = styled("div", {
  $$custom: "$colors$accent9",
  backgroundColor: "$$custom",
  borderRadius: "9999px",
  color: "$white",
  fontSize: "13px",
  padding: "10px 15px",
});

export default Card;

import { styled } from "../../stitches.config";

const Card = styled("div", {
  $$custom: "$colors$accent9",
  backgroundColor: "$$custom",
  borderRadius: "9999px",
  color: "$white",
  fontSize: "13px",
  padding: "10px 15px",
});
// const Card = ({ className, ...props }: Props) => {
//   return (
//     <div {...props} className={[s.card, className].filter(Boolean).join(" ")} />
//   );
// };

export default Card;

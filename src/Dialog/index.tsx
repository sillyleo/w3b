import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "src/stitches.config";

const Root = styled(DialogPrimitive.Root, {});
const Content = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  zIndex: 30,
  "&:focus": { outline: "none" },
});
const Title = styled(DialogPrimitive.Title, {});
const Description = styled(DialogPrimitive.Description, {});
const Trigger = styled(DialogPrimitive.Trigger, {});
const Portal = styled(DialogPrimitive.Portal, {});
const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "black",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 20,
});
const Close = styled(DialogPrimitive.Close, {});
const Dialog = DialogPrimitive;
export default Dialog;
export { Root, Content, Title, Description, Trigger, Portal, Overlay, Close };

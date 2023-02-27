import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, green } from "@radix-ui/colors";

const Root = styled(DialogPrimitive.Root, {});
const Trigger = styled(DialogPrimitive.Trigger, {});
const Portal = styled(DialogPrimitive.Portal, {});
const Title = styled(DialogPrimitive.Title, {});
const Description = styled(DialogPrimitive.Description, {});
const Close = styled(DialogPrimitive.Close, {});
const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
});

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
  "&:focus": { outline: "none" },
});

// export all components from DialogPrimitive as Dialog
export default {
  Root,
  Trigger,
  Portal,
  Title,
  Description,
  Overlay,
  Content,
  Close,
};

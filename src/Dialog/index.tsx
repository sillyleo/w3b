import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { violet, blackA, mauve, green } from "@radix-ui/colors";
import { styled, Radix } from "src/stitches.config";
import Box from "src/Box";
import IconButton from "src/IconButton";

const Dialog = () => {
  return "Use subcomponents to render content.";
};

export const Root = styled(DialogPrimitive.Root, {});
Root.displayName = "Root";
Dialog.Root = Root;
export const Trigger = styled(DialogPrimitive.Trigger, {});
Trigger.displayName = "Trigger";
Dialog.Trigger = Trigger;
export const Portal = styled(DialogPrimitive.Portal, {});
Portal.displayName = "Portal";
Dialog.Portal = Portal;
export const Title = styled(DialogPrimitive.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold",
});
Title.displayName = "Title";
Dialog.Title = Title;
export const Description = styled(DialogPrimitive.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary",
});
Description.displayName = "Description";
Dialog.Description = Description;
export const Close = styled(DialogPrimitive.Close, {});
Close.displayName = "Close";
Dialog.Close = Close;
export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA8,
  position: "fixed",
  inset: 0,
});
Overlay.displayName = "Overlay";
Dialog.Overlay = Overlay;
export const Content = styled(DialogPrimitive.Content, {
  backgroundColor: "$baseBackground",
  borderRadius: "$2xl",
  boxShadow: "$2",
  zIndex: 30,
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "650px",
  // maxHeight: "85vh",
  overflow: "hidden",
  "&:focus": { outline: "none" },
});
Content.displayName = "Content";
Dialog.Content = Content;

export const ContentWithClose = (props: any) => {
  return (
    <Content {...props}>
      <Box
        css={{
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: "32",
        }}
      >
        <DialogPrimitive.Close asChild>
          <IconButton name="x" intent="ghost" />
        </DialogPrimitive.Close>
      </Box>
      <Box
        css={{
          padding: "$6",

          position: "relative",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          width: "100%",
          minWidth: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          ":focus": { outline: "none" },
        }}
      >
        {props.children}
      </Box>
    </Content>
  );
};
ContentWithClose.displayName = "ContentWithClose";
Dialog.ContentWithClose = ContentWithClose;

export default Dialog;

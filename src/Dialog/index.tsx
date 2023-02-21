import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import Bento from "../Bento";
import IconButton from "../IconButton";
import Text from "../Text";
import {
  closePositionStyle,
  contentStyle,
  contentWrapperStyle,
  overlayStyle,
  rootStyle,
} from "./style.css";

export type RootProps = React.ComponentProps<typeof Dialog.Root> &
  React.ComponentProps<typeof Bento> & {};

const Root = (props: RootProps) => {
  return <Bento as={Dialog.Root} className={rootStyle} {...props} />;
};

const Trigger = (props) => {
  return <Dialog.Trigger {...props} />;
};

const Portal = (props) => {
  return <Dialog.Portal {...props} />;
};

const Overlay = (props) => {
  return <Dialog.Overlay className={overlayStyle} {...props} />;
};

export type ContentProps = React.ComponentProps<typeof Dialog.Content> &
  React.ComponentProps<typeof Bento> & {};

const Content = (props: ContentProps) => {
  // this takes Bento styles
  return (
    <Bento as={Dialog.Content} className={contentStyle}>
      <Bento className={closePositionStyle}>{props.close}</Bento>
      <Bento className={contentWrapperStyle}>{props.children}</Bento>
    </Bento>
  );
};

export type TitleProps = React.ComponentProps<typeof Dialog.Title> &
  React.ComponentProps<typeof Bento> & {};

const Title = (props: ContentProps) => {
  // this takes Bento styles
  return (
    <Dialog.Title asChild>
      <Text size={"subtitle1"} {...props}>
        {props.children}
      </Text>
    </Dialog.Title>
  );
};

export type DescriptionProps = React.ComponentProps<typeof Dialog.Description> &
  React.ComponentProps<typeof Bento> & {};

const Description = (props: ContentProps) => {
  // this takes Bento styles
  return (
    <Dialog.Description asChild>
      <Text mt={"1"} size={"body"} color={"baseTextTertiary"} {...props}>
        {props.children}
      </Text>
    </Dialog.Description>
  );
};

export type CloseProps = React.ComponentProps<typeof Dialog.Close> &
  React.ComponentProps<typeof Bento> & {};

const Close = (props: CloseProps) => {
  // this takes Bento styles
  return (
    <Dialog.Close asChild>
      <Bento>
        <IconButton intent="ghost" name="x" />
      </Bento>
    </Dialog.Close>
  );
};

export default {
  Root,
  Content,
  Title,
  Description,
  Trigger,
  Portal,
  Overlay,
  Close,
};

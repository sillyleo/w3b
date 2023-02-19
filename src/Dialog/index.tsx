import * as Dialog from "@radix-ui/react-dialog";
import Bento from "../Bento";
import {
  closeStyle,
  contentStyle,
  descriptionStyle,
  overlayStyle,
  rootStyle,
  titleStyle,
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
  return <Bento as={Dialog.Content} className={contentStyle} {...props} />;
};

export type TitleProps = React.ComponentProps<typeof Dialog.Title> &
  React.ComponentProps<typeof Bento> & {};

const Title = (props: ContentProps) => {
  // this takes Bento styles
  return <Bento as={Dialog.Title} className={titleStyle} {...props} />;
};

export type DescriptionProps = React.ComponentProps<typeof Dialog.Description> &
  React.ComponentProps<typeof Bento> & {};

const Description = (props: ContentProps) => {
  // this takes Bento styles
  return (
    <Bento as={Dialog.Description} className={descriptionStyle} {...props} />
  );
};

export type CloseProps = React.ComponentProps<typeof Dialog.Close> &
  React.ComponentProps<typeof Bento> & {};

const Close = (props: CloseProps) => {
  // this takes Bento styles
  return <Bento as={Dialog.Close} className={closeStyle} {...props} />;
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

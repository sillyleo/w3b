import * as Tabs from "@radix-ui/react-tabs";
import Bento from "src/Bento";
import "./style.css";
import { contentStyle, listStyle, rootStyle, triggerStyle } from "./style.css";

export type RootProps = React.ComponentProps<typeof Tabs.Root> &
  React.ComponentProps<typeof Bento> & {};

const Root = (props: RootProps) => {
  return <Bento as={Tabs.Root} className={rootStyle} {...props} />;
};

export type ListProps = React.ComponentProps<typeof Tabs.List> &
  React.ComponentProps<typeof Bento>;

const List = (props) => {
  return <Bento as={Tabs.List} className={listStyle} {...props} />;
};

export type TriggerProps = React.ComponentProps<typeof Tabs.Trigger> &
  React.ComponentProps<typeof Bento>;

const Trigger = (props) => {
  return <Bento as={Tabs.Trigger} className={triggerStyle} {...props} />;
};

export type ContentProps = React.ComponentProps<typeof Tabs.Content> &
  React.ComponentProps<typeof Bento>;

const Content = (props) => {
  return <Bento as={Tabs.Content} className={contentStyle} {...props} />;
};

export default { Root, List, Trigger, Content };

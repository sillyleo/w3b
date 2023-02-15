import * as Tabs from "@radix-ui/react-tabs";
import "./style.css";
import {
  contentStyle,
  listStyle,
  listTone,
  ListVariant,
  rootStyle,
  triggerShadowTone,
  triggerStyle,
  triggerTone,
  TriggerVariants,
} from "./style.css";

// import {
//   Tab as TabPrimitive,
//   TabList as TabListPrimitive,
//   TabPanel as TabPanelPrimitive,
//   useTabState,
// } from "reakit/Tab";
import clsx from "clsx";
import React from "react";
import Bento from "src/Bento";

export type RootProps = React.ComponentProps<typeof Tabs.Root> &
  React.ComponentProps<typeof Bento> & {
    defaultValue: string;
  };

const Root = (props: RootProps) => {
  // this takes Bento styles
  return <Bento as={Tabs.Root} className={rootStyle} {...props} />;
};

export type ListProps = React.ComponentProps<typeof Tabs.List> & {
  tone?: keyof Colors;
  size?: ListVariant["size"];
  tabSizing?: ListVariant["tabSizing"];
};

const List = ({
  size = "md",
  tone = "slate",
  tabSizing = "equal",
  ...props
}: ListProps) => {
  return (
    <Tabs.List
      className={clsx(
        listStyle({
          size: size,
          tabSizing: tabSizing,
        }),
        listTone[tone]
      )}
      {...props}
    />
  );
};

export type TriggerProps = React.ComponentProps<typeof Tabs.Trigger> & {
  value: string;
  tone?: keyof Colors;
  size?: TriggerVariants["size"];
};

const Trigger = ({ size = "md", tone = "slate", ...props }: TriggerProps) => {
  return (
    <Tabs.Trigger
      className={clsx(
        triggerStyle({
          size: size,
        }),
        triggerTone[tone],
        triggerShadowTone[tone]
      )}
      {...props}
    />
  );
};

export type ContentProps = React.ComponentProps<typeof Tabs.Content> &
  React.ComponentProps<typeof Bento> & {
    value: string;
  };

const Content = (props: ContentProps) => {
  return <Tabs.Content className={contentStyle} {...props} />;
};

export default { Root, List, Trigger, Content };

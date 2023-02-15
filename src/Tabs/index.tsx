import "./style.css";
import {
  contentStyle,
  itemStyle,
  listStyle,
  listTone,
  panelStyle,
  rootStyle,
  triggerShadowTone,
  triggerStyle,
  triggerTone,
} from "./style.css";
import * as Tabs from "@radix-ui/react-tabs";

// import {
//   Tab as TabPrimitive,
//   TabList as TabListPrimitive,
//   TabPanel as TabPanelPrimitive,
//   useTabState,
// } from "reakit/Tab";
import Bento from "src/Bento";
import { Button } from "src/Button";
import React from "react";
import clsx from "clsx";

export type RootProps = React.ComponentProps<typeof Tabs.Root> &
  React.ComponentProps<typeof Bento> & {
    defaultValue: string;
  };

const Root = (props: RootProps) => {
  // this takes Bento styles
  return <Bento as={Tabs.Root} className={rootStyle} {...props} />;
};

export type ListProps = React.ComponentProps<typeof Tabs.List> & {
  tone: keyof Colors;
  size: "sm" | "md" | "lg";
};

const List = ({ size = "md", tone = "lime", ...props }: ListProps) => {
  return (
    <Tabs.List
      className={clsx(
        listStyle({
          size: size,
        }),
        listTone[tone]
      )}
      {...props}
    />
  );
};

export type TriggerProps = React.ComponentProps<typeof Tabs.Trigger> & {
  value: string;
  tone: keyof Colors;
  size: "sm" | "md" | "lg";
};

const Trigger = ({ size = "md", tone = "lime", ...props }: TriggerProps) => {
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

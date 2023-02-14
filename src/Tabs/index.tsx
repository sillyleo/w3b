import "./style.css";
import { itemStyle, listStyle, panelStyle } from "./style.css";

import {
  Tab as TabPrimitive,
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  useTabState,
} from "reakit/Tab";
import Bento from "src/Bento";
import { Button } from "src/Button";
import React from "react";

const TabList = (props) => {
  return <Bento as={TabListPrimitive} className={listStyle} {...props} />;
};

export type TabItemProps = React.ComponentProps<typeof TabPrimitive> &
  React.ComponentProps<typeof Bento> & {
    strong?: boolean;
  };

const TabItem = ({ children, strong, ...props }: TabItemProps) => {
  function getIntent(strong) {
    if (strong) {
      return props.id === props.currentId ? "primary" : "ghost";
    } else {
      return props.id === props.currentId ? "secondary" : "ghost";
    }
  }

  return (
    <Bento as={TabPrimitive} className={itemStyle} baseId="tab" {...props}>
      <Button
        shadow={props.id === props.currentId}
        intent={getIntent(strong)}
        size={props.size}
        tone={props.tone}
        // __borderRadius="0px"
      >
        {children}
      </Button>
    </Bento>
  );
};

const TabPanel = (props) => {
  return <Bento as={TabPanelPrimitive} {...props} className={panelStyle} />;
};

const TabDemo = () => {
  // don't forget this
  const tab = useTabState();

  return (
    <div>
      {tab.currentId}
      <TabList {...tab} aria-label="My tabs">
        <TabItem strong id="1" {...tab}>
          Tab
        </TabItem>
        <TabItem strong id="2" {...tab}>
          Tab
        </TabItem>
        <TabItem strong id="3" {...tab}>
          Tab
        </TabItem>
      </TabList>
      <TabPanel {...tab}>Tab 1</TabPanel>
      <TabPanel {...tab}>Tab 2</TabPanel>
      <TabPanel {...tab}>Tab 3</TabPanel>
    </div>
  );
};

export default { TabItem, TabList, TabPanel, useTabState, TabDemo };

// export type RootProps = React.ComponentProps<typeof Tabs.Root> &
//   React.ComponentProps<typeof Bento> & {};

// const Root = (props: RootProps) => {
//   return <Bento as={Tabs.Root} className={rootStyle} {...props} />;
// };

// export type ListProps = React.ComponentProps<typeof Tabs.List> &
//   React.ComponentProps<typeof Bento>;

// const Tabset = (props: ListProps) => {
//   return (
//     <Bento as={Tabs.List} className={listStyle}>
//       <Tabs.Trigger value="tab1">
//         <Button intent="secondary">Tab 1</Button>
//       </Tabs.Trigger>
//       <Tabs.Trigger value="tab2">
//         <Button intent="ghost">Tab 2</Button>
//       </Tabs.Trigger>
//       <Tabs.Trigger value="tab3">
//         <Button intent="ghost">Tab 3</Button>
//       </Tabs.Trigger>
//     </Bento>
//   );
// };

// const List = (props: ListProps) => {
//   return <Bento as={Tabs.List} className={listStyle} {...props} />;
// };

// export type TriggerProps = React.ComponentProps<typeof Tabs.Trigger> &
//   React.ComponentProps<typeof Bento>;

// const Trigger = (props: TriggerProps) => {
//   return <Bento as={Tabs.Trigger} className={triggerStyle} {...props} />;
// };

// // const StyledTrigger = (props: TriggerProps) => {
// //   // this can be styles with
// //   // [data-state]	"active" | "inactive"
// //   // [data-disabled]
// //   return <Bento as={Tabs.Trigger} className={triggerStyle} {...props} />;
// // };

// export type ContentProps = React.ComponentProps<typeof Tabs.Content> &
//   React.ComponentProps<typeof Bento>;

// const Content = (props: ContentProps) => {
//   return <Bento as={Tabs.Content} className={contentStyle} {...props} />;
// };

// export default { Root, List, Trigger, Tabset, Content };

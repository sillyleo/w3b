import React from "react";
import * as Popover from "@radix-ui/react-popover";
import "./style.css";
import { PopoverContent } from "./style.css";

// add interface for all popover components
export interface PopoverProps {
  // custom props
  children: React.ReactNode;

  // build in props
  popoverRootProps?: Popover.PopoverProps;
  popoverTriggerProps?: Popover.PopoverTriggerProps;
  popoverPortalProps?: Popover.PopoverPortalProps;
  popoverContentProps?: Popover.PopoverContentProps;
  popoverCloseProps?: Popover.PopoverCloseProps;
  popoverArrowProps?: Popover.PopoverArrowProps;
}

const PopoverDemo = ({
  children,
  popoverRootProps,
  popoverTriggerProps,
  popoverPortalProps,
  popoverContentProps,
  popoverCloseProps,
  popoverArrowProps,
}: PopoverProps) => (
  <Popover.Root {...popoverRootProps}>
    <Popover.Trigger asChild {...popoverTriggerProps}>
      <button className="IconButton" aria-label="Update dimensions">
        Icon
      </button>
    </Popover.Trigger>
    <Popover.Portal {...popoverPortalProps}>
      <Popover.Content
        // sideOffset={35}
        className={PopoverContent}
        {...popoverContentProps}
      >
        {children}
        <Popover.Close
          className="PopoverClose"
          aria-label="Close"
          {...popoverCloseProps}
        >
          Close
        </Popover.Close>
        <Popover.Arrow {...popoverArrowProps} className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;

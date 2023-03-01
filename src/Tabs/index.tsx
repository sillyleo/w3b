import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import {styled,} from 'src/stitches.config'
import type * as Stitches from '@stitches/react';

export type RootProps = React.ComponentProps<typeof TabsPrimitive.Root> & {
    defaultValue?: string
}

function Root({defaultValue, ...props}: RootProps) {
    return <TabsPrimitive.Root defaultValue={defaultValue} {...props} />;
}

type StyledTriggerVariants = Stitches.VariantProps<typeof StyledList>

export type ListProps = React.ComponentProps<typeof TabsPrimitive.List> & StyledTriggerVariants & {
    tone?: keyof Colors;
};

const StyledList = styled(TabsPrimitive.List, {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "minmax(0, 1fr)",
    variants: {
        size: {
            sm: {
                borderRadius: "$lg",
                padding: "2px",
            },
            md: {
                borderRadius: "$lg",
                padding: "3px",
            },
            lg: {
                borderRadius: "$xl",
                padding: '4px'
            },
        },
        tabSizing: {
            full: {
                gridAutoFlow: "column",
            },
            fit: {
                width: 'max-content',
            },
        },
    },
    defaultVariants: {
        size: 'md',
        tabSizing: 'full'
    }
})

function List({
                  size,
                  tone = "slate",
                  tabSizing,
                  ...props
              }: ListProps) {
    return (
        <StyledList
            size={size}
            tabSizing={tabSizing}
            css={{
                bgTone3: tone,
            }}
            {...props}
        />
    );
}

const StyledTrigger = styled(TabsPrimitive.Trigger, {
    all: 'unset',
    fontWeight: "$normal",
    WebkitFontSmoothing: "antialiased",
    transition: "$fast",
    fontFamily: "$heading",
    cursor: "pointer",
    display: "inline-flex",
    gap: "$2",
    p: "$0",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "$base",
    lineHeight: "$single",
    border: 0,
    position: "relative",
    borderRadius: "$lg",
    userSelect: 'none',
//    '&:first-child': { borderTopLeftRadius: 6 },
//    '&:last-child': { borderTopRightRadius: 6 },
    '&[data-state="active"]:active': {
        transform: 'translateY(1px)'
    },
    '&[data-state="active"], &[data-state="active"]:hover': {
        color: "black",
        boxShadow: '$subtle',
        bg: '$basePureBackground'
    },
    variants: {
        size: {
            sm: {
                fontSize: "$xs",
                height: "$7",
                paddingLeft: "$3",
                paddingRight: "$3",
            },
            md: {
                fontSize: "$sm",
                height: "$8",
                paddingLeft: "$8",
                paddingRight: "$8",
            },
            lg: {
                fontSize: "$base",
                height: "$11",
                paddingLeft: "$5",
                paddingRight: "$5",
            },
        },
    },

    defaultVariants: {
        size: "md",
    },

})


export type TriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> &
    StyledTriggerVariants & {
    tone?: keyof Colors;
    value: string // required
};

function Trigger({size = 'md', tone = "slate", ...props}: TriggerProps) {
    return (
        <StyledTrigger
            size={size}
            css={{
                '&[data-state="inactive"]': {
                    textTone9: tone
                }
            }}
            {...props}
        />
    );
}

export type ContentProps = React.ComponentProps<typeof TabsPrimitive.Content>

function Content({value, ...props}: ContentProps) {
    return <TabsPrimitive.Content value={value} {...props} />;
}

function Tabs() {
    return ("Use Tabs's sub component")
}

Tabs.Root = Root
Tabs.List = List
Tabs.Trigger = Trigger
Tabs.Content = Content
export default Tabs;


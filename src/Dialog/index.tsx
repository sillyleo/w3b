import * as Dialog from "@radix-ui/react-dialog";
import Bento from "../Bento";
import Text from "../Text";
import {
    closeStyle,
    contentStyle,
    descriptionStyle,
    overlayStyle,
    rootStyle,
    titleStyle,
} from "./style.css";
import IconButton from "../IconButton";
import LucideIcon from "../LucideIcon";
import React from "react";

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
    return <Dialog.Title asChild>
        <Text size={'subtitle1'} {...props}>{props.children}</Text>
    </Dialog.Title>;
};

export type DescriptionProps = React.ComponentProps<typeof Dialog.Description> &
    React.ComponentProps<typeof Bento> & {};

const Description = (props: ContentProps) => {
    // this takes Bento styles
    return <Dialog.Description asChild>
        <Text mt={'1'} size={'body'} color={"baseTextTertiary"} {...props}>{props.children}</Text>
    </Dialog.Description>;
};

export type CloseProps = React.ComponentProps<typeof Dialog.Close> &
    React.ComponentProps<typeof Bento> & {};

const Close = (props: CloseProps) => {
    // this takes Bento styles
    return <Dialog.Close asChild>
        <Bento className={closeStyle}>
            <IconButton
                intent='ghost'
                name='x'/>
        </Bento>
    </Dialog.Close>;
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
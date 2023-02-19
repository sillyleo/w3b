import {sprinkles} from "./../styles/theme.css";
import {style, styleVariants} from "@vanilla-extract/css";
import {allTones} from "src/constants";
import {theme} from "src/styles/theme.css";
import {violet, blackA, mauve, green} from "@radix-ui/colors";

export const rootStyle = style({});
export const triggerStyle = style({});
export const overlayStyle = style({
    backgroundColor: blackA.blackA9,
    position: "fixed",
    inset: 0,
});

export const contentStyle = style([
    sprinkles({
        backgroundColor: "baseBackground",
        borderRadius: "2xl",
        boxShadow: "lg",
        padding: '6',
    }),
    {
        zIndex: 30,
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90vw",
        maxWidth: "450px",
        maxHeight: "85vh",
        ":focus": {outline: "none"},
    },
]);

export const titleStyle = style({});
export const descriptionStyle = style({});

export const closeStyle = style([
    sprinkles({
        position: 'absolute',
        top: '2',
        right: '2',
    })
    , {}]);
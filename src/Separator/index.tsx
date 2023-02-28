import clsx from "clsx";
import React from "react";
import Bento, {BentoProps} from "../Bento";
import {base, separatorDir, separatorTone} from "./style.css";

export interface SeparatorProps extends BentoProps {
  orientation?: "horizontal" | "vertical";
  tone?: keyof typeof separatorTone;
}

const Separator = ({
                     orientation = "horizontal",
                     tone = "slate" as keyof typeof separatorTone,
                     ...props
                   }: SeparatorProps) => (
    <Bento
        className={clsx("hr", separatorDir[orientation], separatorTone[tone])}
        {...props}
    />
);

export default Separator;
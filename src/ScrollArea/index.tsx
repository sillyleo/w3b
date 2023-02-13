import clsx from "clsx";
import React from "react";
import Bento, { BentoProps } from "../Bento";
import { base } from "./style.css";

export interface ScrollAreaProps extends BentoProps {}

const ScrollArea = ({ ...props }: ScrollAreaProps) => <Bento />;

export default ScrollArea;

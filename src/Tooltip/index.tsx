import clsx from "clsx";
import React from "react";
import Bento, { BentoProps } from "../Bento";
import { base } from "./style.css";

export interface TooltipProps extends BentoProps {}

const Tooltip = ({ ...props }: TooltipProps) => <Bento />;

export default Tooltip;

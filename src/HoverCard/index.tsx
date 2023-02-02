import clsx from "clsx";
import React from "react";
import Bento, { BentoProps } from "../Bento";
import { base } from "./style.css";

export interface HoverCardProps extends BentoProps {}

const HoverCard = ({ ...props }: HoverCardProps) => <Bento />;

export default HoverCard;

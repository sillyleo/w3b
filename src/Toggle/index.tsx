import clsx from "clsx";
import React from "react";
import Bento, { BentoProps } from "../Bento";
import { base } from "./style.css";

export interface ToggleProps extends BentoProps {}

const Toggle = ({ ...props }: ToggleProps) => <Bento />;

export default Toggle;

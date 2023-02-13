import clsx from "clsx";
import React from "react";
import Bento, { BentoProps } from "../Bento";
import { base } from "./style.css";

export interface DialogProps extends BentoProps {}

const Dialog = ({ ...props }: DialogProps) => <Bento />;

export default Dialog;

import clsx from "clsx";
import React from "react";
import Bento, { BentoProps } from "../Bento";
import { base } from "./style.css";

export interface TemplateProps extends BentoProps {}

const Template = ({ ...props }: TemplateProps) => <Bento />;

export default Template;

import React from "react";
import Bento, { BentoProps } from "../Bento";

export interface TemplateProps extends BentoProps {
}

const Template = ({...props}: TemplateProps) => <Bento/>;

export default Template;
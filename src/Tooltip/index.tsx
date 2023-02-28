import React from "react";
import Bento, { BentoProps } from "../Bento";

export interface TooltipProps extends BentoProps {
}

const Tooltip = ({...props}: TooltipProps) => <Bento/>;

export default Tooltip;
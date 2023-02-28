import React from "react";
import Bento, { BentoProps } from "../Bento";

export interface ToggleProps extends BentoProps {
}

const Toggle = ({...props}: ToggleProps) => <Bento/>;

export default Toggle;
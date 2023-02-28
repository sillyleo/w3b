import React from "react";
import Bento, { BentoProps } from "../Bento";

export interface AlertDialogProps extends BentoProps {
}

const AlertDialog = ({...props}: AlertDialogProps) => <Bento/>;

export default AlertDialog;
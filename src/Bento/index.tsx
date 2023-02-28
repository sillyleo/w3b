import { createBox } from "@dessert-box/react";
import React from "react";
import { sprinkles as atoms } from "../styles/theme.css";

// https://github.com/TheMightyPenguin/dessert-box

const Bento = createBox({
	atoms,
	// defaultClassName: resetStyle
});

export interface BentoProps extends React.ComponentProps<typeof Bento> {
}

export default Bento;
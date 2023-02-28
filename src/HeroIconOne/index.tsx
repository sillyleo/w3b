import React, { FC } from "react";
import * as CSS from "csstype";
import * as HeroIcons from "react-icons/hi";
import Bento from "../Bento";

export interface HeroIconOneProps {
	name?: string;
	outline?: boolean;
	boxSize?: CSS.Properties["width"];
}

// https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-851594776
const HeroIcon: FC<{ icon: string }> = (props) => {
	const {...icons} = HeroIcons;
	// console.log(props.icon);
	// @ts-ignore
	const OutlineIcon: JSX.Element = icons[props.icon] || icons["HiArchive"];
	return (
		<>
			{/* @ts-ignore */}
			<OutlineIcon
				style={{width: "100%", height: "100%"}}
				aria-hidden="true"
			/>
		</>
	);
};

const HeroIconOne = ({
						 name = "HiArchive",
						 // from react-icons
						 boxSize = "24px",
						 ...props
					 }: HeroIconOneProps) => {
	return (
		<Bento __width={boxSize} __height={boxSize} {...props}>
			<HeroIcon icon={name}/>
		</Bento>
	);
};

export default HeroIconOne;
import { style, styleVariants } from "@vanilla-extract/css";
import { allTones } from "src/constants";
import { theme } from "src/styles/theme.css";

export const base = style({
	display: "block",
	alignSelf: "stretch",
});

export const separatorDir = styleVariants({
	vertical: [
		base,
		{
			height: "1fr",
			width: "1px",
		},
	],
	horizontal: [
		base,

		{
			height: "1px",
			width: "1fr",
		},
	],
});

export const separatorTone = styleVariants(allTones, (tone) => {
	return {
		backgroundColor: theme.colors[tone + "6"],
	};
});
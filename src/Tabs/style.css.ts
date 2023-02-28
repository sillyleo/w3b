import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";
import { allTones } from "src/constants";
import { darkTheme, sprinkles, theme } from "../styles/theme.css";

// console.log(theme.colors);

export const listStyle = recipe({
	base: {
		display: "grid",
		gridAutoColumns: "minmax(0, 1fr)",
		gridAutoFlow: "column",
	},
	variants: {
		size: {
			sm: {
				borderRadius: theme.radii["lg"],
				padding: "2px",
			},
			md: {
				borderRadius: theme.radii["lg"],
				padding: "3px",
			},
			lg: {
				borderRadius: theme.radii["xl"],
				padding: theme.spacing[2],
			},
		},
		tabSizing: {
			equal: {
				gridAutoFlow: "column",
			},
			content: {
				alignSelf: "flex-start",
			},
		},
	},
});
export type ListVariant = RecipeVariants<typeof listStyle>;

export const itemStyle = style({});

export const panelStyle = style({});

export const triggerStyle = recipe({
	base: [
		{
			fontWeight: 400,
			WebkitFontSmoothing: "antialiased",
		},
		sprinkles({
			transition: "slow",
			fontFamily: "heading",
			cursor: "pointer",
			display: "inline-flex",
			gap: "2",
			p: "0",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "base",
			lineHeight: "single",
			border: "0",
			position: "relative",
			borderRadius: "lg",
		}),
	],
	variants: {
		size: {
			sm: {
				fontSize: theme.fontSize["xs"],
				height: theme.spacing[7],
				paddingLeft: theme.spacing[3],
				paddingRight: theme.spacing[3],
			},
			md: {
				fontSize: theme.fontSize["sm"],
				height: theme.spacing[8],
				paddingLeft: theme.spacing[4],
				paddingRight: theme.spacing[4],
			},
			lg: {
				fontSize: theme.fontSize["base"],
				height: theme.spacing[11],
				paddingLeft: theme.spacing[5],
				paddingRight: theme.spacing[5],
			},
		},
	},

	defaultVariants: {
		size: "md",
	},
});

// triggerShadowTone[tone]

export const triggerShadowTone = styleVariants(
	allTones,
	(tone: keyof Colors) => {
		return {
			selectors: {
				[`[data-state=active]&`]: {
					boxShadow: `
        0 3px 10px -4px ${theme.colors[tone + "8"]}`,
				},
				[`${darkTheme} [data-state=active]&`]: {
					boxShadow: "none",
				},
			},
		};
	}
);

// triggerTone[tone]
export const triggerTone = styleVariants(allTones, (tone: keyof Colors) => {
	if (
		tone === "gray" ||
		tone === "mauve" ||
		tone === "slate" ||
		tone === "sage" ||
		tone === "olive" ||
		tone === "sand"
	) {
		// grayscale series
		return {
			selectors: {
				[`[data-state=active]&`]: {
					backgroundColor: theme.colors.baseBackground,
					color: theme.colors.baseText,
				},

				[`${darkTheme} [data-state=active]&`]: {
					backgroundColor: theme.colors[tone + "8"],
					color: theme.colors.baseText,
				},
			},
			backgroundColor: "transparent",

			color: theme.colors[tone + "10"],
		};
	} else {
		return {
			selectors: {
				[`[data-state=active]&`]: {
					backgroundColor: theme.colors.baseBackground,
					color: theme.colors[tone + "12"],
				},
				[`${darkTheme} [data-state=active]&`]: {
					backgroundColor: "hsla(0, 0%, 100%, 0.176)",
					color: theme.colors.baseText,
				},
			},
			backgroundColor: "transparent",
			color: theme.colors[tone + "8"],
		};
	}
});

// triggerTone[tone]
export const listTone = styleVariants(allTones, (tone: keyof Colors) => {
	return {
		backgroundColor: theme.colors[tone + "3"],
	};
});

// Export type
export type TriggerVariants = RecipeVariants<typeof triggerStyle>;

export const contentStyle = style({});

export const rootStyle = style({
	display: "flex",
	alignItems: "stretch",
	flexDirection: "column",
});
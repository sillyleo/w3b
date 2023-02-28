import * as RadixColors from "@radix-ui/colors";

//Info:
// get intent and tone from props, and return the correct style
// in your component:
// css = { _.merge(getButtonToneStyle(tone,intent), props.css) }

// button tone
export function getButtonToneStyle(
	tone: keyof Colors,
	intent: "primary" | "secondary" | "ghost"
) {
	if (!tone) {
		return;
	} else if (
		tone === "sky" ||
		tone === "mint" ||
		tone === "lime" ||
		tone === "yellow" ||
		tone === "amber"
	) {
		if (intent === "primary") {
			return {
				bgTone9: tone,
				"&:hover": {
					bgTone10: tone,
				},
				"&:active": {
					bgTone11: tone,
				},
				color: "black",
			};
		} else if (intent === "secondary") {
			return {
				bgTone4: tone,
				"&:hover": {
					bgTone5: tone,
				},
				"&:active": {
					bgTone6: tone,
				},
				color: `$${tone}11`,
			};
		} else if (intent === "ghost") {
			return {
				bg: "transparent",
				"&:hover": {
					bgTone3: tone,
				},
				"&:active": {
					bgTone4: tone,
				},
				color: `$${tone}11`,
			};
		}
	} else if (
		// grayscale series
		tone === "gray" ||
		tone === "mauve" ||
		tone === "slate" ||
		tone === "sage" ||
		tone === "olive" ||
		tone === "sand"
	) {
		if (intent === "primary") {
			return {
				bgTone12: tone,
				"&:hover": {
					bgTone12: tone,
				},
				"&:active": {
					bgTone12: tone,
				},
				color: `$${tone}2`,
			};
		} else if (intent === "secondary") {
			return {
				bgTone6: tone,
				"&:hover": {
					bgTone7: tone,
				},
				"&:active": {
					bgTone8: tone,
				},
				color: `$${tone}12`,
			};
		} else {
			return {
				bg: "transparent",
				"&:hover": {
					bgTone3: tone,
				},
				"&:active": {
					bgTone4: tone,
				},
				color: `$${tone}11`,
			};
		}
	} else {
		if (intent === "primary") {
			return {
				bgTone9: tone,
				"&:hover": {
					bgTone10: tone,
				},
				"&:active": {
					bgTone11: tone,
				},
				color: "white",
			};
		} else if (intent === "secondary") {
			return {
				bgTone4: tone,
				"&:hover": {
					bgTone5: tone,
				},
				"&:active": {
					bgTone6: tone,
				},
				color: `$${tone}11`,
			};
		} else {
			return {
				bg: "transparent",
				"&:hover": {
					bgTone3: tone,
				},
				"&:active": {
					bgTone4: tone,
				},
				color: `$${tone}11`,
			};
		}
	}
}

// generate tonal shadows
export function getButtonShadowStyle(
	tone: keyof Colors, // default value is from the component
	depth: "0" | "1" | "2" | "3" | undefined
) {
	// console.log(radixColorsPrimitive.blueA)
	const {...colorFromRadix} = RadixColors;
	// shadowColor
	//@ts-ignore
	const shadowColor = colorFromRadix[tone + "A"];

	if (depth === "0") {
		return {
			boxShadow: "none",
		};
	} else if (depth === "1") {
		return {
			$$shadowColor: shadowColor[tone + "A6"],
			boxShadow: `0.3px 0.5px 0.7px $$shadowColor,                
                0.4px 0.8px 1px -1.2px $$shadowColor,
                1px 2px 2.5px -2.5px $$shadowColor;`,
		};
	} else if (depth === "2") {
		return {
			$$shadowColor: shadowColor[tone + "A6"],
			boxShadow: `0.3px 0.5px 0.7px $$shadowColor,
                0.8px 1.6px 2px -0.8px $$shadowColor,
                2.1px 4.1px 5.2px -1.7px $$shadowColor,
                5px 10px 12.6px -2.5px $$shadowColor;`,
		};
	} else if (depth === "3") {
		return {
			$$shadowColor: shadowColor[tone + "A5"],
			boxShadow: `0.3px 0.5px 0.7px $$shadowColor,
                1.5px 2.9px 3.7px -0.4px $$shadowColor,
                2.7px 5.4px 6.8px -0.7px $$shadowColor,
                4.5px 8.9px 11.2px -1.1px $$shadowColor,
                7.1px 14.3px 18px -1.4px $$shadowColor,
                11.2px 22.3px 28.1px -1.8px $$shadowColor`,
		};
	} else return {};
}

// progress bar tone
export function getIndicatorToneStyle(tone: keyof Colors) {
	if (!tone) {
		return {
			"&::after": {
				bgTone2: "slate",
			},
			bgTone2: "slate",
			"&::before": {
				bgTone2: "slate",
			},
		};
	}
	return {
		"&::after": {
			bgTone2: tone,
		},
		"&::before": {
			bgTone2: tone,
		},
	};
}

export function getBarToneStyle(tone: keyof Colors) {
	if (!tone) {
		return {
			"&::after": {
				bgTone9: "slate",
			},
			"&::before": {
				bgTone9: "slate",
			},
		};
	}
	return {
		"&::after": {
			bgTone9: tone,
		},
		"&::before": {
			bgTone9: tone,
		},
	};
}
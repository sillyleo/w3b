import React from "react";
import { iconButtonStyle, IconButtonVariants, iconPaddingX } from "./style.css";
import { clsx } from "clsx";
import {
	ghostClass,
	lgGhostShadowClass,
	lgPrimaryShadowClass,
	lgSecondaryShadowClass,
	mdGhostShadowClass,
	mdPrimaryShadowClass,
	mdSecondaryShadowClass,
	primaryClass,
	secondaryClass,
	smGhostShadowClass,
	smPrimaryShadowClass,
	smSecondaryShadowClass,
} from "../styles/theme.css";
import LucideIcon from "../LucideIcon";
import Bento, { BentoProps } from "../Bento";

// set variant class names
export function getVariant(intent: string, tone: keyof Colors) {
	if (intent === "primary") {
		// @ts-ignore

		return primaryClass[tone];
	} else if (intent === "secondary") {
		// @ts-ignore

		return secondaryClass[tone];
	} else if (intent === "ghost") {
		// @ts-ignore

		return ghostClass[tone];
	} else {
		// @ts-ignore

		return primaryClass[tone];
	}
}

// set variant class names
export function getShadowVariant(
	shadow: boolean,
	size: string,
	tone: keyof Colors,
	intent: string
) {
	if (shadow && intent === "primary") {
		if (size === "sm") {
			// @ts-ignore

			return smPrimaryShadowClass[tone];
		} else if (size === "md") {
			// console.log(mdPrimaryShadowClass[tone]);
			// @ts-ignore

			return mdPrimaryShadowClass[tone];
		} else {
			// @ts-ignore

			return lgPrimaryShadowClass[tone];
		}
	}
	if (shadow && intent === "secondary") {
		if (size === "sm") {
			// @ts-ignore

			return smSecondaryShadowClass[tone];
		} else if (size === "md") {
			// @ts-ignore

			return mdSecondaryShadowClass[tone];
		} else {
			// @ts-ignore

			return lgSecondaryShadowClass[tone];
		}
	}

	if (shadow && intent === "ghost") {
		if (size === "sm") {
			// @ts-ignore

			return smGhostShadowClass[tone];
		} else if (size === "md") {
			// @ts-ignore

			return mdGhostShadowClass[tone];
		} else {
			// @ts-ignore

			return lgGhostShadowClass[tone];
		}
	}
}

export interface IconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		// @ts-ignore
		IconButtonVariants,
		BentoProps {
	size?: "sm" | "md" | "lg";
	align?: "left" | "center" | "right" | "between" | "around";
	tone?: keyof Colors;
	intent?: "primary" | "secondary" | "ghost";
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	gradient?: boolean;
	shadow?: boolean;
	name?: string;
	color?: string;
	strokeWidth?: number;
	fill?: string;
	borderRadius?: BentoProps["borderRadius"];
}

export const IconButton = ({
							   // list all available props here and default values
							   size = "md",
							   align = "center",
							   tone = "sand",
							   intent = "primary",
							   children,
							   leftIcon,
							   rightIcon,
							   gradient = false,
							   shadow = false,
							   name = "camera",
							   color,
							   strokeWidth,
							   fill,
							   borderRadius = "full",
							   ...props
						   }: IconButtonProps) => {
	return (
		<Bento
			as="button"
			// clsx is only for combing multiple classes together
			className={clsx(
				iconButtonStyle({
					size: size,
					align: align,
					gradient: gradient,
				}),
				leftIcon !== undefined || rightIcon !== undefined
					? iconPaddingX[size]
					: iconPaddingX["zero"],
				getVariant(intent, tone),
				getShadowVariant(shadow, size, tone, intent)
			)}
			{...props}
		>
			{leftIcon}
			{children ? (
				<Bento
					__fontSize="1.5em"
					__width={"100%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					textAlign={"center"}
				>
					{children}
				</Bento>
			) : (
				<LucideIcon
					name={name}
					color={color}
					strokeWidth={strokeWidth}
					fill={fill}
				/>
			)}
			{rightIcon}
		</Bento>
	);
};

export default IconButton;
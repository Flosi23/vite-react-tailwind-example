import { PropsWithChildren } from "react";
import { LabelProps, TypographyProps } from "./types.ts";

/**
 * Label styles are smaller, utilitarian styles,
 * used for things like the text inside components
 * or for very small text in the content body,
 * such as captions.
 */
export default function TextLabel({
	size,
	bold = false,
	className = "",
	children,
	...props
}: PropsWithChildren<TypographyProps & LabelProps>) {
	return (
		<label
			className={`${mapSizeToTextSize(size)} ${
				bold ? "font-bold" : "font-normal"
			} ${className}`}
			{...props}>
			{children}
		</label>
	);
}

function mapSizeToTextSize(size: TypographyProps["size"]) {
	switch (size) {
		case "small":
			return "text-sm";
		case "medium":
			return "text-base";
		case "large":
			return "text-lg";
	}
}

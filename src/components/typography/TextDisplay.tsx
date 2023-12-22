import { PropsWithChildren } from "react";
import { HeadingProps, TypographyProps } from "./types.ts";

/**
 * As the largest text on the screen, display styles are reserved for short,
 * important text or numerals.
 */
export default function TextDisplay({
	size,
	bold = true,
	className = "",
	children,
	...props
}: PropsWithChildren<TypographyProps & HeadingProps>) {
	return (
		<h5
			className={`${mapSizeToTextSize(size)} ${
				bold ? "font-bold" : "font-normal"
			} ${className}`}
			{...props}>
			{children}
		</h5>
	);
}

function mapSizeToTextSize(size: TypographyProps["size"]) {
	switch (size) {
		case "small":
			return "text-7xl";
		case "medium":
			return "text-8xl";
		case "large":
			return "text-9xl";
	}
}

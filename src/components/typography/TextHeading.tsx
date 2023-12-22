import { PropsWithChildren } from "react";
import { HeadingProps, TypographyProps } from "./types.ts";

/**
 * Headlines are best-suited for short, high-emphasis text
 * on smaller screens.
 * These styles can be good for marking primary passages
 * of text or important regions of content.
 */
export default function TextHeading({
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
			return "text-5xl";
		case "medium":
			return "text-6xl";
		case "large":
			return "text-7xl";
	}
}

import { PropsWithChildren } from "react";
import { HeadingProps, TypographyProps } from "./types.ts";

/**
 * Titles are smaller than headline styles,
 * and should be used for medium-emphasis text that remains
 * relatively short.
 * For example, consider using title styles
 * to divide secondary passages of text or secondary
 * regions of content.
 */
export default function TextTitle({
	size,
	bold = true,
	className = "",
	children,
	...props
}: PropsWithChildren<TypographyProps & HeadingProps>) {
	return (
		<h5
			className={`${mapSizeToTextSize(size)} ${
				bold ? "font-semibold" : "font-normal"
			} ${className}`}
			{...props}>
			{children}
		</h5>
	);
}

function mapSizeToTextSize(size: TypographyProps["size"]) {
	switch (size) {
		case "small":
			return "text-2xl";
		case "medium":
			return "text-3xl";
		case "large":
			return "text-4xl";
	}
}

import { PropsWithChildren } from "react";
import { ParagraphProps, TypographyProps } from "./types.ts";

/**
 * Body styles are used for longer
 * passages of text in your app.
 */
export default function TextBody({
	size,
	bold = false,
	className = "",
	children,
	...props
}: PropsWithChildren<TypographyProps & ParagraphProps>) {
	return (
		<p
			className={`${mapSizeToTextSize(size)} ${
				bold ? "font-bold" : "font-normal"
			} ${className}`}
			{...props}>
			{children}
		</p>
	);
}

function mapSizeToTextSize(size: TypographyProps["size"]) {
	switch (size) {
		case "small":
			return "text-lg";
		case "medium":
			return "text-xl";
		case "large":
			return "text-2xl";
	}
}

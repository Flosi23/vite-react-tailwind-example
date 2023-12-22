import React, { LabelHTMLAttributes } from "react";

export interface TypographyProps {
	size: "small" | "medium" | "large";
	bold?: boolean;
}

export type HeadingProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export type LabelProps = React.DetailedHTMLProps<
	LabelHTMLAttributes<HTMLLabelElement>,
	HTMLLabelElement
>;

export type ParagraphProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>;

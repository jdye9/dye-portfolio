export type Offset = "left" | "right";
export type XDirection = "left" | "right";

export type LineDisplayProps = {
	offset: Offset;
	width: string;
	title: string;
	perLine: number;
	lineContent: string[];
	xDirection?: XDirection;
};

import { XDirection } from "../LineDisplay/types";

export type Axis = "x" | "y";

export type RevealProps = {
	children: JSX.Element;
	axis: Axis;
	xDirection?: XDirection;
};

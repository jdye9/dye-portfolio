import { LineGradientProps } from "./types";

export const LineGradient = ({ h, w, color }: LineGradientProps) => {
	return <div className={`${h} ${w} ${color}`} />;
};

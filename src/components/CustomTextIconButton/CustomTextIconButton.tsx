import { useRipple } from "../../hooks/useRipple";
import { useRef } from "react";
import { CustomTextIconButtonProps } from "./types";

export const CustomTextIconButton = ({
	icon,
	text,
	textStyling,
	height,
	width,
	handleClick,
}: CustomTextIconButtonProps) => {
	const ref = useRef(null);
	const ripples = useRipple(ref);

	return (
		<button
			ref={ref}
			className={`justify-around items-center relative flex ${width} ${height} overflow-hidden text-white rounded-lg shadow-md hover:cursor-pointer bg-gradient-to-br from-light-purple to-light-blue shadow-gray-200 hover:shadow-lg hover:shadow-gray-200`}
			onClick={handleClick}
		>
			{ripples}
			<i className={`${icon}`} />
			<div className={`${textStyling}`}>{text}</div>
		</button>
	);
};

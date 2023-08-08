import { useRipple } from "../../hooks/useRipple";
import { useRef } from "react";
import { CustomTextIconButtonProps } from "./types";

export const CustomTextIconButton = ({
	icon,
	text,
	textStyling,
	styling,
	handleClick,
	rippleColor,
}: CustomTextIconButtonProps) => {
	const ref = useRef(null);
	const ripples = useRipple(ref, rippleColor);

	return (
		<button
			ref={ref}
			className={`justify-center gap-2 items-center relative flex ${styling} overflow-hidden rounded-lg shadow-md hover:cursor-pointer`}
			onClick={handleClick}
		>
			{ripples}
			<i className={`${icon}`} />
			<div className={`${textStyling}`}>{text}</div>
		</button>
	);
};

import { useRipple } from "../../hooks/useRipple";
import { useRef } from "react";
import { CustomIconButtonProps } from "./types";

export const CustomIconButton = ({
	icon,
	link,
	rippleColor,
	styling,
}: CustomIconButtonProps) => {
	const ref = useRef(null);
	const ripples = useRipple(ref, rippleColor);

	return (
		<a
			ref={ref}
			className={`relative flex ${styling} overflow-hidden rounded-lg shadow-md justify-center items-center`}
			href={link}
			rel="noreferrer"
			target="_blank"
		>
			{ripples}
			<i className={`${icon}`} />
		</a>
	);
};

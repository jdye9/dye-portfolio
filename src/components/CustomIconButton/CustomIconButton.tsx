import { useRipple } from "../../hooks/useRipple";
import { useRef } from "react";
import { CustomIconButtonProps } from "./types";

export const CustomIconButton = ({
	icon,
	height,
	width,
	link,
}: CustomIconButtonProps) => {
	const ref = useRef(null);
	const ripples = useRipple(ref);

	return (
		<a
			ref={ref}
			className={`relative flex ${height} ${width} overflow-hidden text-white rounded-lg shadow-md hover:cursor-pointer bg-gradient-to-br from-light-purple to-light-blue shadow-gray-200 hover:shadow-lg hover:shadow-gray-200 justify-center items-center`}
			href={link}
			rel="noreferrer"
			target="_blank"
		>
			{ripples}
			<i className={`${icon}`} />
		</a>
	);
};

import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

type RippleStyle = {
	top: number;
	left: number;
	height: number;
	width: number;
};

export const useRipple = (ref: React.RefObject<HTMLButtonElement>) => {
	//ripples are just styles that we attach to span elements
	const [ripples, setRipples] = useState<RippleStyle[]>([]);

	useEffect(() => {
		//check if there's a ref
		if (ref.current) {
			const elem = ref.current;

			//add a click handler for the ripple
			const clickHandler = (e: MouseEvent) => {
				//calculate the position and dimensions of the ripple.
				//based on click position and button dimensions
				var rect = elem.getBoundingClientRect();
				var left = e.clientX - rect.left;
				var top = e.clientY - rect.top;
				const height = elem.clientHeight;
				const width = elem.clientWidth;
				const diameter = Math.max(width, height);
				setRipples([
					...ripples,
					{
						top: top - diameter / 2,
						left: left - diameter / 2,
						height: Math.max(width, height),
						width: Math.max(width, height),
					},
				]);
			};

			//add an event listener to the button
			elem.addEventListener("click", clickHandler);

			//clean up when the component is unmounted
			return () => {
				elem.removeEventListener("click", clickHandler);
			};
		}
	}, [ref, ripples]);

	//add a debounce so that if the user doesn't click after 1s, we remove the ripples
	const debounced = useDebounce(ripples, 1000);
	useEffect(() => {
		if (debounced.length) {
			setRipples([]);
		}
	}, [debounced.length]);

	//map through the ripples and return span elements.
	return ripples?.map((style, i) => {
		return (
			<span
				className="absolute scale-0 bg-white rounded-full opacity-0 animate-ripple"
				key={i}
				style={{
					height: style.height,
					width: style.width,
					top: style.top,
					left: style.left,
				}}
			/>
		);
	});
};

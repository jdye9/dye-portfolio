import { useEffect, useState } from "react";

export const useInViewport = (
	ref: React.RefObject<Element>,
	percentVisible: number
) => {
	const [ret, setRet] = useState(false);
	useEffect(() => {
		//check if there's a ref
		if (ref.current) {
			const elem = ref.current;

			const scrollHandler = (e: Event) => {
				const rect = elem.getBoundingClientRect();

				const windowHeight =
					window.innerHeight || document.documentElement.clientHeight;

				const elementTop = (rect.top <= 0 ? 0 : rect.top) / windowHeight;

				const elementBottom =
					(rect.bottom >= windowHeight ? windowHeight : rect.bottom) /
					windowHeight;

				setRet(
					elementTop < 1 - percentVisible / 100 &&
						elementBottom > percentVisible / 100
				);
			};

			//add an event listener to the button
			window.addEventListener("scroll", scrollHandler);

			//clean up when the component is unmounted
			return () => {
				window.removeEventListener("scroll", scrollHandler);
			};
		}
	}, [percentVisible, ref]);

	return ret;
};

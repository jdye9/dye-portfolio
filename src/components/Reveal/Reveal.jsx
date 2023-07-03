import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({ children, width = "fit-content" }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const animateContent = useAnimation();
	const animateSlider = useAnimation();

	useEffect(() => {
		if (isInView) {
			animateContent.start("visible");
		}
	}, [animateContent, animateSlider, isInView]);

	return (
		<div className="w-full" ref={ref}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={animateContent}
				transition={{ duration: 0.75, delay: 0.25 }}
			>
				{children}
			</motion.div>
		</div>
	);
};

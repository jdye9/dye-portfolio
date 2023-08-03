import { motion, useAnimation, useInView } from "framer-motion";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useEffect, useRef } from "react";
import { RevealProps } from "./types";

export const Reveal = ({ children, axis, xDirection }: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const animateContent = useAnimation();
	const scrollDirection = useScrollDirection();

	useEffect(() => {
		if (isInView) {
			animateContent.start("visible");
		} else {
			animateContent.start("hidden");
		}
	}, [animateContent, isInView]);

	return (
		<div ref={ref}>
			<motion.div
				variants={{
					hidden:
						scrollDirection === "down"
							? axis === "x"
								? xDirection === "right"
									? { opacity: 0, x: -75 }
									: { opacity: 0, x: 75 }
								: { opacity: 0, y: -75 }
							: axis === "x"
							? xDirection === "right"
								? { opacity: 0, x: 75 }
								: { opacity: 0, x: -75 }
							: { opacity: 0, y: 75 },
					visible: axis === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 },
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

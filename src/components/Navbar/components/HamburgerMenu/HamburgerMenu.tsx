import { useState } from "react";
import { HamburgerMenuProps } from "./types";

export const HamburgerMenu = ({
	mobileMenu,
	setMobileMenu,
}: HamburgerMenuProps) => {
	const [animationFlag, setAnimationFlag] = useState(false);
	return (
		<div>
			<button
				onClick={() => {
					setMobileMenu(!mobileMenu);
					if (mobileMenu) setAnimationFlag((prev) => !prev);
				}}
				className="flex flex-col items-center justify-center gap-1"
			>
				<span
					className={`transition-all duration-300 w-6 h-1 bg-white dark:bg-[#1A1A40] rounded ${
						mobileMenu
							? animationFlag
								? "rotate-45 translate-y-2"
								: "-rotate-45 translate-y-2"
							: ""
					}`}
				></span>
				<span
					className={`transition-all duration-300 w-6 h-1 bg-white dark:bg-[#1A1A40] rounded ${
						mobileMenu ? (animationFlag ? "rotate-45" : "-rotate-45") : ""
					}`}
				></span>
				<span
					className={`transition-all duration-300 w-6 h-1 bg-white dark:bg-[#1A1A40] rounded ${
						mobileMenu
							? animationFlag
								? "-rotate-45 -translate-y-2"
								: "rotate-45 -translate-y-2"
							: ""
					}`}
				></span>
			</button>
		</div>
	);
};

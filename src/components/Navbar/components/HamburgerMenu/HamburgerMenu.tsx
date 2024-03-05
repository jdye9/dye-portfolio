import { HamburgerMenuProps } from "./types";

export const HamburgerMenu = ({
	mobileMenu,
	setMobileMenu,
	hamburgerDirection,
	setHamburgerDirection,
}: HamburgerMenuProps) => {
	return (
		<div>
			<button
				onClick={() => {
					setMobileMenu(!mobileMenu);
					if (mobileMenu) {
						setHamburgerDirection((prev) => !prev);
					}
				}}
				className="flex flex-col items-center justify-center gap-1"
			>
				<span
					className={`transition-all duration-300 w-6 h-1 bg-white dark:bg-[#1A1A40] rounded ${
						mobileMenu
							? hamburgerDirection
								? "rotate-45 translate-y-2"
								: "-rotate-45 translate-y-2"
							: ""
					}`}
				></span>
				<span
					className={`transition-all duration-300 w-6 h-1 bg-white dark:bg-[#1A1A40] rounded ${
						mobileMenu ? (hamburgerDirection ? "-rotate-45" : "rotate-45") : ""
					}`}
				></span>
				<span
					className={`transition-all duration-300 w-6 h-1 bg-white dark:bg-[#1A1A40] rounded ${
						mobileMenu
							? hamburgerDirection
								? "rotate-45 -translate-y-2"
								: "-rotate-45 -translate-y-2"
							: ""
					}`}
				></span>
			</button>
		</div>
	);
};

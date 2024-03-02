import { useState } from "react";
import { HamburgerMenuProps } from "./types";

export const HamburgerMenu = ({
	mobileMenu,
	setMobileMenu,
}: HamburgerMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button
				onClick={() => setMobileMenu(!mobileMenu)}
				className="flex flex-col items-center justify-center"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	);
};

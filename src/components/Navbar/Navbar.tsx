import AnchorLink from "react-anchor-link-smooth-scroll";
import LogoLight from "../../assets/white-logo.svg";
import LogoDark from "../../assets/dark-logo.svg";
import { useState } from "react";
import { NavbarProps } from "./types";
import { LineGradient } from "../LineGradient";
import { HamburgerMenu } from "./components";
import { useTheme } from "../../providers";

export const Navbar = ({ selectedPage, pages }: NavbarProps) => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [hamburgerDirection, setHamburgerDirection] = useState(false);
	const {
		state: { isDarkMode, gradient },
		dispatch,
	} = useTheme();

	return (
		<nav className={`fixed top-0 left-0 z-20 w-full shadow ${gradient}`}>
			<div className="flex flex-wrap p-4">
				<div className="flex items-center justify-between w-full">
					<img
						src={isDarkMode ? LogoDark : LogoLight}
						className="h-[40px] w-[40px] hover:animate-spin hover:cursor-pointer"
						alt="Logo"
						onClick={() => dispatch({ type: "color" })}
					/>
					{isDarkMode && (
						<i
							className="text-4xl text-[#1A1A40] cursor-pointer fa-regular fa-sun"
							onClick={() => dispatch({ type: "switch" })}
						/>
					)}
					{!isDarkMode && (
						<i
							className="text-4xl text-white cursor-pointer fa-regular fa-moon"
							onClick={() => dispatch({ type: "switch" })}
						/>
					)}
					<div className="flex desktopS:hidden">
						<HamburgerMenu
							mobileMenu={mobileMenu}
							setMobileMenu={setMobileMenu}
							hamburgerDirection={hamburgerDirection}
							setHamburgerDirection={setHamburgerDirection}
						/>
					</div>
					<div className="items-center hidden gap-5 text-xl font-bold text-white dark:text-[#1A1A40] desktopS:flex font-openSans">
						{pages.map((page) => (
							<AnchorLink
								href={`#${page}`}
								offset="72"
								className="transition-all duration-500 hover:duration-500 hover:ease-in-out hover:scale-110"
								key={page}
							>
								{page}
								{selectedPage === page && (
									<LineGradient
										h={"h-1"}
										w={"w-full"}
										color="bg-white dark:bg-[#1A1A40]"
									/>
								)}
								{selectedPage !== page && (
									<LineGradient h={"h-1"} w={"w-full"} color="" />
								)}
							</AnchorLink>
						))}
					</div>
				</div>
				{mobileMenu && (
					<div
						className={`w-full items-center justify-between desktopS:hidden flex`}
					>
						<ul className="flex flex-col w-full gap-1 p-4 mt-5 text-xl font-bold bg-white dark:bg-[#1A1A40] rounded font-openSans">
							{pages.map((page) => (
								<AnchorLink
									href={`#${page}`}
									offset="72"
									onClick={() => {
										setMobileMenu(false);
										setHamburgerDirection((prev) => !prev);
									}}
									className={`rounded ${
										selectedPage !== page
											? "hover:bg-gray-100 dark:hover:white"
											: ""
									}`}
								>
									<li
										className={`w-full px-1 mx-auto rounded ${
											selectedPage === page
												? `${gradient} text-white dark:text-[#1A1A40]`
												: `text-transparent bg-clip-text ${gradient}`
										}`}
									>
										{page}
									</li>
								</AnchorLink>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

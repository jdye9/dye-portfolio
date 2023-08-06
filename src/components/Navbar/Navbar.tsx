import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { NavbarProps } from "./types";
import { LineGradient } from "../LineGradient";

export const Navbar = ({ selectedPage, pages }: NavbarProps) => {
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<nav className="fixed top-0 left-0 z-20 w-full shadow bg-gradient-to-br from-light-purple to-light-blue">
			<div className="flex flex-wrap p-4">
				<div className="flex justify-between w-full">
					<img src={Logo} className="h-10 mr-3 hover:animate-spin" alt="Logo" />
					<div className="flex desktopS:hidden">
						<button
							type="button"
							className="flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg desktopS:hidden"
							onClick={() => setMobileMenu(!mobileMenu)}
						>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div className="items-center hidden gap-5 text-xl font-bold text-white desktopS:flex font-openSans">
						{pages.map((page) => (
							<AnchorLink
								href={`#${page}`}
								offset="72"
								className="duration-500 ease-out hover:scale-110"
							>
								{page}
								{selectedPage === page && (
									<LineGradient h={"h-1"} w={"w-full"} color="bg-white" />
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
						<ul className="flex flex-col w-full gap-1 p-4 mt-5 text-xl font-bold bg-white border rounded font-openSans">
							{pages.map((page) => (
								<AnchorLink
									href={`#${page}`}
									offset="72"
									onClick={() => setMobileMenu(false)}
									className={`rounded ${
										selectedPage !== page ? "hover:bg-gray-100" : ""
									}`}
								>
									<li
										className={`w-full px-1 mx-auto rounded ${
											selectedPage === page
												? "bg-gradient-to-br from-light-purple to-light-blue text-white"
												: "text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue"
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

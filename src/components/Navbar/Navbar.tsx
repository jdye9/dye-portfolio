import { useState } from "react";
import Logo from "../../assets/logo.svg";
import { NavLink, LineGradient, MobileMenu } from "..";
import { FaListAlt } from "react-icons/fa";
import { pages } from "../../constants";
import { NavbarProps } from "./types";

export const Navbar = ({ selectedPage, setSelectedPage }: NavbarProps) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	return (
		<nav className="fixed top-0 z-40 w-full bg-white">
			<div className="flex items-center justify-between w-11/12 py-4 mx-auto">
				<div className="h-[50px] w-[50px]">
					<img
						src={Logo}
						alt="logo"
						className="hover:animate-spin h-[50px] w-[50px]"
					/>
				</div>

				<div className="justify-between hidden gap-6 desktopS:flex">
					{pages.map((page, index) => (
						<NavLink
							key={`${page}-${index}`}
							page={page}
							selectedPage={selectedPage}
						/>
					))}
				</div>

				<button className="flex text-white transition duration-500 ease-in-out rounded-full desktopS:hidden bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 hover:scale-125">
					<FaListAlt
						size={45}
						viewBox="40 40 430 430"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					/>
				</button>
			</div>
			<div className="flex items-center justify-between w-11/12 mx-auto">
				<LineGradient
					h={"h-1"}
					w={"w-full"}
					color={"bg-gradient-to-br from-light-purple to-light-blue"}
				/>
			</div>
			{isMenuToggled && (
				<MobileMenu
					pages={pages}
					isMenuToggled={isMenuToggled}
					setIsMenuToggled={setIsMenuToggled}
					selectedPage={selectedPage}
				/>
			)}
		</nav>
	);
};

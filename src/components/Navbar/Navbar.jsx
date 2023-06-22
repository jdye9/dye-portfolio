import { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "./components";
import { LineGradient } from "../LineGradient";
import { FaListAlt } from "react-icons/fa";
import { navLinks } from "../../constants";
import { MobileMenu } from "./components";

export const Navbar = ({ selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		if (isAboveSmallScreens) setIsMenuToggled(false);
	}, [isAboveSmallScreens]);

	return (
		<nav className="z-40 w-full fixed top-0 bg-white">
			<div className="flex items-center justify-between mx-auto w-11/12 py-4">
				<Logo height={50} width={50} className="hover:animate-spin" />
				{isAboveSmallScreens ? (
					<div className="flex justify-between gap-6">
						{navLinks.map((page) => (
							<NavLink
								page={page}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isAboveSmallScreens={isAboveSmallScreens}
								setIsMenuToggled={() => {}}
							/>
						))}
					</div>
				) : (
					<button className="rounded-full text-white transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125">
						<FaListAlt
							size={45}
							viewBox="40 40 430 430"
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						/>
					</button>
				)}
			</div>
			<div className="flex items-center justify-between mx-auto w-11/12">
				<LineGradient
					h={"h-1"}
					w={"w-full"}
					color={"bg-gradient-to-br from-light-purple to-light-blue"}
				/>
			</div>
			{!isAboveSmallScreens && isMenuToggled && (
				<MobileMenu
					navLinks={navLinks}
					isMenuToggled={isMenuToggled}
					setIsMenuToggled={setIsMenuToggled}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					isAboveSmallScreens={isAboveSmallScreens}
				/>
			)}
		</nav>
	);
};

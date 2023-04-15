import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "./components/NavLink";
import { LineGradient } from "components/LineGradient";
import { FaListAlt } from "react-icons/fa";

export const Navbar = ({ selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	const NavLinks = [
		"HOME",
		"EDUCATION",
		"EXPERIENCE",
		"PROJECTS",
		"BLOG",
		"CONTACT",
	];
	return (
		<>
			<nav className={`z-40 w-full fixed top-0`}>
				<div className="flex items-center justify-between mx-auto w-11/12 py-4">
					<Logo height={50} width={50} />
					{isAboveSmallScreens ? (
						<div className="flex justify-between gap-4">
							{NavLinks.map((page) => (
								<NavLink
									page={page}
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							))}
						</div>
					) : (
						<button className="text-white rounded-full transition-all duration-1000 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125">
							<FaListAlt size={45} viewBox="40 40 430 430" />
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
			</nav>
		</>
	);
};

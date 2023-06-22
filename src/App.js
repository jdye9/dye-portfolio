import { useState } from "react";
import { EducationPage, Navbar, LandingPage } from "./components";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { ButtonNav } from "components";
import { navLinks } from "./constants";

export const App = () => {
	const [selectedPage, setSelectedPage] = useState("home");
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	const isTallScreen = useMediaQuery("(min-height: 400px)");

	return (
		<div className="app">
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			{isAboveSmallScreens && isTallScreen && (
				<ButtonNav
					navLinks={navLinks}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			)}
			<div className="flex flex-col pt-[86px]">
				<LandingPage setSelectedPage={setSelectedPage} />
				<EducationPage setSelectedPage={setSelectedPage} />
			</div>
		</div>
	);
};

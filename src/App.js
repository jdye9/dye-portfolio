import { useState } from "react";
import {
	Navbar,
	LandingPage,
	LineGradient,
	ExperiencePage,
	SkillsPage,
	Reveal,
} from "./components";
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
				<div className="mx-auto w-11/12">
					<Reveal>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<ExperiencePage setSelectedPage={setSelectedPage} />
				<div className="mx-auto w-11/12">
					<Reveal>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<SkillsPage setSelectedPage={setSelectedPage} />
				<div className="mx-auto w-11/12">
					<LineGradient
						h={"h-1"}
						w={"w-full"}
						color={"bg-gradient-to-br from-light-purple to-light-blue"}
					/>
				</div>
			</div>
		</div>
	);
};

import { useState } from "react";
import { Navbar, LineGradient, Reveal } from "./components";
import { ButtonNav, Footer } from "./components";
import { pages } from "./constants";
import { Page } from "./types";
import {
	ContactPage,
	ExperiencePage,
	LandingPage,
	ProjectsPage,
	SkillsPage,
} from "./pages";
import { useTheme } from "./providers";

export const App = () => {
	const [selectedPage, setSelectedPage] = useState<Page>("HOME");
	const {
		state: { isDarkMode, gradient },
	} = useTheme();

	return (
		<div className={isDarkMode ? "dark" : ""}>
			<div className="app bg-white dark:bg-[#1A1A40]">
				<Navbar pages={pages} selectedPage={selectedPage} />
				<ButtonNav pages={pages} selectedPage={selectedPage} />
				<div className="flex w-full flex-col pt-[80px]">
					<LandingPage setSelectedPage={setSelectedPage} />
					<div className={`w-11/12 mx-auto`}>
						<Reveal axis={"y"}>
							<LineGradient h={"h-1"} w={"w-full"} color={gradient} />
						</Reveal>
					</div>
					<ExperiencePage setSelectedPage={setSelectedPage} />
					<div className={`w-11/12 mx-auto`}>
						<Reveal axis={"y"}>
							<LineGradient h={"h-1"} w={"w-full"} color={gradient} />
						</Reveal>
					</div>
					<SkillsPage setSelectedPage={setSelectedPage} />
					<div className={`w-11/12 mx-auto`}>
						<Reveal axis={"y"}>
							<LineGradient h={"h-1"} w={"w-full"} color={gradient} />
						</Reveal>
					</div>
					<ProjectsPage setSelectedPage={setSelectedPage} />
					<div className="w-11/12 mx-auto">
						<Reveal axis={"y"}>
							<LineGradient h={"h-1"} w={"w-full"} color={gradient} />
						</Reveal>
					</div>
					<ContactPage setSelectedPage={setSelectedPage} />
					<Footer />
				</div>
			</div>
		</div>
	);
};

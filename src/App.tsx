import { useState } from "react";
import { Navbar, LineGradient, Reveal } from "./components";
import { ButtonNav } from "./components";
import { pages } from "./constants";
import { Page } from "./types";
import { ExperiencePage, LandingPage, ProjectsPage, SkillsPage } from "./pages";

export const App = () => {
	const [selectedPage, setSelectedPage] = useState<Page>("HOME");

	return (
		<div className="app">
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<ButtonNav pages={pages} selectedPage={selectedPage} />
			<div className="flex flex-col pt-[86px]">
				<LandingPage setSelectedPage={setSelectedPage} />
				<div className="w-11/12 mx-auto">
					<Reveal axis={"y"}>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<ExperiencePage setSelectedPage={setSelectedPage} />
				<div className="w-11/12 mx-auto">
					<Reveal axis={"y"}>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<SkillsPage setSelectedPage={setSelectedPage} />
				<div className="w-11/12 mx-auto">
					<Reveal axis={"y"}>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<ProjectsPage setSelectedPage={setSelectedPage} />
			</div>
		</div>
	);
};

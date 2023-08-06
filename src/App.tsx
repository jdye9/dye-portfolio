import { useState } from "react";
import { Navbar, LineGradient, Reveal } from "./components";
import { ButtonNav } from "./components";
import { pages } from "./constants";
import { Page } from "./types";
import { ExperiencePage, LandingPage, ProjectsPage, SkillsPage } from "./pages";

export const App = () => {
	const [selectedPage, setSelectedPage] = useState<Page>("HOME");
	const [isMenuToggled, setIsMenuToggled] = useState(false);

	return (
		<div className="app">
			<Navbar pages={pages} selectedPage={selectedPage} />
			<ButtonNav pages={pages} selectedPage={selectedPage} />
			<div className="flex w-full flex-col pt-[73px]">
				<LandingPage
					setSelectedPage={setSelectedPage}
					isMenuToggled={isMenuToggled}
				/>
				<div className={`w-11/12 mx-auto`}>
					<Reveal axis={"y"}>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<ExperiencePage
					setSelectedPage={setSelectedPage}
					isMenuToggled={isMenuToggled}
				/>
				<div className={`w-11/12 mx-auto`}>
					<Reveal axis={"y"}>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<SkillsPage
					setSelectedPage={setSelectedPage}
					isMenuToggled={isMenuToggled}
				/>
				<div className={`w-11/12 mx-auto`}>
					<Reveal axis={"y"}>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div>
				<ProjectsPage
					setSelectedPage={setSelectedPage}
					isMenuToggled={isMenuToggled}
				/>
				{/* <div className="w-11/12 mx-auto">
					<Reveal axis={"y"}>
						<LineGradient
							h={"h-1"}
							w={"w-full"}
							color={"bg-gradient-to-br from-light-purple to-light-blue"}
						/>
					</Reveal>
				</div> */}
			</div>
		</div>
	);
};

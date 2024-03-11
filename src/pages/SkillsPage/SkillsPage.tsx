import { useEffect, useRef, useState } from "react";
import { useInViewport } from "../../hooks/useInViewport";
import { PageProps } from "../types";
import { LineDisplay, Reveal } from "../../components";
import { useGetSkills } from "../../hooks/useMongoDB";
import { useTheme } from "../../providers";
import DarkLogo from "../../assets/dark-logo.svg";
import LightLogo from "../../assets/white-logo.svg";

export const SkillsPage = ({ setSelectedPage }: PageProps) => {
	const ref = useRef(null);
	const inViewport = useInViewport(ref, 50);
	const [languages, setLanguages] = useState<string[]>([]);
	const [frameworks, setFrameworks] = useState<string[]>([]);
	const [libraries, setLibraries] = useState<string[]>([]);
	const { data: skills } = useGetSkills();

	const {
		state: { isDarkMode, gradient },
	} = useTheme();

	useEffect(() => {
		if (skills) {
			const languages = skills
				.filter((skill) => skill.skill_type === "language")
				.map((skill) => skill.img.ref);
			const frameworks = skills
				.filter((skill) => skill.skill_type === "framework")
				.map((skill) => skill.img.ref);
			const libraries = skills
				.filter((skill) => skill.skill_type === "library")
				.map((skill) => skill.img.ref);
			setLanguages(languages);
			setFrameworks(frameworks);
			setLibraries(libraries);
		}
	}, [skills]);

	useEffect(() => {
		if (inViewport) setSelectedPage("SKILLS");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="SKILLS"
			className={`z-0 relative flex flex-col justify-center w-full h-[calc(100vh-72px)] min-h-[1000px] mobileS:min-h-[1030px] mobileM:min-h-[1095px] mobileL:min-h-[1150px] desktopS:min-h-[1320px] desktopM:min-h-[1490px] desktopL:min-h-[1750px] desktopXL:min-h-[2000px] desktopXXL:min-h-[2400px]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute top-0 mx-auto">
					<Reveal axis={"y"}>
						<div
							className={`font-openSans leading-tight font-extrabold desktopXXL:text-[90px] desktopXL:text-[80px] desktopL:text-[70px] desktopM:text-[60px] desktopS:text-[50px] mobileL:text-[45px] mobileM:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text ${gradient}`}
						>
							Skills
						</div>
					</Reveal>
				</div>
				<div className="flex flex-col w-full gap-7">
					{!skills?.length && (
						<Reveal axis={"y"}>
							<img
								src={isDarkMode ? LightLogo : DarkLogo}
								alt="logo"
								className="animate-spin h-[100px] w-[100px] mx-auto"
							/>
						</Reveal>
					)}
					{!!skills?.length && (
						<>
							<LineDisplay
								offset="left"
								xDirection="left"
								width={"w-3/4"}
								title={"Languages"}
								perLine={3}
								lineContent={languages}
							/>
							<LineDisplay
								offset="right"
								xDirection="right"
								width={"w-3/4"}
								title={"Frameworks"}
								perLine={3}
								lineContent={frameworks}
							/>
							<LineDisplay
								offset="left"
								xDirection="left"
								width={"w-3/4"}
								title={"Libraries"}
								perLine={3}
								lineContent={libraries}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

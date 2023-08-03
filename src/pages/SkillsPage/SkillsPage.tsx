import { useEffect, useRef, useState } from "react";
import { useInViewport } from "../../hooks/useInViewport";
import { PageProps } from "../types";
import { LineDisplay, Reveal } from "../../components";
import { useGetSkills } from "../../hooks/useMongoDB";

export const SkillsPage = ({ setSelectedPage }: PageProps) => {
	const ref = useRef(null);
	const inViewport = useInViewport(ref, 50);
	const [languages, setLanguages] = useState<string[]>([]);
	const [frameworks, setFrameworks] = useState<string[]>([]);
	const [libraries, setLibraries] = useState<string[]>([]);
	const { data: skills } = useGetSkills();

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
			className={`relative flex flex-col justify-center w-full min-h-[900px] mobileS:min-h-[930px] mobileM:min-h-[995px] mobileL:min-h-[1050px] desktopS:min-h-[1220px] desktopM:min-h-[1390px] desktopL:min-h-[1550px] desktopXL:min-h-[1850px] desktopXXL:min-h-[2200px]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute top-0 mx-auto">
					<Reveal axis={"y"}>
						<div
							className={`font-openSans leading-tight font-extrabold desktopXXL:text-[90px] desktopXL:text-[80px] desktopL:text-[70px] desktopM:text-[60px] desktopS:text-[50px] mobileL:text-[45px] mobileM:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue`}
						>
							Skills
						</div>
					</Reveal>
				</div>
				<div className="flex flex-col w-full gap-7">
					<LineDisplay
						offset="left"
						xDirection="left"
						width={"w-3/4"}
						title={"Languages"}
						lines={4}
						lineContent={languages}
					/>
					<LineDisplay
						offset="right"
						xDirection="right"
						width={"w-3/4"}
						title={"Frameworks"}
						lines={2}
						lineContent={frameworks}
					/>
					<LineDisplay
						offset="left"
						xDirection="left"
						width={"w-3/4"}
						title={"Libraries"}
						lines={2}
						lineContent={libraries}
					/>
				</div>
			</div>
		</div>
	);
};

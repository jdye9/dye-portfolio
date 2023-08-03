import { Reveal, Card } from "../../components";
import { useEffect, useRef } from "react";
import { useInViewport } from "../../hooks/useInViewport";
import { PageProps } from "../types";
import { projects } from "./constants";

export const ProjectsPage = ({ setSelectedPage }: PageProps) => {
	const ref = useRef(null);
	const inViewport = useInViewport(ref, 50);

	useEffect(() => {
		if (inViewport) setSelectedPage("PROJECTS");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="PROJECTS"
			className={`relative flex flex-col justify-center w-full desktopL:min-h-[830px]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute top-0 mx-auto">
					<Reveal axis={"y"}>
						<div
							className={`font-openSans leading-tight font-extrabold desktopXXL:text-[90px] desktopXL:text-[80px] desktopL:text-[70px] desktopM:text-[60px] desktopS:text-[50px] mobileL:text-[45px] mobileM:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue`}
						>
							Projects
						</div>
					</Reveal>
				</div>
				<div className="flex flex-wrap justify-center w-full gap-12">
					{projects.map((project) => (
						<Reveal axis={"y"}>
							<Card
								img={project.img}
								title={project.title}
								description={project.description}
								styling={"desktopL:w-[700px] desktopL:h-[500px] mx-auto"}
							/>
						</Reveal>
					))}
				</div>
			</div>
		</div>
	);
};

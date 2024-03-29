import { Reveal, Card } from "../../components";
import { useEffect, useRef } from "react";
import { useInViewport } from "../../hooks/useInViewport";
import { PageProps } from "../types";
import { useGetProjects } from "../../hooks/useMongoDB";
import DarkLogo from "../../assets/dark-logo.svg";
import LightLogo from "../../assets/white-logo.svg";
import { useTheme } from "../../providers";

export const ProjectsPage = ({ setSelectedPage }: PageProps) => {
	const ref = useRef(null);
	const inViewport = useInViewport(ref, 50);
	const { data: projects } = useGetProjects();

	const {
		state: { isDarkMode, gradient },
	} = useTheme();

	useEffect(() => {
		if (inViewport) setSelectedPage("PROJECTS");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="PROJECTS"
			className={`z-0 relative flex flex-col justify-center w-full h-[calc(100vh-72px)] min-h-[350px] mobileS:min-h-[400px] mobileM:min-h-[500px] mobileL:min-h-[600px] desktopS:min-h-[700px] desktopM:min-h-[830px] desktopL:min-h-[900px] desktopXL:min-h-[1100px] desktopXXL:min-h-[1175px]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute top-0 mx-auto">
					<Reveal axis={"y"}>
						<div
							className={`font-chakraPetch leading-tight font-extrabold desktopXXL:text-[90px] desktopXL:text-[80px] desktopL:text-[70px] desktopM:text-[60px] desktopS:text-[50px] mobileL:text-[45px] mobileM:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text ${gradient}`}
						>
							Projects
						</div>
					</Reveal>
				</div>
				<div className="flex flex-wrap justify-center w-full gap-12">
					{!projects?.length && (
						<Reveal axis={"y"}>
							<img
								src={isDarkMode ? LightLogo : DarkLogo}
								alt="logo"
								className="animate-spin h-[100px] w-[100px] mx-auto"
							/>
						</Reveal>
					)}
					{!!projects?.length &&
						projects.map((project) => (
							<Reveal key={project._id} axis={"y"}>
								<Card
									lightMedia={project.media.light.ref}
									darkMedia={project.media.dark.ref}
									title={project.title}
									description={project.description}
									url={project.url}
									styling={
										"w-5/6 mobileL:w-11/12 desktopS:w-[600px] desktopS:h-[450px] desktopM:w-[800px] desktopM:h-[575px] desktopL:w-[1000px] desktopL:h-[675px] desktopXL:w-[1100px] desktopXL:h-[750px] desktopXXL:w-[1300px] desktopXXL:h-[875px] mx-auto"
									}
								/>
							</Reveal>
						))}
				</div>
			</div>
		</div>
	);
};

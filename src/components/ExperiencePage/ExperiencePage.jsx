import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { ExperienceTimeline } from "./components/Timeline";

export const ExperiencePage = ({ setSelectedPage }) => {
	const ref = useRef();
	const { inViewport } = useInViewport(ref, { threshold: 0.7 });

	useEffect(() => {
		if (inViewport) setSelectedPage("experience");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="experience"
			className={`relative flex flex-col justify-center w-full h-[calc(100vh-86px)] desktopXL:min-h-[750px] desktopL:min-h-[700px] desktopM:min-h-[575px] mobileL:min-h-[700px] mobileN:min-h-[700px] mobileS:min-h-[750px] min-h-[850px]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute mx-auto top-0">
					<div
						className={`font-openSans leading-tight font-extrabold desktopL:text-[60px] desktopM:text-[50px] mobileL:text-[45px] mobileN:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue`}
					>
						Experience
					</div>
				</div>
			</div>
			<div className="flex w-2/3 mx-auto">
				<ExperienceTimeline />
			</div>
		</div>
	);
};

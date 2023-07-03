import { Reveal } from "components/Reveal";
import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const SkillsPage = ({ setSelectedPage }) => {
	const ref = useRef();
	const { inViewport } = useInViewport(ref, { threshold: 0.7 });

	useEffect(() => {
		if (inViewport) setSelectedPage("skills");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="skills"
			className={`relative flex flex-col justify-center w-full h-[calc(100vh-86px)]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute mx-auto top-0">
					<Reveal>
						<div
							className={`font-openSans leading-tight font-extrabold desktopL:text-[70px] desktopM:text-[60px] desktopS:text-[50px] mobileL:text-[45px] mobileM:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue`}
						>
							Skills
						</div>
					</Reveal>
				</div>
			</div>
		</div>
	);
};

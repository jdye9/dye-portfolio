import BannerPicture from "../../assets/me.png";
import { Socials } from "components/Socials";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Reveal } from "components/Reveal";

export const LandingPage = ({ setSelectedPage }) => {
	const ref = useRef();
	const { inViewport } = useInViewport(ref, { threshold: 0.7 });

	useEffect(() => {
		if (inViewport) setSelectedPage("home");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="home"
			className="flex flex-col justify-center w-full h-[calc(100vh-86px)] desktopL:min-h-[840px] desktopM:min-h-[750px] mobileL:min-h-[625px] mobileM:min-h-[525px] mobileS:min-h-[450px] min-h-[425px]"
			ref={ref}
		>
			<div className="flex flex-col justify-center mx-auto w-2/3">
				<div className="flex flex-col justify-left">
					<Reveal>
						<div className="flex w-full mx-auto font-openSans leading-tight font-extrabold text-left desktopL:text-[110px] desktopM:text-[90px] mobileL:text-[70px] mobileM:text-[60px] mobileS:text-[50px] text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							Jared Dye
						</div>
					</Reveal>
					<Reveal>
						<div className="flex w-full mx-auto flex-wrap font-openSans leading-tight font-extrabold text-left desktopL:text-[50px] desktopM:text-[45px] mobileL:text-[35px] mobileM:text-[30px] mobileS:text-[25px] text-[20px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							a UI Engineer based in the Bay Area.
						</div>
					</Reveal>
					<Reveal>
						<Socials />
					</Reveal>
				</div>
			</div>
		</div>
	);
};

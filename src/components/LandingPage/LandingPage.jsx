import { useMediaQuery } from "hooks/useMediaQuery";
import BannerPicture from "../../assets/me.png";
import { Socials } from "components/Socials";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const LandingPage = ({ setSelectedPage }) => {
	const ref = useRef();
	const { inViewport } = useInViewport(ref, { threshold: 0.7 });
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		if (inViewport) setSelectedPage("home");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div id="home" className="w-full pt-[20px] pb-[100px]" ref={ref}>
			{isAboveMediumScreens && (
				<div className="flex flex-col justify-center mx-auto w-11/12">
					<div className="h-[509px] w-[600px] mx-auto">
						<img src={BannerPicture} className="mx-auto" alt="me" />
					</div>
					<div className="flex flex-col justify-center">
						<div className="font-openSans leading-tight font-extrabold text-center text-[100px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							Jared Dye
						</div>
						<div className="font-openSans leading-tight font-extrabold text-center text-[50px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							<TypeAnimation
								sequence={[
									"UI Engineer",
									3000,
									"Problem Solver",
									3000,
									"Proud Cat Dad",
									3000,
									"Video Game Enthusiast",
									3000,
								]}
								speed={10}
								repeat={Infinity}
							/>
						</div>
						<Socials size="large" />
					</div>
				</div>
			)}
			{!isAboveMediumScreens && isAboveSmallScreens && (
				<div className="flex flex-col justify-center mx-auto w-11/12">
					<img src={BannerPicture} className="mx-auto w-[500px]" alt="me" />
					<div className="flex flex-col justify-center">
						<div className="font-openSans leading-tight font-extrabold text-center text-[90px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							Jared Dye
						</div>
						<div className="font-openSans leading-tight font-extrabold text-center text-[45px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							<TypeAnimation
								sequence={[
									"UI Engineer",
									3000,
									"Problem Solver",
									3000,
									"Proud Cat Dad",
									3000,
									"Video Game Enthusiast",
									3000,
								]}
								speed={10}
								repeat={Infinity}
							/>
						</div>
						<Socials size="medium" />
					</div>
				</div>
			)}
			{!isAboveSmallScreens && (
				<div className="flex flex-col justify-center mx-auto w-11/12">
					<img src={BannerPicture} className="mx-auto w-[400px]" alt="me" />
					<div className="flex flex-col justify-center">
						<div className="font-openSans leading-tight font-extrabold text-center mobileL:text-[70px] mobileN:text-[60px] mobileS:text-[50px] text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							Jared Dye
						</div>
						<div className="font-openSans leading-tight font-extrabold text-center mobileL:text-[35px] mobileN:text-[30px] mobileS:text-[25px] text-[20px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							<TypeAnimation
								sequence={[
									"UI Engineer",
									3000,
									"Problem Solver",
									3000,
									"Proud Cat Dad",
									3000,
									"Video Game Enthusiast",
									3000,
								]}
								speed={10}
								repeat={Infinity}
							/>
						</div>
						<Socials size="medium" />
					</div>
				</div>
			)}
		</div>
	);
};

import BannerPicture from "../../assets/me.png";
import { Socials } from "components/Socials";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

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
			className="flex flex-col justify-center w-full h-[calc(100vh-86px)] desktopL:min-h-[840px] desktopM:min-h-[750px] mobileL:min-h-[625px] mobileN:min-h-[525px] mobileS:min-h-[450px] min-h-[425px]"
			ref={ref}
		>
			<div className="flex flex-col justify-center mx-auto w-11/12">
				<div className="mx-auto justify-center desktopL:w-[575px] desktopL:h-[488px] desktopM:w-[500px] desktopM:h-[423px] mobileL:w-[400px] mobileL:h-[340px] mobileN:w-[300px] mobileN:h-[255px] w-[250px] h-[212px]">
					<img
						src={BannerPicture}
						className="mx-auto desktopL:w-[575px] desktopM:w-[500px] mobileL:w-[400px] mobileN:w-[300px] w-[250px]"
						alt="me"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<div className="font-openSans leading-tight font-extrabold text-center desktopL:text-[110px] desktopM:text-[90px] mobileL:text-[70px] mobileN:text-[60px] mobileS:text-[50px] text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
						Jared Dye
					</div>
					<div className="font-openSans leading-tight font-extrabold text-center desktopL:text-[50px] desktopM:text-[45px]  mobileL:text-[35px] mobileN:text-[30px] mobileS:text-[25px] text-[20px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
						<TypeAnimation
							sequence={[
								"UI Engineer",
								3000,
								"UI Designer",
								3000,
								"Scrum Master",
								3000,
							]}
							speed={10}
							repeat={Infinity}
						/>
					</div>
					<Socials />
				</div>
			</div>
		</div>
	);
};

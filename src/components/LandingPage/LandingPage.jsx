import { useMediaQuery } from "hooks/useMediaQuery";
import me from "assets/me.png";
import { Socials } from "components/Socials";
import { TypeAnimation } from "react-type-animation";

export const LandingPage = ({ setSelectedPage }) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	return (
		<div id="home" className="h-[1000px] w-11/12 mx-auto pt-[86px]">
			{isAboveMediumScreens && (
				<div className="flex flex-col justify-center mx-auto h-full w-11/12">
					<img src={me} className="mx-auto w-[600px]" alt="me" />
					<div className="flex flex-col">
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
				<div className="flex flex-col justify-center mx-auto h-full w-11/12">
					<img src={me} className="mx-auto w-[500px]" alt="me" />
					<div className="flex flex-col">
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
				<div className="flex flex-col justify-center mx-auto h-full w-11/12">
					<img src={me} className="mx-auto w-[400px]" alt="me" />
					<div className="flex flex-col">
						<div className="font-openSans leading-tight font-extrabold text-center text-[70px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
							Jared Dye
						</div>
						<div className="font-openSans leading-tight font-extrabold text-center text-[35px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
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

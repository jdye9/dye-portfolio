import { useMediaQuery } from "hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import me from "assets/me.png";
import { Socials } from "components/Socials";

export const LandingPage = ({ setSelectedPage }) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	return (
		<div id="home" className="md:flex md:justify-between md:h-full gap-16">
			{isAboveMediumScreens && (
				<div className="mx-auto md:order-2 flex-justify-center py-10 mt-28">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1.5 }}
						variants={{
							hidden: { opacity: 0, x: -200 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className="flex relative z-0">
							<div className="absolute flex flex-col justify-center top-20 -left-10 w-[910px] h-4/5 bg-gradient-to-br from-light-purple to-light-blue z-[-1]">
								<div className="font-openSans font-bold opacity-60 text-white text-[100px] w-[550px] text-center">
									Jared Dye
								</div>
								<div className="font-openSans font-bold opacity-60 text-white text-[50px] w-[550px] text-center">
									UI Engineer
								</div>
								<Socials size="large" />
							</div>
							<img className="w-[325px] ml-[500px]" src={me} alt="me" />
						</div>
					</motion.div>
				</div>
			)}
			{!isAboveMediumScreens && isAboveSmallScreens && (
				<div className="mx-auto md:order-2 flex-justify-center py-10 mt-32">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1.5 }}
						variants={{
							hidden: { opacity: 0, x: -200 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className="flex relative z-0">
							<div className="absolute flex flex-col justify-center top-16 -left-2 w-[625px] h-4/5 bg-gradient-to-br from-light-purple to-light-blue z-[-1]">
								<div className="font-openSans font-bold opacity-60 text-white text-[65px] w-[350px] text-center">
									Jared Dye
								</div>
								<div className="font-openSans font-bold opacity-60 text-white text-[35px] w-[350px] text-center">
									UI Engineer
								</div>
								<Socials size="medium" />
							</div>
							<img className="w-[275px] ml-[335px]" src={me} alt="me" />
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
};

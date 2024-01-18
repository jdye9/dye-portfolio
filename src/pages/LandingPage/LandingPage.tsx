import { Socials, Reveal } from "../../components";
import { useEffect, useRef } from "react";
import { useInViewport } from "../../hooks/useInViewport";
import { PageProps } from "../types";
import { useTheme } from "../../providers";

export const LandingPage = ({ setSelectedPage }: PageProps) => {
	const ref = useRef(null);
	const inViewport = useInViewport(ref, 50);
	const {
		state: { gradient },
	} = useTheme();

	useEffect(() => {
		if (inViewport) setSelectedPage("HOME");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="HOME"
			className={`flex flex-col justify-center w-full h-[calc(100vh-80px)] desktopXXL:min-h-[600px] desktopXL:min-h-[450px] desktopL:min-h-[350px] desktopM:min-h-[375px] mobileL:min-h-[320px] mobileM:min-h-[475px] mobileS:min-h-[400px] min-h-[400px]`}
			ref={ref}
		>
			<div className="flex flex-col justify-center w-2/3 mx-auto">
				<div className="flex flex-col justify-left">
					<Reveal axis={"y"}>
						<div
							className={`flex w-full mx-auto font-openSans leading-tight font-extrabold text-left desktopXXL:text-[200px] desktopXL:text-[150px] desktopL:text-[110px] desktopM:text-[90px] mobileL:text-[70px] mobileM:text-[48px] text-[40px] text-transparent bg-clip-text ${gradient}`}
						>
							Jared Dye
						</div>
					</Reveal>
					<Reveal axis={"y"}>
						<div
							className={`flex w-full mx-auto flex-wrap font-openSans leading-tight font-extrabold text-left desktopXXL:text-[80px] desktopXL:text-[60px] desktopL:text-[50px] desktopM:text-[45px] mobileL:text-[35px] mobileM:text-[25px] text-[20px] text-transparent bg-clip-text ${gradient}`}
						>
							UI Engineer
						</div>
					</Reveal>
					<Reveal axis={"y"}>
						<Socials />
					</Reveal>
				</div>
			</div>
		</div>
	);
};

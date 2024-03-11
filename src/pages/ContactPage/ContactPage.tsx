import { useEffect, useRef } from "react";
import { useInViewport } from "../../hooks/useInViewport";
import { PageProps } from "../types";
import { Reveal } from "../../components";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { useTheme } from "../../providers";

export const ContactPage = ({ setSelectedPage }: PageProps) => {
	const ref = useRef(null);
	const inViewport = useInViewport(ref, 50);
	const {
		state: { gradient },
	} = useTheme();

	useEffect(() => {
		if (inViewport) setSelectedPage("CONTACT");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="CONTACT"
			className={`z-0 relative flex flex-col justify-center w-full h-[calc(100vh-72px)] min-h-[975px] mobileS:min-h-[1000px] desktopS:min-h-[1025px] desktopM:min-h-[1175px] desktopL:min-h-[1250px] desktopXL:min-h-[1350px] desktopXXL:min-h-[1475px]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute top-0 mx-auto">
					<Reveal axis={"y"}>
						<div
							className={`font-openSans leading-tight font-extrabold desktopXXL:text-[90px] desktopXL:text-[80px] desktopL:text-[70px] desktopM:text-[60px] desktopS:text-[50px] mobileL:text-[45px] mobileM:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text ${gradient}`}
						>
							Contact
						</div>
					</Reveal>
				</div>
				<div className="flex flex-wrap justify-center w-full">
					<ContactCard />
				</div>
			</div>
		</div>
	);
};

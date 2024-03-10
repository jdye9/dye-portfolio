import AnchorLink from "react-anchor-link-smooth-scroll";
import { CustomIconButton, CustomTextIconButton } from "..";
import { useTheme } from "../../providers";

export const Socials = () => {
	const {
		state: { gradient },
	} = useTheme();
	return (
		<div className="flex flex-col w-full gap-4 mx-auto mt-4 mobileL:flex-row">
			<div className="flex flex-wrap gap-4">
				<CustomIconButton
					icon="fab fa-linkedin-in desktopXL:text-5xl desktopM:text-4xl text-3xl text-white dark:text-[#1A1A40]"
					link="https://www.linkedin.com/in/jareddye379/"
					rippleColor="bg-white dark:bg-[#1A1A40]"
					styling={`desktopXXL:h-20 desktopL:h-16 h-12 desktopXXL:w-20 desktopL:w-16 w-12 hover:cursor-pointer ${gradient} dark:shadow-gray-800 shadow-gray-200 hover:shadow-lg hover:shadow-gray-200 dark:hover:outline dark:shadow-none dark:hover:outline-2 dark:hover:outline-white`}
				/>
				<CustomIconButton
					icon="fab fa-github desktopXL:text-5xl desktopM:text-4xl text-3xl text-white dark:text-[#1A1A40]"
					link="https://github.com/jdye9"
					rippleColor="bg-white dark:bg-[#1A1A40]"
					styling={`desktopXXL:h-20 desktopL:h-16 h-12 desktopXXL:w-20 desktopL:w-16 w-12 hover:cursor-pointer ${gradient} dark:shadow-gray-800 shadow-gray-200 hover:shadow-lg hover:shadow-gray-200 dark:hover:outline dark:shadow-none dark:hover:outline-2 dark:hover:outline-white`}
				/>
				<AnchorLink href="#CONTACT" offset={72}>
					<CustomTextIconButton
						icon="fas fa-paper-plane desktopXXL:text-4xl desktopL:text-3xl text-2xl text-white dark:text-[#1A1A40]"
						text="contact"
						textStyling="desktopXXL:text-2xl desktopXL:text-xl desktopM:text-lg text-sm font-openSans uppercase font-bold text-white dark:text-[#1A1A40]"
						styling={`desktopXXL:h-20 desktopL:h-16 h-12 desktopXXL:w-52 desktopL:w-44 w-40 ${gradient} shadow-gray-200 hover:shadow-lg hover:shadow-gray-200 dark:hover:outline dark:shadow-none dark:hover:outline-2 dark:hover:outline-white mx-left`}
						rippleColor="bg-white dark:bg-[#1A1A40]"
					/>
				</AnchorLink>
			</div>
		</div>
	);
};

import LightLogo from "../../assets/white-logo.svg";
import DarkLogo from "../../assets/dark-logo.svg";
import { useDarkMode } from "../../providers";

export const Footer = () => {
	const {
		state: { isDarkMode },
	} = useDarkMode();
	return (
		<footer className="w-full shadow bg-gradient-to-br from-light-purple to-light-blue">
			<div className="flex items-center justify-between w-full p-4 mx-auto">
				<img
					src={isDarkMode ? DarkLogo : LightLogo}
					alt="logo"
					className="h-[30px] w-[30px]"
				/>
				<span className="text-base font-bold text-white dark:text-[#1A1A40] font-openSans">
					© 2023 Dye™
				</span>
			</div>
		</footer>
	);
};

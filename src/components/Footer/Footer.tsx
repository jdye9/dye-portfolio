import LightLogo from "../../assets/white-logo.svg";
import DarkLogo from "../../assets/dark-logo.svg";
import { useTheme } from "../../providers";

export const Footer = () => {
	const {
		state: { isDarkMode, gradient },
	} = useTheme();
	return (
		<footer className={`w-full shadow ${gradient}`}>
			<div className="flex items-center justify-between w-full p-4 mx-auto">
				<img
					src={isDarkMode ? DarkLogo : LightLogo}
					alt="logo"
					className="h-[30px] w-[30px]"
				/>
				<span className="text-base font-bold text-white dark:text-[#1A1A40] font-chakraPetch">
					© 2023 Dye™
				</span>
			</div>
		</footer>
	);
};

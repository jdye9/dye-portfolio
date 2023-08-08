import Logo from "../../assets/white-logo.svg";

export const Footer = () => {
	return (
		<footer className="w-full shadow bg-gradient-to-br from-light-purple to-light-blue">
			<div className="flex items-center justify-between w-full p-4 mx-auto">
				<img src={Logo} alt="logo" className="h-[30px] w-[30px]" />
				<span className="text-base font-bold text-white font-openSans">
					© 2023 Dye™
				</span>
			</div>
		</footer>
	);
};

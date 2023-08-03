import { CustomIconButton, CustomTextIconButton } from "..";

export const Socials = () => {
	return (
		<div className="flex flex-col w-full gap-4 mx-auto mt-4 mobileL:flex-row">
			<div className="flex gap-4">
				<CustomIconButton
					icon="fab fa-linkedin-in desktopXL:text-5xl desktopM:text-4xl text-3xl"
					height="desktopXXL:h-20 desktopL:h-16 h-12"
					width="desktopXXL:w-20 desktopL:w-16 w-12"
					link="https://www.linkedin.com/in/jareddye379/"
				/>
				<CustomIconButton
					icon="fab fa-github desktopXL:text-5xl desktopM:text-4xl text-3xl"
					height="desktopXXL:h-20 desktopL:h-16 h-12"
					width="desktopXXL:w-20 desktopL:w-16 w-12"
					link="https://github.com/jdye9"
				/>
			</div>
			<CustomTextIconButton
				icon="fas fa-paper-plane desktopXXL:text-4xl desktopL:text-3xl text-2xl"
				text="contact me"
				textStyling="desktopXXL:text-2xl desktopXL:text-xl desktopM:text-lg text-sm font-openSans uppercase font-bold"
				height="desktopXXL:h-20 desktopL:h-16 h-12"
				width="desktopXXL:w-52 desktopL:w-44 w-40"
			/>
		</div>
	);
};

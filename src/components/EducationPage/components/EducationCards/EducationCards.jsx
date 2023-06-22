import { useMediaQuery } from "hooks/useMediaQuery";
import { pageText } from "./fixtures";

export const EducationCards = ({ selectedBook, selectedBookColors }) => {
	console.log(selectedBookColors[selectedBook]);
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

	const desktopStyling = (
		<div className="bg-gradient-to-br from-light-purple to-light-blue rounded-[20px] mx-auto desktopL:w-[550px] w-5/6 shadow-md p-1.5">
			<div
				className={`rounded-[20px] bg-white h-full w-full mx-auto p-5 shadow-md`}
			>
				<div className="flex flex-col font-openSans text-white h-full w-full">
					<div className="font-openSans leading-tight font-extrabold text-[70px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
						{pageText[selectedBook].title}
					</div>
					<div className="flex flex-col justify-around my-auto w-full gap-5 pt-10">
						{pageText[selectedBook].information.map((info) => (
							<div className="flex font-openSans leading-tight font-extrabold text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
								<div className="mr-5">✏</div>
								{info}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);

	const mobileStyling = (
		<div className="bg-gradient-to-br from-light-purple to-light-blue rounded-[20px] mx-auto w-5/6 shadow-md p-1">
			<div
				className={`rounded-[20px] bg-white h-full w-full mx-auto p-5 shadow-md`}
			>
				<div className="flex flex-col font-openSans text-white h-full w-full">
					<div className="font-openSans leading-tight font-extrabold mobileL:text-[50px] mobileN:text-[40px] mobileS:text-[35px] mobileXS:text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
						{pageText[selectedBook].title}
					</div>
					<div className="flex flex-col justify-around my-auto w-full gap-5 pt-5">
						{pageText[selectedBook].information.map((info) => (
							<div className="flex font-openSans leading-tight font-extrabold mobileS:text-[25px] mobileN:text-[30px] mobileL:text-[40px] mobileXS:text-[20px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
								<div className="mr-3">✏</div>
								{info}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);

	return isAboveSmallScreens ? desktopStyling : mobileStyling;
};

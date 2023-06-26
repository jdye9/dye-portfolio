import { pageText } from "./fixtures";

export const EducationCards = ({ selectedBook }) => {
	return (
		<div className="bg-gradient-to-br from-light-purple to-light-blue rounded-[20px] mx-auto desktopL:w-[550px] desktopM:w-4/6 w-5/6 shadow-md desktopM:p-1.5 p-1">
			<div
				className={`rounded-[20px] bg-white h-full w-full mx-auto p-5 shadow-md`}
			>
				<div className="flex flex-col font-openSans text-white h-full w-full">
					<div className="font-openSans leading-tight font-extrabold desktopL:text-[70px] desktopM:text-[60px] mobileS:text-[30px] mobileN:text-[35px] mobileL:text-[45px] text-[25px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
						{pageText[selectedBook].title}
					</div>
					<div className="flex flex-col justify-around my-auto w-full gap-5 pt-10">
						{pageText[selectedBook].information.map((info) => (
							<div className="flex font-openSans leading-tight font-extrabold desktopL:text-[45px] desktopM:text-[35px] mobileS:text-[25px] mobileN:text-[30px] mobileL:text-[40px] text-[20px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
								<div className="desktopM:mr-5 mr-3">✏</div>
								{info}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

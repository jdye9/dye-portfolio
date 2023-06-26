import { Books, EducationCards } from "./components";
import { useEffect, useRef, useState } from "react";
import { CustomTooltip } from "../CustomTooltip";
import { useInViewport } from "react-in-viewport";

export const EducationPage = ({ setSelectedPage }) => {
	const [selectedBook, setSelectedBook] = useState("");
	const selectedBookColors = {
		book1: "#cdc1ee",
		book2: "#ccc9f1",
		book3: "#cbd1f4",
		book4: "#cad9f7",
		book5: "#c9e2f8",
	};
	const ref = useRef();
	const { inViewport } = useInViewport(ref, { threshold: 0.7 });

	useEffect(() => {
		if (inViewport) setSelectedPage("education");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div id="education" className="w-full pt-[20px] pb-[100px]" ref={ref}>
			<div className="w-11/12 mx-auto">
				<div className="flex justify-center">
					<div
						className={`font-openSans leading-tight font-extrabold desktopL:text-[110px] desktopM:text-[90px] mobileL:text-[70px] mobileN:text-[60px] mobileS:text-[50px] text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue`}
					>
						Education
					</div>
					<CustomTooltip width={"w-50"} />
				</div>

				<div
					className={`flex desktopL:flex-row flex-col desktopL:my-auto mx-auto justify-around pt-10 desktopL:gap-0 gap-5`}
				>
					<div className="flex items-center mx-auto desktopL:mx-0 desktopL:my-auto desktopL:h-[400px] desktopL:w-[400px] desktopM:h-[350px] desktopM:w-[350px]">
						<Books
							height="100%"
							width="100%"
							selectedBook={selectedBook}
							setSelectedBook={setSelectedBook}
							selectedBookColors={selectedBookColors}
						/>
					</div>
					{selectedBook && (
						<div>
							<EducationCards selectedBook={selectedBook} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

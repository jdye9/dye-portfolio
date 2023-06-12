import { useMediaQuery } from "hooks/useMediaQuery";
import { Books, EducationCards } from "./components";
import { useState } from "react";
import { CustomTooltip } from "../CustomTooltip";

export const EducationPage = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	// const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	const [selectedBook, setSelectedBook] = useState("");
	const selectedBookColors = {
		book1: "#cdc1ee",
		book2: "#ccc9f1",
		book3: "#cbd1f4",
		book4: "#cad9f7",
		book5: "#c9e2f8",
	};
	return (
		<div id="education" className="flex h-[1000px]">
			{isAboveMediumScreens && (
				<div
					className={`flex w-11/12 ${
						selectedBook ? "justify-around" : "justify-center"
					} mx-auto my-auto`}
				>
					<div className="flex">
						<Books
							height="450"
							width="450"
							selectedBook={selectedBook}
							setSelectedBook={setSelectedBook}
							selectedBookColors={selectedBookColors}
						/>
						<CustomTooltip />
					</div>
					{selectedBook && (
						<div className="w-2/5">
							<EducationCards
								selectedBook={selectedBook}
								selectedBookColors={selectedBookColors}
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

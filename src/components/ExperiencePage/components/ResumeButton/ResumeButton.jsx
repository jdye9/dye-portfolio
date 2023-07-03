import { Button } from "@material-tailwind/react";
import { Reveal } from "components/Reveal";

export const ResumeButton = () => {
	return (
		<Reveal>
			<div className="flex justify-center mx-auto items-center gap-4">
				<Button
					size="lg"
					className="flex items-center gap-3 bg-gradient-to-br from-light-purple to-light-blue shadow-gray-200 active:shadow-lg shadow-md hover:shadow-gray-200 font-openSans"
					onClick={(e) => e.currentTarget.blur()}
				>
					<i className="fa-solid fa-download" />
					Download Resume
				</Button>
			</div>
		</Reveal>
	);
};

import { Button, IconButton } from "@material-tailwind/react";

export const Socials = () => {
	return (
		<div className="w-full flex mx-auto gap-4 mt-4">
			<IconButton
				size="lg"
				className="bg-gradient-to-br from-light-purple to-light-blue shadow-gray-200 active:shadow-lg shadow-md hover:shadow-gray-200"
				onClick={(e) => e.currentTarget.blur()}
			>
				<i className="fab fa-linkedin-in text-3xl" />
			</IconButton>
			<IconButton
				size="lg"
				className="bg-gradient-to-br from-light-purple to-light-blue shadow-gray-200 active:shadow-lg shadow-md hover:shadow-gray-200"
				onClick={(e) => e.currentTarget.blur()}
			>
				<i className="fab fa-github text-3xl" />
			</IconButton>
			<Button
				size="lg"
				className="flex items-center gap-3 bg-gradient-to-br from-light-purple to-light-blue shadow-gray-200 active:shadow-lg shadow-md hover:shadow-gray-200 font-openSans"
				onClick={(e) => e.currentTarget.blur()}
			>
				<i className={"fas fa-paper-plane"} />
				Contact Me
			</Button>
		</div>
	);
};

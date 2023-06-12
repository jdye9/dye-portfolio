import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail2 } from "react-icons/im";

export const Socials = ({ size }) => {
	const largeScreen = (
		<div className="bg-gradient-to-br from-light-purple to-light-blue rounded-full mx-auto w-[250px] mt-3 p-2">
			<div className="bg-white rounded-full relative mx-auto flex text-[50px] justify-center p-4 gap-4 h-full w-full">
				<a
					className="relative top-[-1px] rounded-full text-white transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="github"
					href="https://github.com/jdye9"
				>
					<FaGithub viewBox="30 88 435 400" />
				</a>
				<a
					className="relative rounded-full text-white transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="linkedin"
					href="https://www.linkedin.com/in/jareddye379/"
				>
					<FaLinkedin viewBox="0 57 448 400" />
				</a>
				<a
					className="relative top-[1px] rounded-full text-white transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="email"
					href="contact"
				>
					<ImMail2 />
				</a>
			</div>
		</div>
	);

	const mediumScreen = (
		<div className="bg-gradient-to-br from-light-purple to-light-blue rounded-full mx-auto w-[200px] mt-3 p-2">
			<div className="bg-white rounded-full relative mx-auto flex text-[40px] justify-center p-4 gap-4 h-full w-full">
				<a
					className="relative top-[-1px] rounded-full text-white transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="github"
					href="https://github.com/jdye9"
				>
					<FaGithub viewBox="30 88 435 400" />
				</a>
				<a
					className="relative rounded-full text-white transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="linkedin"
					href="https://www.linkedin.com/in/jareddye379/"
				>
					<FaLinkedin viewBox="0 57 448 400" />
				</a>
				<a
					className="relative top-[1px] rounded-full text-white transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="email"
					href="contact"
				>
					<ImMail2 />
				</a>
			</div>
		</div>
	);

	return size === "large" ? largeScreen : mediumScreen;
};

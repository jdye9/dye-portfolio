import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail2 } from "react-icons/im";

export const Socials = () => {
	return (
		<div className="bg-gradient-to-br from-light-purple to-light-blue rounded-full mx-auto desktopL:w-[250px] desktopM:w-[200px] mobileL:w-[175px] w-[150px] mt-3 p-1">
			<div className="bg-white rounded-full relative mx-auto flex desktopL:text-[50px] desktopM:text-[40px] mobileL:text-[35px] text-[30px] justify-center p-4 gap-4 h-full w-full">
				<a
					className="relative top-[-1px] rounded-full text-white transition duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="github"
					href="https://github.com/jdye9"
				>
					<FaGithub viewBox="30 88 435 400" />
				</a>
				<a
					className="relative rounded-full text-white transition duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="linkedin"
					href="https://www.linkedin.com/in/jareddye379/"
				>
					<FaLinkedin viewBox="0 57 448 400" />
				</a>
				<a
					className="relative top-[1px] rounded-full text-white transition duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
					id="email"
					href="contact"
				>
					<ImMail2 />
				</a>
			</div>
		</div>
	);
};

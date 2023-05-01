import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const Socials = ({ size }) => {
	const largeScreen = (
		<div className="flex w-[550px] text-[50px] justify-center pt-4 gap-4">
			<a
				className="text-white opacity-60 hover:scale-125 transition duration-1000 hover:opacity-100"
				id="github"
				href="https://github.com/jdye9"
			>
				<FaGithub />
			</a>
			<a
				className="text-white opacity-60 hover:scale-125 transition duration-1000 hover:opacity-100"
				id="linkedin"
				href="https://www.linkedin.com/in/jareddye379/"
			>
				<FaLinkedin />
			</a>
			<a
				className="text-white opacity-60 hover:scale-125 transition duration-1000 hover:opacity-100"
				id="email"
				href="contact"
			>
				<HiMail />
			</a>
		</div>
	);

	const mediumScreen = (
		<div className="flex w-[350px] text-[40px] justify-center pt-4 gap-4">
			<a
				className="text-white opacity-60 hover:scale-125 transition duration-1000 hover:opacity-100"
				id="github"
				href="https://github.com/jdye9"
			>
				<FaGithub />
			</a>
			<a
				className="text-white opacity-60 hover:scale-125 transition duration-1000 hover:opacity-100"
				id="linkedin"
				href="https://www.linkedin.com/in/jareddye379/"
			>
				<FaLinkedin />
			</a>
			<a
				className="text-white opacity-60 hover:scale-125 transition duration-1000 hover:opacity-100"
				id="email"
				href="contact"
			>
				<HiMail />
			</a>
		</div>
	);

	return size === "large" ? largeScreen : mediumScreen;
};

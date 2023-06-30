import GenpactImg from "../../../../assets/genpact.png";
import CDKImg from "../../../../assets/CDK.svg";

export const ExperienceTimeline = () => {
	return (
		<div className="w-full font-openSans">
			<ol className="relative border-l border-gray-200 dark:border-gray-700">
				<li className="mb-10 ml-10">
					<span className="absolute flex items-center justify-center desktopXL:w-16 desktopXL:h-16 mobileL:w-12 mobileL:h-12 h-9 w-9 bg-gradient-to-br from-light-purple to-light-blue rounded desktopXL:-left-8 mobileL:-left-6 mobileL:ring-8 -left-[18px] ring-6 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<img src={GenpactImg} alt="Genpact" className="w-full" />
					</span>
					<h3 className="flex items-center mb-1 desktopXL:text-3xl desktopL:text-2xl desktopM:text-xl mobileL:text-lg text-md font-semibold text-gray-900 dark:text-white">
						Genpact - Associate Software Engineer{" "}
					</h3>
					<time className="block mb-2 desktopL:text-lg desktopM:text-md mobileL:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
						April 2023 - Present
					</time>
					<p className="mb-4 desktopXL:text-2xl desktopL:text-lg desktopM:text-md mobileL:text-sm text-xs font-normal text-gray-500 dark:text-gray-400">
						<ul className="space-y-1 text-gray-500 list-disc dark:text-gray-400">
							<li>
								Continuing to serve CDK Global in a contractor capacity working
								on the same projects as before.
							</li>
							<li>
								Organize sprint planning, grooming, retrospectives, and daily
								stand-ups in the Scrum-Master role.
							</li>
						</ul>
					</p>
				</li>
				<li className="ml-10">
					<span className="absolute flex items-center justify-center desktopXL:w-16 desktopXL:h-16 mobileL:w-12 mobileL:h-12 h-9 w-9 bg-gradient-to-br from-light-purple to-light-blue rounded desktopXL:-left-8 mobileL:-left-6 mobileL:ring-8 -left-[18px] ring-6 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<img src={CDKImg} alt="CDK" className="w-1/2" />
					</span>
					<h3 className="flex items-center mb-1 desktopXL:text-3xl desktopL:text-2xl desktopM:text-xl mobileL:text-lg text-md font-semibold text-gray-900 dark:text-white">
						CDK Global - Associate Software Engineer{" "}
					</h3>
					<time className="block mb-2 desktopL:text-lg desktopM:text-md mobileL:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
						August 2022 - April 2023
					</time>
					<p className="desktopXL:text-2xl desktopL:text-lg desktopM:text-md mobileL:text-sm text-xs font-normal text-gray-500 dark:text-gray-400">
						<ul className="space-y-1 text-gray-500 list-disc dark:text-gray-400">
							<li>
								Contributed to modernization efforts of the company's flagship
								product offerings in the DMS (Dealer Management System) space
								through UI design, implementation, and testing.
							</li>
							<li>
								Directly involved in the design, implementation, and testing of
								3 applications of significant strategic importance to the
								company and its consumers.
							</li>
							<li>
								Played a leading role in the implementation of enterprise grade
								analytics software into one of the company’s main product
								offerings.
							</li>
						</ul>
					</p>
				</li>
			</ol>
		</div>
	);
};

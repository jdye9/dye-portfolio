import { Reveal } from "..";
import { TimelineProps } from "./types";

export const Timeline = ({ timeLineItems }: TimelineProps) => {
	return (
		<div className="w-full font-openSans">
			<ol className="relative border-l border-gray-300">
				{timeLineItems.map((item) => (
					<Reveal axis={"y"}>
						<li className="mb-10 ml-8 desktopL:ml-12 mobileL:ml-10">
							<span className="absolute flex items-center justify-center desktopXXL:w-24 desktopXXL:h-24 desktopL:w-16 desktopL:h-16 mobileL:w-12 mobileL:h-12 h-9 w-9 bg-gradient-to-br from-light-purple to-light-blue rounded-full desktopXXL:-left-12 desktopL:-left-8 mobileL:-left-6 mobileL:ring-8 -left-[18px] ring-4 ring-white">
								<img
									src={item.icon}
									alt={`${item.title}`}
									className={`${item.iconSize}`}
								/>
							</span>
							<h3 className="flex items-center mb-1 font-semibold text-gray-900 desktopXXL:ml-6 desktopXXL:text-5xl desktopXL:text-4xl desktopL:text-3xl desktopM:text-2xl desktopS:text-xl mobileL:text-lg text-md dark:text-white">
								{item.title}
							</h3>
							<time className="block mb-2 text-xs font-normal leading-none text-gray-400 desktopXXL:ml-6 desktopXXL:text-3xl desktopXL:text-2xl desktopL:text-xl desktopM:text-lg desktopS:text-md mobileL:text-sm dark:text-gray-500">
								{item.duration}
							</time>
							<div className="mb-4 text-xs font-normal text-gray-500 desktopXXL:text-3xl desktopL:text-2xl desktopM:text-lg desktopS:text-md mobileL:text-sm dark:text-gray-400">
								<ul className="space-y-1 list-disc list-outside desktopXXL:ml-8">
									{item.lineItems.map((lineItem) => (
										<li>{lineItem}</li>
									))}
								</ul>
							</div>
						</li>
					</Reveal>
				))}
			</ol>
		</div>
	);
};

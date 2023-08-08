import { useEffect, useState } from "react";
import { Reveal } from "../../Reveal";
import { TimelineItemProps } from "./types";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Logo from "../../../assets/white-logo.svg";

export const TimelineItem = ({ timelineItem }: TimelineItemProps) => {
	const storage = getStorage();
	const imgRef = ref(storage, timelineItem.icon);

	const [downloadUrl, setDownloadUrl] = useState("");
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		if (downloadUrl) setLoader(false);
	}, [downloadUrl]);

	useEffect(() => {
		setLoader(true);
		getDownloadURL(imgRef)
			.then((result) => {
				setDownloadUrl(result);
			})
			.catch(() => setLoader(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Reveal axis={"y"}>
			<li className="mb-10 ml-8 desktopL:ml-12 mobileL:ml-10">
				<span className="absolute flex items-center justify-center desktopXXL:w-24 desktopXXL:h-24 desktopL:w-16 desktopL:h-16 mobileL:w-12 mobileL:h-12 h-9 w-9 bg-gradient-to-br from-light-purple to-light-blue rounded-full desktopXXL:-left-12 desktopL:-left-8 mobileL:-left-6 mobileL:ring-8 -left-[18px] ring-4 ring-white">
					{loader && (
						<img
							src={Logo}
							alt="logo"
							className="animate-spin h-[25px] w-[25px]"
						/>
					)}
					{!loader && (
						<img
							src={downloadUrl}
							alt={`${timelineItem.title}`}
							className={`${timelineItem.iconSize}`}
						/>
					)}
				</span>
				<h3 className="flex items-center mb-1 font-semibold text-gray-900 desktopXXL:ml-6 desktopXXL:text-5xl desktopXL:text-4xl desktopL:text-3xl desktopM:text-2xl desktopS:text-xl mobileL:text-lg text-md dark:text-white">
					{timelineItem.title}
				</h3>
				<time className="block mb-2 text-xs font-normal leading-none text-gray-400 desktopXXL:ml-6 desktopXXL:text-3xl desktopXL:text-2xl desktopL:text-xl desktopM:text-lg desktopS:text-md mobileL:text-sm dark:text-gray-500">
					{timelineItem.duration}
				</time>
				<div className="mb-4 text-xs font-normal text-gray-500 desktopXXL:text-3xl desktopL:text-2xl desktopM:text-lg desktopS:text-md mobileL:text-sm dark:text-gray-400">
					<ul className="space-y-1 list-disc list-outside desktopXXL:ml-8">
						{timelineItem.lineItems.map((lineItem) => (
							<li key={lineItem}>{lineItem}</li>
						))}
					</ul>
				</div>
			</li>
		</Reveal>
	);
};

import { useEffect, useState } from "react";
import { CardProps } from "./types";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useTheme } from "../../providers";

export const Card = ({
	lightMedia,
	darkMedia,
	title,
	description,
	styling,
	url,
}: CardProps) => {
	const storage = getStorage();
	const imgRefLight = ref(storage, lightMedia);
	const imgRefDark = ref(storage, darkMedia);
	const {
		state: { isDarkMode, gradient },
	} = useTheme();

	const [downloadUrlLight, setDownloadUrlLight] = useState("");
	const [downloadUrlDark, setDownloadUrlDark] = useState("");
	const [initialLoad, setInitialLoad] = useState(true);

	useEffect(() => {
		if (initialLoad) {
			getDownloadURL(imgRefLight).then((result) => {
				setDownloadUrlLight(result);
			});
			setInitialLoad(false);
		}
	}, [imgRefLight, initialLoad]);

	useEffect(() => {
		if (initialLoad) {
			getDownloadURL(imgRefDark).then((result) => {
				setDownloadUrlDark(result);
			});
			setInitialLoad(false);
		}
	}, [imgRefDark, initialLoad]);

	return (
		<a href={url} rel="noreferrer" target="_blank">
			<div
				className={`${styling} rounded-lg shadow-md ${gradient} hover:shadow-lg dark:hover:outline dark:shadow-none dark:hover:outline-2 dark:hover:outline-white`}
			>
				<video
					className={`relative flex items-center mx-auto my-auto rounded-lg shadow-md -top-3 -left-6 ${
						!!isDarkMode ? "hidden" : ""
					}`}
					loop
					muted
					autoPlay
					playsInline
					src={downloadUrlLight}
				/>
				<video
					className={`relative flex items-center mx-auto my-auto rounded-lg shadow-md -top-3 -left-6 ${
						!isDarkMode ? "hidden" : ""
					}`}
					loop
					muted
					autoPlay
					playsInline
					src={downloadUrlDark}
				/>

				<div className="p-5">
					<h5 className="mb-2 text-sm font-bold tracking-tight text-white mobileS:text-base mobileM:text-xl dark:text-[#1A1A40] desktopM:text-2xl desktopXL:text-3xl desktopXXL:text-4xl font-openSans">
						{title}
					</h5>
					<p className="mb-3 text-xs font-normal text-white desktopXXL:text-2xl desktopXL:text-xl dark:text-[#1A1A40] mobileS:text-sm mobileM:text-base desktopM:text-lg font-openSans">
						{description}
					</p>
				</div>
			</div>
		</a>
	);
};

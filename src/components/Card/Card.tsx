import { useEffect, useState } from "react";
import { CardProps } from "./types";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import LightLogo from "../../assets/white-logo.svg";
import DarkLogo from "../../assets/dark-logo.svg";
import { useDarkMode } from "../../providers";

export const Card = ({
	media,
	title,
	description,
	styling,
	url,
}: CardProps) => {
	const storage = getStorage();
	const imgRef = ref(storage, media);

	const [downloadUrl, setDownloadUrl] = useState("");
	const [loader, setLoader] = useState(true);
	const {
		state: { isDarkMode },
	} = useDarkMode();

	useEffect(() => {
		getDownloadURL(imgRef)
			.then((result) => {
				setLoader(false);
				setDownloadUrl(result);
			})
			.catch(() => setLoader(false));
	}, [imgRef]);

	return (
		<div
			className={`${styling} rounded-lg shadow-md bg-gradient-to-br from-light-purple to-light-blue hover:shadow-lg dark:hover:outline dark:shadow-none dark:hover:outline-2 dark:hover:outline-white group`}
		>
			<video
				className="relative flex items-center mx-auto my-auto rounded-lg shadow-md -top-3 -left-6 group-hover:shadow-lg dark:group-hover:outline dark:shadow-none dark:group-hover:outline-2 dark:group-hover:outline-white"
				autoPlay
				loop
				muted
			>
				{loader && (
					<img
						src={isDarkMode ? DarkLogo : LightLogo}
						alt="logo"
						className="animate-spin h-[25px] w-[25px]"
					/>
				)}
				{!loader && <source src={downloadUrl} type="video/mp4" />}
			</video>
			<a href={url} rel="noreferrer" target="_blank">
				<div className="p-5">
					<h5 className="mb-2 text-sm font-bold tracking-tight text-white mobileS:text-base mobileM:text-xl dark:text-[#1A1A40] desktopM:text-2xl desktopXL:text-3xl desktopXXL:text-4xl font-openSans">
						{title}
					</h5>
					<p className="mb-3 text-xs font-normal text-white desktopXXL:text-2xl desktopXL:text-xl dark:text-[#1A1A40] mobileS:text-sm mobileM:text-base desktopM:text-lg font-openSans">
						{description}
					</p>
				</div>
			</a>
		</div>
	);
};

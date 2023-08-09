import { useEffect, useState } from "react";
import { CardProps } from "./types";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import LightLogo from "../../assets/white-logo.svg";
import DarkLogo from "../../assets/dark-logo.svg";
import { useDarkMode } from "../../providers";

export const Card = ({ media, title, description, styling }: CardProps) => {
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
			className={`${styling} border border-gray-200 rounded-lg shadow bg-gradient-to-br from-light-purple to-light-blue`}
		>
			<video
				className="relative flex items-center mx-auto my-auto border border-gray-200 rounded-lg shadow -top-3 -left-6"
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

			<div className="p-5">
				<h5 className="mb-2 text-sm font-bold tracking-tight text-white mobileS:text-base mobileM:text-xl dark:text-[#1A1A40] desktopM:text-2xl desktopXL:text-3xl desktopXXL:text-4xl font-openSans">
					{title}
				</h5>
				<p className="mb-3 text-xs font-normal text-white desktopXXL:text-2xl desktopXL:text-xl dark:text-[#1A1A40] mobileS:text-sm mobileM:text-base desktopM:text-lg font-openSans">
					{description}
				</p>
			</div>
		</div>
	);
};

import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { IconItemProps } from "./types";
import { useEffect, useState } from "react";
import LightLogo from "../../assets/white-logo.svg";
import DarkLogo from "../../assets/dark-logo.svg";
import { useDarkMode } from "../../providers/DarkMode";

export const IconItem = ({ img }: IconItemProps) => {
	const storage = getStorage();
	const imgRef = ref(storage, img);
	const darkModeContext = useDarkMode();

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
		<div className="flex justify-center items-center bg-white dark:bg-gray-600 shadow-md rounded-lg mx-auto desktopXXL:h-[150px] desktopXXL:w-[150px] desktopXL:h-[125px] desktopXL:w-[125px] desktopL:h-[100px] desktopL:w-[100px] desktopM:h-[90px] desktopM:w-[90px] desktopS:h-[80px] desktopS:w-[80px] mobileL:h-[60px] mobileL:w-[60px] mobileM:h-[55px] mobileM:w-[55px] mobileS:h-[50px] mobileS:w-[50px] h-[45px] w-[45px]">
			{loader && (
				<img
					src={darkModeContext.state.isDarkMode ? DarkLogo : LightLogo}
					alt="logo"
					className="animate-spin h-[25px] w-[25px]"
				/>
			)}
			{!loader && <img src={downloadUrl} alt="item" className="w-2/3" />}
		</div>
	);
};

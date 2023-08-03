import { useEffect, useState } from "react";
import { CardProps } from "./types";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const Card = ({ img, title, description, styling }: CardProps) => {
	const storage = getStorage();
	const imgRef = ref(storage, "/Videos/site.mp4");

	const [downloadUrl, setDownloadUrl] = useState("");

	useEffect(() => {
		getDownloadURL(imgRef).then((result) => setDownloadUrl(result));
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
				{downloadUrl && <source src={downloadUrl} type="video/mp4" />}
			</video>

			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-openSans">
					{title}
				</h5>
				<p className="mb-3 font-normal text-white font-openSans">
					{description}
				</p>
			</div>
		</div>
	);
};

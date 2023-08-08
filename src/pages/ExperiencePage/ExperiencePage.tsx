import { useEffect, useRef, useState } from "react";
import { useInViewport } from "../../hooks/useInViewport";
import { Timeline, Reveal, CustomTextIconButton } from "../../components";
import { PageProps } from "../types";
import { ref as firebaseRef, getStorage, getBlob } from "firebase/storage";
import { saveAs } from "file-saver";
import { useGetExperiences } from "../../hooks/useMongoDB";
import { Experience } from "./types";
import { TimelineItem } from "../../components/Timeline/types";

export const ExperiencePage = ({ setSelectedPage }: PageProps) => {
	const ref = useRef(null);
	const inViewport = useInViewport(ref, 50);
	const storage = getStorage();
	const fileRef = firebaseRef(storage, "Documents/jdye_resume.pdf");
	const { data: experiences } = useGetExperiences();
	const [orderedExperiences, setOrderedExperiences] = useState<Experience[]>(
		[]
	);
	const [timelineItems, setTimeLineItems] = useState<TimelineItem[]>([]);

	useEffect(() => {
		if (experiences) {
			const orderedExperiences = [...experiences].sort(
				(currentExperience, nextExperience) =>
					new Date(nextExperience.startDate).getTime() -
					new Date(currentExperience.startDate).getTime()
			);
			setOrderedExperiences(orderedExperiences.reverse());
		}
	}, [experiences, setOrderedExperiences]);

	useEffect(() => {
		if (orderedExperiences) {
			const timelineItems: TimelineItem[] = [...orderedExperiences].map(
				(experience) => ({
					title: experience.experience,
					icon: experience.img.ref,
					iconSize:
						experience.experience.split(" ")[0] === "CDK" ? "w-2/3" : "w-1/2",
					duration: `${new Date(experience.startDate).toLocaleString("en-US", {
						month: "long",
					})} ${new Date(experience.startDate).getFullYear()} - ${
						experience.endDate
							? `${new Date(experience.endDate).toLocaleString("en-US", {
									month: "long",
							  })} ${new Date(experience.endDate).getFullYear()}`
							: "Present"
					}`,
					lineItems: experience.description,
				})
			);
			setTimeLineItems(timelineItems);
		}
	}, [orderedExperiences]);

	const downloadResume = async () => {
		const blob = await getBlob(fileRef);
		saveAs(blob, fileRef.name);
	};

	useEffect(() => {
		if (inViewport) {
			setSelectedPage("EXPERIENCE");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inViewport]);

	return (
		<div
			id="EXPERIENCE"
			className={`relative flex flex-col justify-center w-full h-[calc(100vh-80px)] desktopXXL:min-h-[850px] desktopXL:min-h-[775px] desktopL:min-h-[825px] desktopM:min-h-[745px] desktopS:min-h-[635px] mobileL:min-h-[700px] mobileM:min-h-[740px] mobileS:min-h-[800px] min-h-[900px]`}
			ref={ref}
		>
			<div className="flex w-11/12 mx-auto mt-10">
				<div className="absolute top-0 mx-auto">
					<Reveal axis={"y"}>
						<div
							className={`font-openSans leading-tight font-extrabold desktopXXL:text-[90px] desktopXL:text-[80px] desktopL:text-[70px] desktopM:text-[60px] desktopS:text-[50px] mobileL:text-[45px] mobileM:text-[40px] mobileS:text-[35px] text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue`}
						>
							Experience
						</div>
					</Reveal>
				</div>
			</div>
			<div className="flex w-2/3 mx-auto">
				<Timeline timelineItems={timelineItems} />
			</div>
			<div className="flex justify-center w-2/3 mx-auto">
				<Reveal axis={"y"}>
					<CustomTextIconButton
						icon="fa-solid fa-download desktopXXL:text-4xl desktopM:text-3xl text-2xl text-white"
						text="resume"
						textStyling="desktopXXL:text-2xl desktopXL:text-xl desktopM:text-lg text-sm font-openSans uppercase font-bold text-white"
						styling="desktopXXL:h-20 desktopXXL:w-52 desktopL:h-16 h-12 desktopL:w-44 w-40 mx-auto bg-gradient-to-br from-light-purple to-light-blue shadow-gray-200 hover:shadow-lg hover:shadow-gray-200"
						handleClick={downloadResume}
						rippleColor="bg-white"
					/>
				</Reveal>
			</div>
		</div>
	);
};

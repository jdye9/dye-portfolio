import { TimeLineItem } from "../../components/Timeline/types";
import Genpact from "../../assets/genpact.svg";
import CDK from "../../assets/cdk.svg";

export const timeLineItems: TimeLineItem[] = [
	{
		title: "Genpact - Associate Software Engineer",
		icon: Genpact,
		iconSize: "w-3/6",
		duration: "April 2023 - Present",
		lineItems: [
			"Continuing to serve CDK Global in a contractor capacity working on the same projects as before.",
			"Organize sprint planning, grooming, retrospectives, and daily stand-ups in the Scrum-Master role.",
		],
	},
	{
		title: "CDK - Associate Software Engineer",
		icon: CDK,
		iconSize: "w-2/3",
		duration: "August 2022 - April 2023",
		lineItems: [
			"Contributed to modernization efforts of the company's flagship product offerings in the DMS (Dealer Management System) space through UI design, implementation, and testing.",
			"Directly involved in the design, implementation, and testing of 3 applications of significant strategic importance to the company and its consumers.",
			"Played a leading role in the implementation of enterprise grade analytics software into one of the company’s main product offerings.",
		],
	},
];

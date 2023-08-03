export type TimeLineItem = {
	title: string;
	icon: string;
	iconSize: string;
	duration: string;
	lineItems: string[];
};

export type TimelineProps = {
	timeLineItems: TimeLineItem[];
};

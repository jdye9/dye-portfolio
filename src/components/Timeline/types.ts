export type TimelineItem = {
	title: string;
	icon: string;
	iconSize: string;
	duration: string;
	lineItems: string[];
};

export type TimelineProps = {
	timelineItems: TimelineItem[];
};

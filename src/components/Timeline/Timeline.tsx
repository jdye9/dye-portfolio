import { TimelineProps } from "./types";
import { TimelineItem } from "./TimelineItem/TimelineItem";

export const Timeline = ({ timelineItems }: TimelineProps) => {
	return (
		<div className="w-full font-chakraPetch">
			<ol className="relative border-l border-gray-300">
				{timelineItems.map((item) => (
					<TimelineItem key={item.title} timelineItem={item} />
				))}
			</ol>
		</div>
	);
};

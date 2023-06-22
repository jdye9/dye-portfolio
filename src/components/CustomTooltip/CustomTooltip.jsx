import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export const CustomTooltip = ({ width }) => {
	return (
		<Tooltip
			content={
				<div className={`${width}`}>
					<Typography color="white" className="font-medium">
						Education Summary
					</Typography>
					<Typography
						variant="small"
						color="white"
						className="font-normal opacity-80"
					>
						Select a book to learn more.
					</Typography>
				</div>
			}
		>
			<InformationCircleIcon
				strokeWidth={2}
				className="text-blue-gray-500 w-5 h-5 cursor-pointer"
			/>
		</Tooltip>
	);
};

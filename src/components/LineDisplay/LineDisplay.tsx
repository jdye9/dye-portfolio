import { Reveal, IconItem } from "..";
import { LineDisplayProps } from "./types";

export const LineDisplay = ({
	offset,
	width,
	title,
	perLine,
	lineContent,
	xDirection,
}: LineDisplayProps) => {
	return (
		<div className={`${width} flex flex-col mx-auto rounded-lg full gap-5`}>
			<Reveal axis={"y"}>
				<div className="flex justify-center text-3xl font-bold leading-loose text-transparent desktopXXL:leading-loose desktopXL:leading-loose desktopL:leading-loose desktopM:leading-loose mobileM:leading-loose desktopXXL:text-8xl desktopXL:text-7xl desktopL:text-6xl desktopM:text-5xl mobileM:text-4xl font-openSans bg-clip-text bg-gradient-to-br from-light-purple to-light-blue">
					{title}
				</div>
			</Reveal>
			{lineContent
				.map((_, index) => {
					if (index % perLine === 0) return index;
					return undefined;
				})
				.filter((index) => index !== undefined)
				.map((itemIndex, index) => {
					if (itemIndex !== undefined && itemIndex >= 0) {
						const items = lineContent.slice(itemIndex, itemIndex + perLine);
						return (
							<Reveal axis={"x"} key={index} xDirection={xDirection}>
								<div
									className={`${
										offset === "left"
											? index % 2 === 0
												? "mr-auto"
												: "ml-auto"
											: index % 2 === 0
											? "ml-auto"
											: "mr-auto"
									} flex justify-around w-5/6 rounded-lg shadow-md bg-gradient-to-br from-light-purple to-light-blue`}
								>
									{items.map((item) => (
										<Reveal axis={"x"} key={item} xDirection={xDirection}>
											<IconItem img={item} />
										</Reveal>
									))}
								</div>
							</Reveal>
						);
					}
					return <></>;
				})}
		</div>
	);
};

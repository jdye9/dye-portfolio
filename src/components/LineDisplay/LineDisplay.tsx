import { Reveal, IconItem } from "..";
import { LineDisplayProps } from "./types";

export const LineDisplay = ({
	offset,
	width,
	title,
	lines,
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
			{[...new Array(lines).keys()].map((line) => {
				const arrayToSlice = [...lineContent];
				const beginningIndex = line * (lineContent.length / lines);
				const logos = arrayToSlice.slice(
					//formula for odd number with more loaded towards beginning of rows
					Math.floor(beginningIndex), //Math.ceil(beginningIndex)
					Math.floor(beginningIndex + lineContent.length / lines) //Math.ceil(beginningIndex) + Math.ceil(lineContent.length / lines)
				);
				return (
					<Reveal axis={"x"} key={line} xDirection={xDirection}>
						<div
							className={`${
								offset === "left"
									? line % 2 === 0
										? "mr-auto"
										: "ml-auto"
									: line % 2 === 0
									? "ml-auto"
									: "mr-auto"
							} flex justify-around w-5/6 rounded-lg shadow-md bg-gradient-to-br from-light-purple to-light-blue`}
						>
							{logos.map((logo) => (
								<Reveal axis={"x"} key={logo} xDirection={xDirection}>
									<IconItem img={logo} />
								</Reveal>
							))}
						</div>
					</Reveal>
				);
			})}
		</div>
	);
};

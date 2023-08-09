import AnchorLink from "react-anchor-link-smooth-scroll";
import { ButtonNavProps } from "./types";

export const ButtonNav = ({ pages, selectedPage }: ButtonNavProps) => {
	const selectedPageIcon = (index: number) => (
		<div
			className={`hover:duration-500 hover:ease-in-out hover:scale-[130%] ${
				index % 2 === 0 ? "hover:rotate-45" : "hover:-rotate-45"
			}`}
		>
			<div className={`relative bg-white dark:bg-[#1A1A40] h-3 w-3`}>
				<div
					className={`absolute bg-gradient-to-br from-light-purple to-light-blue w-6 h-6 left-[-50%] top-[-50%] z-[-1]`}
				></div>
			</div>
		</div>
	);

	const notSelectedPageIcon = (index: number) => (
		<div
			className={`relative hover:duration-500 hover:scale-[130%] ${
				index % 2 === 0 ? "hover:rotate-45" : "hover:-rotate-45"
			} ease-in-out bg-gradient-to-br from-light-purple to-light-blue w-3 h-3`}
		></div>
	);
	return (
		<div className="fixed flex flex-col right-7 top-[40%] gap-6 z-10 short:hidden desktopSUnder:hidden">
			{pages.map((page, index) => (
				<AnchorLink key={page} href={`#${page}`} offset="80">
					{selectedPage === page
						? selectedPageIcon(index)
						: notSelectedPageIcon(index)}
				</AnchorLink>
			))}
		</div>
	);
};

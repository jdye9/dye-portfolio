import AnchorLink from "react-anchor-link-smooth-scroll";
import { ButtonNavProps } from "./types";
import { useTheme } from "../../providers";

export const ButtonNav = ({ pages, selectedPage }: ButtonNavProps) => {
	const {
		state: { gradient },
	} = useTheme();
	const selectedPageIcon = (index: number) => (
		<div
			className={`hover:duration-500 hover:ease-in-out hover:scale-[130%] transition-all duration-500 ${
				index % 2 === 0 ? "hover:rotate-45" : "hover:-rotate-45"
			}`}
		>
			<div className={`relative bg-white dark:bg-[#1A1A40] h-3 w-3`}>
				<div
					className={`absolute ${gradient} w-6 h-6 left-[-50%] top-[-50%] z-[-1]`}
				></div>
			</div>
		</div>
	);

	const notSelectedPageIcon = (index: number) => (
		<div
			className={`relative hover:duration-500 hover:scale-[130%] ${
				index % 2 === 0 ? "hover:rotate-45" : "hover:-rotate-45"
			} hover:ease-in-out transition-all duration-500 ${gradient} w-3 h-3`}
		></div>
	);
	return (
		<div className="fixed flex flex-col right-7 top-[40%] gap-6 z-10 short:hidden desktopSUnder:hidden">
			{pages.map((page, index) => (
				<AnchorLink key={page} href={`#${page}`} offset="72">
					{selectedPage === page
						? selectedPageIcon(index)
						: notSelectedPageIcon(index)}
				</AnchorLink>
			))}
		</div>
	);
};

import AnchorLink from "react-anchor-link-smooth-scroll";

export const ButtonNav = ({ navLinks, selectedPage, setSelectedPage }) => {
	const selectedPageIcon = (index) => (
		<div
			className={`transition duration-500 ease-in-out hover:scale-[130%] ${
				index % 2 === 0 ? "hover:rotate-45" : "hover:-rotate-45"
			}`}
		>
			<div className={`relative bg-white h-3 w-3`}>
				<div
					className={`absolute bg-gradient-to-br from-light-purple to-light-blue w-6 h-6 left-[-50%] top-[-50%] z-[-1]`}
				></div>
			</div>
		</div>
	);

	const notSelectedPageIcon = (index) => (
		<div
			className={`relative transition duration-500 hover:scale-[130%] ${
				index % 2 === 0 ? "hover:rotate-45" : "hover:-rotate-45"
			} ease-in-out bg-gradient-to-br from-light-purple to-light-blue w-3 h-3`}
		></div>
	);
	return (
		<div className="fixed flex flex-col right-7 top-[45%] gap-6 z-10">
			{navLinks.map((page, index) => (
				<AnchorLink
					href={`#${page.id}`}
					onClick={() => setSelectedPage(page.id)}
					offset="86"
				>
					{selectedPage === page.id
						? selectedPageIcon(index)
						: notSelectedPageIcon(index)}
				</AnchorLink>
			))}
		</div>
	);
};

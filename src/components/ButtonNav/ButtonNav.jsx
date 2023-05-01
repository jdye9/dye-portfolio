import AnchorLink from "react-anchor-link-smooth-scroll";

export const ButtonNav = ({ navLinks, selectedPage, setSelectedPage }) => {
	return (
		<div className="fixed flex flex-col right-7 top-[45%] gap-6">
			{navLinks.map((page) => (
				<AnchorLink
					href={`#${page.id}`}
					onClick={() => setSelectedPage(page.id)}
					className={`${
						selectedPage === page.id
							? "relative rounded-full bg-white h-3 w-3 before:bg-gradient-to-br from-light-purple to-light-blue before:absolute before:w-6 before:h-6 before:left-[-50%] before:top-[-50%] before:z-[-1]"
							: "bg-gradient-to-br from-light-purple to-light-blue w-3 h-3"
					}`}
				/>
			))}
		</div>
	);
};

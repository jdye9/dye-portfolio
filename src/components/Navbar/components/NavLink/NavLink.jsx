import { LineGradient } from "components/LineGradient";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const NavLink = ({
	page,
	selectedPage,
	setSelectedPage,
	isAboveSmallScreens,
	setIsMenuToggled,
}) => {
	const desktopStyling = (
		<AnchorLink
			href={`#${page.id}`}
			onClick={() => setSelectedPage(page.id)}
			className={
				"font-openSans text-lg font-bold text-transparent bg-clip-text transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
			}
		>
			<h1>{page.pageName}</h1>
			{selectedPage === page.id && (
				<LineGradient
					h={"h-0.5"}
					w={"w-full"}
					color={
						"transition-all duration-500 ease-in-out bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 group-hover:bg-pos-100 ease-in-out"
					}
				/>
			)}
		</AnchorLink>
	);

	const mobileStyling = (
		<AnchorLink
			href={`#${page.id}`}
			onClick={() => {
				setSelectedPage(page.id);
				setIsMenuToggled(false);
			}}
			className={
				"group font-openSans text-[60px] font-bold text-transparent bg-clip-text inline-block transition-all duration-500 ease-in-out bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
			}
		>
			<h1>{page.pageName}</h1>
		</AnchorLink>
	);

	return isAboveSmallScreens ? desktopStyling : mobileStyling;
};

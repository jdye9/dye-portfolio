import { LineGradient } from "components/LineGradient";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const NavLink = ({
	page,
	selectedPage,
	setSelectedPage,
	isAboveSmallScreens,
	setIsMenuToggled,
}) => {
	return (
		<AnchorLink
			href={`#${page.id}`}
			onClick={() => {
				setSelectedPage(page.id);
				setIsMenuToggled(false);
			}}
			className={
				"font-openSans desktopM:text-lg mobileL:text-[55px] mobileN:text-[50px] mobileS:text-[45px] text-[40px] font-bold text-transparent bg-clip-text transition duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
			}
			offset="86"
		>
			<h1>{page.pageName}</h1>
			{isAboveSmallScreens && selectedPage === page.id && (
				<LineGradient
					h={"h-0.5"}
					w={"w-full"}
					color={
						"transition duration-500 ease-in-out bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 group-hover:bg-pos-100 ease-in-out"
					}
				/>
			)}
		</AnchorLink>
	);
};

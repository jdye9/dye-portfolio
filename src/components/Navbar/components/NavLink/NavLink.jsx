import { LineGradient } from "components/LineGradient";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const NavLink = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
			className={
				"group font-openSans text-lg font-bold text-transparent bg-clip-text inline-block transition-all duration-1000 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
			}
		>
			<h1>{page}</h1>
			{selectedPage === lowerCasePage && (
				<LineGradient
					h={"h-0.5"}
					w={"w-full"}
					color={
						"transition-all duration-1000 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 group-hover:bg-pos-100 ease-in-out group-hover:scale-125"
					}
				/>
			)}
		</AnchorLink>
	);
};

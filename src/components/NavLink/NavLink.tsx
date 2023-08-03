import { LineGradient } from "..";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLinkProps } from "./types";

export const NavLink = ({
	page,
	selectedPage,
	setIsMenuToggled,
}: NavLinkProps) => {
	return (
		<AnchorLink
			href={`#${page}`}
			onClick={() => {
				if (setIsMenuToggled) setIsMenuToggled(false);
			}}
			className={
				"font-openSans desktopS:text-lg mobileL:text-[55px] mobileM:text-[50px] mobileS:text-[45px] text-[40px] font-bold text-transparent bg-clip-text transition-all duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125"
			}
			offset="86"
		>
			<h1>{page}</h1>
			{selectedPage === page && (
				<div className="hidden desktopS:flex">
					<LineGradient
						h={"h-0.5"}
						w={"w-full"}
						color={
							"transition-all duration-500 ease-in-out bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 group-hover:bg-pos-100 ease-in-out"
						}
					/>
				</div>
			)}
		</AnchorLink>
	);
};

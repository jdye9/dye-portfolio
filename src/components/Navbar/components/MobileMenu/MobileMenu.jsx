import { ReactComponent as Logo } from "assets/logo.svg";
import { IoCloseCircle } from "react-icons/io5";
import { LineGradient } from "components/LineGradient";
import { NavLink } from "../NavLink";

export const MobileMenu = ({
	navLinks,
	isMenuToggled,
	setIsMenuToggled,
	selectedPage,
	setSelectedPage,
	isAboveSmallScreens,
}) => (
	<div className="fixed right-0 top-0 h-full w-full bg-white overflow-auto">
		<div className="fixed top-0 w-full z-40 bg-white">
			<div className="flex items-center justify-between mx-auto w-11/12 py-4 top-0">
				<Logo height={50} width={50} className="hover:animate-spin" />
				<button className="rounded-full text-white transition duration-500 bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in-out hover:scale-125">
					<IoCloseCircle
						size={47}
						viewBox="60 60 400 400"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					/>
				</button>
			</div>
			<div className="flex mx-auto w-11/12">
				<LineGradient
					h={"h-1"}
					w={"w-full"}
					color={"bg-gradient-to-br from-light-purple to-light-blue"}
				/>
			</div>
		</div>
		<div className="flex flex-col w-full mx-auto text-center gap-8 pt-[125px]">
			{navLinks.map((page) => (
				<NavLink
					page={page}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					isAboveSmallScreens={isAboveSmallScreens}
					setIsMenuToggled={setIsMenuToggled}
				/>
			))}
		</div>
	</div>
);

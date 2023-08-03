import Logo from "../../assets/logo.svg";
import { IoCloseCircle } from "react-icons/io5";
import { NavLink, LineGradient } from "..";
import { MobileMenuProps } from "./types";

export const MobileMenu = ({
	pages,
	isMenuToggled,
	setIsMenuToggled,
	selectedPage,
}: MobileMenuProps) => (
	<div className="fixed top-0 right-0 w-full h-full overflow-auto bg-white">
		<div className="fixed top-0 z-40 w-full bg-white">
			<div className="top-0 flex items-center justify-between w-11/12 py-4 mx-auto">
				<img src={Logo} alt="logo" className="hover:animate-spin" />
				<button className="text-white transition duration-500 ease-in-out rounded-full bg-gradient-to-br from-light-purple via-light-blue to-light-purple bg-size-200 bg-pos-0 hover:bg-pos-100 hover:scale-125">
					<IoCloseCircle
						size={47}
						viewBox="60 60 400 400"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					/>
				</button>
			</div>
			<div className="flex w-11/12 mx-auto">
				<LineGradient
					h={"h-1"}
					w={"w-full"}
					color={"bg-gradient-to-br from-light-purple to-light-blue"}
				/>
			</div>
		</div>
		<div className="flex flex-col w-full mx-auto text-center gap-8 pt-[125px]">
			{pages.map((page, index) => (
				<NavLink
					key={`${page}-${index}`}
					page={page}
					selectedPage={selectedPage}
					setIsMenuToggled={setIsMenuToggled}
				/>
			))}
		</div>
	</div>
);

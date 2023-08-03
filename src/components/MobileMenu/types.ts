import { Page, Pages } from "../../types";

export type MobileMenuProps = {
	pages: Pages;
	isMenuToggled: boolean;
	setIsMenuToggled: React.Dispatch<React.SetStateAction<boolean>>;
	selectedPage: Page;
};

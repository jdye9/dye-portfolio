import { Page } from "../../types";

export type NavLinkProps = {
	page: Page;
	selectedPage: Page;
	setIsMenuToggled?: React.Dispatch<React.SetStateAction<boolean>>;
};

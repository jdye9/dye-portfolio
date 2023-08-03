import { Page, Pages } from "../../types";

export type NavbarProps = {
	selectedPage: Page;
	setSelectedPage: React.Dispatch<React.SetStateAction<Page>>;
};

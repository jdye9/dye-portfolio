import { Page } from "../types";

export type PageProps = {
	setSelectedPage: React.Dispatch<React.SetStateAction<Page>>;
	isMenuToggled: boolean;
};

import { useState } from "react";
import { Navbar } from "./components";
import { useMediaQuery } from "./hooks/useMediaQuery";

export const App = () => {
	const [selectedPage, setSelectedPage] = useState("home");
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	return (
		<div className="app bg-white">
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
		</div>
	);
};

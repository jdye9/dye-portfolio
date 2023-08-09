export type DarkModeAction = {
	type: string;
};

export type DarkModeState = {
	isDarkMode: boolean;
};

export type DarkModeContext = {
	state: DarkModeState;
	dispatch: React.Dispatch<DarkModeAction>;
};

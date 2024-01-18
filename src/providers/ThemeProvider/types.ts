export type ThemeAction = {
	type: string;
};

export type ThemeState = {
	isDarkMode: boolean;
	gradient: string;
};

export type ThemeContext = {
	state: ThemeState;
	dispatch: React.Dispatch<ThemeAction>;
};

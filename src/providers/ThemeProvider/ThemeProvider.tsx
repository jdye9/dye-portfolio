import { createContext, useContext, useReducer, useState } from "react";
import { ThemeAction, ThemeContext, ThemeState } from "./types";

const initialState: ThemeState = {
	isDarkMode: true,
	gradient: "bg-gradient-to-br from-[#CDC1EE] to-[#C9E2F8]",
};
const Context = createContext<ThemeContext>({
	state: initialState,
	dispatch: () => null,
});
const gradientList = [
	"bg-gradient-to-br from-[#CDC1EE] to-[#C9E2F8]",
	"bg-gradient-to-br from-[#EE9CA7] to-[#FFDDE1]",
	"bg-gradient-to-br from-[#12C2E9] via-[#C471ED] to-[#F64F59]",
	"bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
	"bg-gradient-to-br from-[#B79891] to-[#94716B]",
];

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
	const [colorIndex, setColorIndex] = useState(0);
	const [state, dispatch] = useReducer(
		(state: ThemeState, action: ThemeAction) => {
			switch (action.type) {
				case "switch":
					return { ...state, isDarkMode: !state.isDarkMode };
				case "color":
					const newColorIndex =
						colorIndex !== gradientList.length - 1 ? colorIndex + 1 : 0;
					setColorIndex(newColorIndex);
					console.log(newColorIndex);
					return { ...state, gradient: gradientList[newColorIndex] };
				default:
					return state;
			}
		},
		initialState
	);

	return (
		<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
	);
};

export const useTheme = (): ThemeContext => useContext(Context);

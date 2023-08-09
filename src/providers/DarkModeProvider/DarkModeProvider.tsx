import { createContext, useContext, useReducer } from "react";
import { DarkModeAction, DarkModeContext, DarkModeState } from "./types";

const initialState: DarkModeState = { isDarkMode: false };
const Context = createContext<DarkModeContext>({
	state: initialState,
	dispatch: () => null,
});

export const DarkModeProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer(
		(state: DarkModeState, action: DarkModeAction) => {
			switch (action.type) {
				case "switch":
					return { ...state, isDarkMode: !state.isDarkMode };
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

export const useDarkMode = (): DarkModeContext => useContext(Context);

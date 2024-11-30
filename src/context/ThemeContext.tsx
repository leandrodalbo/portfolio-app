import { createContext, useContext } from "react";

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: false,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const useThemeContext = () => useContext(ThemeContext);

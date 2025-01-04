import type { ReactNode } from "react";
import type { To } from "react-router";

export type TNavLink = { title: ReactNode; path: To };

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
	children: ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

export type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

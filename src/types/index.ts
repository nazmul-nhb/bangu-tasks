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

export interface ITask {
	id: string;
	title: string;
	description: string;
	dueDate: Date;
	isCompleted: boolean;
	priority: "High" | "Medium" | "Low";
}

export interface ITaskState {
	tasks: ITask[];
	filter: "all" | "High" | "Medium" | "Low";
}

export type TaskData = Omit<ITask, "id" | "isCompleted">;

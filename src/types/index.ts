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
	user?: string;
}

export interface ITaskState {
	tasks: ITask[];
	filter: "all" | ITask["priority"];
}

export type TaskData = Omit<ITask, "id" | "isCompleted">;

export interface IUser {
	id: string;
	name: string;
}

export type UserData = Omit<IUser, "id">;

export interface IUserState {
	users: IUser[];
}

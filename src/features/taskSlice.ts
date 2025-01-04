import { createSlice } from "@reduxjs/toolkit";
import { generateID } from "@nazmul-nhb/id-generator";
import type { ITaskState } from "@/types";
import type { RootState } from "@/store";

const initialState: ITaskState = {
	tasks: [
		{
			id: generateID({
				prefix: "task",
				length: 6,
				separator: "-",
			}),
			title: "First Task",
			description: "Create Nothing!",
			dueDate: new Date("2025-01-18"),
			isCompleted: false,
			priority: "Low",
		},
	],
	filter: "all",
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {},
});

export const selectTasks = (state: RootState) => state.task.tasks;

export const selectFilter = (state: RootState) => state.task.filter;

export default taskSlice.reducer;

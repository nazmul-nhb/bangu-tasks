import { createSlice } from "@reduxjs/toolkit";
import { generateID } from "@nazmul-nhb/id-generator";
import type { ITaskState, TaskAction, TaskData } from "@/types";
import type { RootState } from "@/store";

const initialState: ITaskState = {
	tasks: [],
	filter: "all",
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: TaskAction<TaskData>) => {
			const newTask = {
				id: generateID({
					prefix: "task",
					length: 6,
					separator: "-",
				}),
				isCompleted: false,
				...action.payload,
			};

			state.tasks.push(newTask);
		},
	},
});

export const selectTasks = (state: RootState) => state.task.tasks;

export const selectFilter = (state: RootState) => state.task.filter;

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

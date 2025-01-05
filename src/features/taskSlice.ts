import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { generateID } from "@nazmul-nhb/id-generator";
import type { ITask, ITaskState, TaskData } from "@/types";
import type { RootState } from "@/store";

const initialState: ITaskState = {
	tasks: [],
	filter: "all",
};

const createNewTask = (taskData: TaskData): ITask => {
	return {
		id: generateID({
			prefix: "task",
			length: 6,
			separator: "-",
		}),
		isCompleted: false,
		...taskData,
	};
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<TaskData>) => {
			const newTask = createNewTask(action.payload);

			state.tasks.push(newTask);
		},

		toggleIsCompleted: (state, action: PayloadAction<string>) => {
			state.tasks.forEach((task) =>
				task.id === action.payload
					? (task.isCompleted = !task.isCompleted)
					: task
			);
		},

		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter(
				(task) => task.id !== action.payload
			);
		},
	},
});

export const selectTasks = (state: RootState) => state.task.tasks;

export const selectFilter = (state: RootState) => state.task.filter;

export const { addTask, toggleIsCompleted, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

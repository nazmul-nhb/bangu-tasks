import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { generateID } from "@nazmul-nhb/id-generator";
import type { ITask, ITaskState, TaskData } from "@/types";
import type { RootState } from "@/store";
import { removeUser } from "./userSlice";

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

		updateFilter: (state, action: PayloadAction<ITaskState["filter"]>) => {
			state.filter = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(removeUser, (state, action) => {
			state.tasks.forEach(task=> task.user === action.payload ? task.user = undefined : task)
		})
	}
});

const setFilter = (state: RootState, priority: ITask["priority"]) => {
	return state.task.tasks.filter((task) => task.priority === priority);
};

export const selectTasks = (state: RootState) => {
	const filter = state.task.filter;

	switch (filter) {
		case "High":
			return setFilter(state, "High");

		case "Low":
			return setFilter(state, "Low");

		case "Medium":
			return setFilter(state, "Medium");

		case "all":
			return state.task.tasks;

		default:
			return state.task.tasks;
	}
};

export const selectFilter = (state: RootState) => state.task.filter;

export const { addTask, toggleIsCompleted, deleteTask, updateFilter } =
	taskSlice.actions;

export default taskSlice.reducer;

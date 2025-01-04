import { createSlice } from "@reduxjs/toolkit";
import { generateID } from "@nazmul-nhb/id-generator";
import type { ITaskState } from "@/types";

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
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {},
});

export default taskSlice.reducer;

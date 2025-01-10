import type { ITask, ITaskState } from "@/types";
import { createTransform } from "redux-persist";

// Define a type for the serialized task (with dueDate as a string)
type SerializedTask = Omit<ITask, "dueDate"> & { dueDate: string };
type SerializedTaskState = {
	tasks: SerializedTask[];
	filter: ITaskState["filter"];
};

// Custom transform to handle Date serialization/deserialization
export const transformDate = createTransform<ITaskState, SerializedTaskState>(
	// Transform state on its way to being serialized and persisted
	(inboundState) => ({
		tasks: inboundState.tasks.map((task) => ({
			...task,
			dueDate: task.dueDate.toISOString(), // Serialize Date to string
		})),
		filter: inboundState.filter,
	}),
	// Transform state on its way to being rehydrated
	(outboundState) => ({
		tasks: outboundState.tasks.map((task) => ({
			...task,
			dueDate: new Date(task.dueDate), // Deserialize string to Date
		})),
		filter: outboundState.filter,
	}),
	// Specify the slice(s) this transform should apply to
	{ whitelist: ["task"] }
);

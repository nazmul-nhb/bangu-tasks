import type { ITask } from "@/types";
import { createTransform } from "redux-persist";

// Define a type for the serialized task (with dueDate as a string)
type SerializedTask = Omit<ITask, "dueDate"> & { dueDate: string };

// Custom transform to handle Date serialization/deserialization
export const transformDate = createTransform<ITask[], SerializedTask[]>(
	// Transform state on its way to being serialized and persisted
	(inboundState: ITask[]) => {
		return inboundState.map((task) => ({
			...task,
			dueDate: task.dueDate.toISOString(), // Serialize Date to string
		}));
	},
	// Transform state on its way to being rehydrated
	(outboundState: SerializedTask[]) => {
		return outboundState.map((task) => ({
			...task,
			dueDate: new Date(task.dueDate), // Deserialize string to Date
		}));
	},
	// Specify the slice(s) this transform should apply to
	{ whitelist: ["task"] }
);

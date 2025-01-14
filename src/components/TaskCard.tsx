import React from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { deleteTask, toggleIsCompleted } from "@/features/taskSlice";
import { selectUsers } from "@/features/userSlice";

type Props = {
	task: ITask;
};

const TaskCard: React.FC<Props> = ({ task }) => {
	const users = useAppSelector(selectUsers);

	const user = users.find((user) => user.id === task.user);

	const dispatch = useAppDispatch();

	return (
		<div className="border px-5 py-3 rounded-md">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<div
						className={cn("size-3 rounded-full", {
							"bg-green-600": task.priority === "Low",
							"bg-red-600": task.priority === "High",
							"bg-orange-600": task.priority === "Medium",
						})}
					/>
					<h2
						className={cn("text-lg font-semibold", {
							"text-red-600 line-through": task.isCompleted,
						})}
					>
						{task.title}
					</h2>
				</div>

				<div className="flex gap-2 items-center">
					<Button
						onClick={() => dispatch(deleteTask(task.id))}
						variant="link"
						size="icon"
						className="text-red-600"
					>
						<Trash2 />
					</Button>
					<Checkbox
						onClick={() => dispatch(toggleIsCompleted(task.id))}
					/>
				</div>
			</div>
			<h3
				className={cn("text-base font-semibold", {
					"text-red-600 line-through": task.isCompleted,
				})}
			>
				Assigned to {user ? user.name : "None"}
			</h3>
			<p className="mt-5">{task.description}</p>
		</div>
	);
};

export default TaskCard;

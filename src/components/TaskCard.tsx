import React from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";

type Props = {
	task: ITask;
};

const TaskCard: React.FC<Props> = ({ task }) => {
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
					<h2>{task.title}</h2>
				</div>

				<div className="flex gap-2 items-center">
					<Button variant="link" size="icon" className="text-red-600">
						<Trash2 />
					</Button>
					<Checkbox />
				</div>
			</div>
			<p className="mt-5">{task.description}</p>
		</div>
	);
};

export default TaskCard;

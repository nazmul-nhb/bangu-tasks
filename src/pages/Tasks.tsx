import { AddTask } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { selectTasks, updateFilter } from "@/features/taskSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
	const tasks = useAppSelector(selectTasks);
	const dispatch = useAppDispatch();

	return (
		<section className="mx-auto max-w-7xl mt-20">
			<div className="flex items-center justify-between">
				<h1>Tasks</h1>
				<Tabs defaultValue="all">
					<TabsList>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("all"))}
							value="all"
						>
							All
						</TabsTrigger>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("High"))}
							value="High"
						>
							High
						</TabsTrigger>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("Medium"))}
							value="Medium"
						>
							Medium
						</TabsTrigger>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("Low"))}
							value="Low"
						>
							Low
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<AddTask />
			</div>
			<div className="space-y-4 mt-4">
				{tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</section>
	);
};

export default Tasks;

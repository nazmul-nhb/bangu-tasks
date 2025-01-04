import { AddTask } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { selectTasks } from "@/features/taskSlice";
import { useAppSelector } from "@/hooks/redux";

const Tasks = () => {
	const tasks = useAppSelector(selectTasks);

	return (
		<section className="mx-auto max-w-7xl mt-20">
			<div className="flex items-center justify-between">
				<h1>Tasks</h1>
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

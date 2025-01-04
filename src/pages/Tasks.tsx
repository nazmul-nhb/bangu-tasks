import TaskCard from "@/components/TaskCard";
import { selectTasks } from "@/features/taskSlice";
import { useAppSelector } from "@/hooks/redux";

const Tasks = () => {
	const tasks = useAppSelector(selectTasks);

	return (
		<section>
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</section>
	);
};

export default Tasks;

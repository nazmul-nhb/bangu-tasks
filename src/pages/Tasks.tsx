import { selectTasks } from "@/features/taskSlice";
import { useAppSelector } from "@/hooks/redux";

const Tasks = () => {
	const tasks = useAppSelector(selectTasks);

	return (
		<section>
			{tasks.map((task) => (
				<div key={task.id}>{task.title}</div>
			))}
		</section>
	);
};

export default Tasks;

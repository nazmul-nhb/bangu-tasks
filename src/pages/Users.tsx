import UserCard from "@/components/UserCard";
import { selectUsers } from "@/features/userSlice";
import { useAppSelector } from "@/hooks/redux";

const Users = () => {
	const users = useAppSelector(selectUsers);

	return (
		<section className="mx-auto max-w-7xl mt-20">
			<div className="flex items-center justify-between">
				<h1>Tasks</h1>
			</div>
			<div className="space-y-4 mt-4">
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</section>
	);
};

export default Users;

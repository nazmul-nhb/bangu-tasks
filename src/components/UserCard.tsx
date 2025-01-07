import { useAppDispatch } from "@/hooks/redux";
import { cn } from "@/lib/utils";
import type { IUser } from "@/types";
import { type FC } from "react";
import { Button } from "./ui/button";
import { removeUser } from "@/features/userSlice";
import { Trash2 } from "lucide-react";

interface Props {
	user: IUser;
}

const UserCard: FC<Props> = ({ user }) => {
	const dispatch = useAppDispatch();

	return (
		<div className="border px-5 py-3 rounded-md">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<div className={cn("size-3 rounded-full")} />
					<h2 className={cn("text-lg font-semibold")}>{user.name}</h2>
				</div>

				<div className="flex gap-2 items-center">
					<Button
						onClick={() => dispatch(removeUser(user.id))}
						variant="link"
						size="icon"
						className="text-red-600"
					>
						<Trash2 />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;

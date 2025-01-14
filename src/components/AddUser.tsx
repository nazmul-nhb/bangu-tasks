import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import type { UserData } from "@/types";
import { useAppDispatch } from "@/hooks/redux";
import { addUser } from "@/features/userSlice";
import { useState } from "react";

export function AddUser() {
	const [isOpen, setIsOpen] = useState(false);

	const form = useForm<UserData>({
		defaultValues: {
			name: "",
		},
	});

	const dispatch = useAppDispatch();

	const onSubmit = (userData: UserData) => {
		dispatch(addUser(userData));
		setIsOpen(false);
		form.reset();
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="default" onClick={() => setIsOpen(true)}>
					Add User
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add User</DialogTitle>
					<DialogDescription>Add a new user</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-2"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											placeholder="User Name"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<DialogFooter>
							<Button type="submit">Add</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

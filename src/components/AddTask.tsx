import { Button } from "@/components/ui/button";
import { format } from "date-fns";
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
import { Textarea } from "./ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import type { TaskData } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addTask } from "@/features/taskSlice";
import { selectUsers } from "@/features/userSlice";
import { useState } from "react";

export function AddTask() {
	const [isOpen, setIsOpen] = useState(false);

	const form = useForm<TaskData>({
		defaultValues: {
			title: "",
			description: "",
		},
	});

	const users = useAppSelector(selectUsers);

	const dispatch = useAppDispatch();

	const onSubmit = (taskData: TaskData) => {
		dispatch(addTask(taskData));
		setIsOpen(false);
		form.reset();
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="default" onClick={() => setIsOpen(true)}>
					Add Task
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Task</DialogTitle>
					<DialogDescription>Add a new task</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-2"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											required
											placeholder="Task Title"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											required
											placeholder="Task Description"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Due Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"pl-3 text-left font-normal",
														!field.value &&
															"text-muted-foreground"
													)}
												>
													{field.value ? (
														format(
															field.value,
															"PP"
														)
													) : (
														<span>
															Pick a due date
														</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												required
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												// disabled={(date) =>
												// 	date > new Date() ||
												// 	date <
												// 		new Date("1900-01-01")
												// }
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="priority"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Priority</FormLabel>
									<Select
										required
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select Task Priority" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="High">
												High
											</SelectItem>
											<SelectItem value="Medium">
												Medium
											</SelectItem>
											<SelectItem value="Low">
												Low
											</SelectItem>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="user"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Assign A User</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Assign A User" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{users.map((user) => (
												<SelectItem
													key={user.id}
													value={user.id}
												>
													{user.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
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

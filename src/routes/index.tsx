import Root from "@/layouts/Root";
import Tasks from "@/pages/Tasks";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router";
import Users from "@/pages/Users";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Tasks />,
			},
			{
				path: "/users",
				element: <Users />,
			},
		],
	},
]);

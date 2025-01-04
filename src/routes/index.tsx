import Root from "@/layouts/Root";
import Tasks from "@/pages/Tasks";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router";

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
		],
	},
]);

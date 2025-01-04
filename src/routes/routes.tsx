import Root from "@/layouts/Root";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

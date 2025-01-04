import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={routes} />
		</HelmetProvider>
	</StrictMode>
);

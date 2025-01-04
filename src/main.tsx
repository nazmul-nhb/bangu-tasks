import "./styles.css";
import { routes } from "./routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./providers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<ThemeProvider defaultTheme="dark">
				<RouterProvider router={routes} />
			</ThemeProvider>
		</HelmetProvider>
	</StrictMode>
);

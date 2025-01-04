import "./styles.css";
import { store } from "./store";
import { routes } from "./routes";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./providers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<ThemeProvider defaultTheme="dark">
					<RouterProvider router={routes} />
				</ThemeProvider>
			</Provider>
		</HelmetProvider>
	</StrictMode>
);

import "./styles.css";
import { persistor, store } from "./store";
import { routes } from "./routes";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./providers/ThemeProvider";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider defaultTheme="dark">
						<RouterProvider router={routes} />
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</HelmetProvider>
	</StrictMode>
);

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import userReducer from "../features/userSlice";
import storage from "redux-persist/lib/storage";
import { transformDate } from "@/transforms/transformDate";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
	task: taskReducer,
	user: userReducer,
});

const persistConfig = {
	key: "root",
	storage,
	transforms: [transformDate],
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
	persistConfig,
	rootReducer
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ 
			serializableCheck: false, // Disable serializable checks for Redux Persist
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

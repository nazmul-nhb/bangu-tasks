import type { RootState } from "@/store";
import type { IUser, IUserState, UserData } from "@/types";
import { generateID } from "@nazmul-nhb/id-generator";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
	users: [],
};

const createNewUser = (userData: UserData): IUser => {
	return {
		id: generateID({
			prefix: "user",
			length: 6,
			separator: "-",
		}),
		...userData,
	};
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<UserData>) => {
			const newUser = createNewUser(action.payload);

			state.users.push(newUser);
		},

		removeUser: (state, action: PayloadAction<string>) => {
			state.users = state.users.filter(
				(user) => user.id !== action.payload
			);
		},
	},
});

export const selectUsers = (state: RootState) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

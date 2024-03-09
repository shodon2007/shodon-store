import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface User {
	username: string;
	token: string;
}

const USERNAME_KEY = 'username';
const TOKEN_KEY = 'token';

const initialState: User = {
	username: localStorage.getItem(USERNAME_KEY) ?? '',
	token: localStorage.getItem(TOKEN_KEY) ?? '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,

	reducers: {
		login(state, action: PayloadAction<User>) {
			state.token = action.payload.token;
			state.username = action.payload.username;
			localStorage.setItem(TOKEN_KEY, state.token);
			localStorage.setItem(USERNAME_KEY, state.username);
		},
		logout(state) {
			localStorage.removeItem(TOKEN_KEY);
			localStorage.removeItem(USERNAME_KEY);
			state.username = '';
			state.token = '';
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

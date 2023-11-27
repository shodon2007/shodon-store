import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
    username: string,
    token: string,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: <TUser>{
        username: localStorage.getItem('username') ?? '',
        token: localStorage.getItem('token') ?? '',
    },
    reducers: {
        login(state, action: PayloadAction<TUser>) {
            state.token = action.payload.token;
            state.username = action.payload.username;
            localStorage.setItem('token', state.token);
            localStorage.setItem('username', state.username);
        },
        logout(state) {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            state.username = '';
            state.token = '';
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
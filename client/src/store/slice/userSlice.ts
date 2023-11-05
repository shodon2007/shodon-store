import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type typeUserState = {
    token: string,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: <typeUserState>{
        token: '',
    },
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        logout(state) {
            state.token = '';
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
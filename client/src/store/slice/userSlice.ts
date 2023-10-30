import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: '',
        token: '',
        id: '',
    },
    reducers: {
        login(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        logout(state, action) {
            state.user = '';
            state.token = '';
            state.id = '';
        }
    }

})
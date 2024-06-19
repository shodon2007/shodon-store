import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { filterReducer } from 'src/entities/Filter';

const store = configureStore({
	reducer: {
		user: userReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

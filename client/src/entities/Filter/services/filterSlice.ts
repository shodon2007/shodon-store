import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterType } from 'src/app/types/filter';
import { getAllFilterSettings } from 'src/pages/Products/model/getAllFilterSettings';

const initialState = {
	values: getAllFilterSettings(new URLSearchParams(window.location.search)),
};

export const filterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		updateFilter(state, action: PayloadAction<FilterType>) {
			state.values = action.payload;
		},
	},
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { text: '' },
  reducers: {
    setText(state, { payload }) {
      state.text = payload;
    },
  },
});

export const { setText } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectText = state => state.filter.text;

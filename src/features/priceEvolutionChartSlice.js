import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const priceEvolutionChartSlice = createSlice({
  name: 'priceEvolutionChart',
  initialState,
  reducers: {
    priceEvolutionChartSliceLoadded(state, action) {
      return state = action.payload
    },
  },
});

export const { priceEvolutionChartSliceLoadded } =
  priceEvolutionChartSlice.actions;

export default priceEvolutionChartSlice.reducer;

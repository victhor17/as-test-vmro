import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsLoaded(state, action) {
      return (state = action.payload);
    },
  },
});

export const { productsLoaded } = productsSlice.actions;

export default productsSlice.reducer;

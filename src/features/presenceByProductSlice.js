import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const presenceByProductSlice = createSlice({
  name: 'presenceByProductSlice',
  initialState,
  reducers: {
    presenceByProductLoaded(state, action) {
      return (state = action.payload);
    },
  },
});

export const { presenceByProductLoaded } = presenceByProductSlice.actions;

export default presenceByProductSlice.reducer;

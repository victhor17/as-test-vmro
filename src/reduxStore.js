import { configureStore } from '@reduxjs/toolkit';
import priceEvolutionChartSlice from './features/priceEvolutionChartSlice';

const store = configureStore({
  reducer: {
    priceEvolutionChart: priceEvolutionChartSlice
  }
});

export default store;

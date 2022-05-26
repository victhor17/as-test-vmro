import { configureStore } from '@reduxjs/toolkit';
import priceEvolutionChartSlice from './features/priceEvolutionChartSlice';
import presenceByProductSlice from './features/presenceByProductSlice';
import productsSlice from './features/productsSlice';

const store = configureStore({
  reducer: {
    priceEvolutionChart: priceEvolutionChartSlice,
    presenceByProduct: presenceByProductSlice,
    products: productsSlice
  }
});

export default store;

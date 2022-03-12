import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import QuoteSlice from '../features/quotes/QuoteSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quote: QuoteSlice
  },
});

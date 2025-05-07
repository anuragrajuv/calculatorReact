import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/Calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
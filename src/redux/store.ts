import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice.ts';
import userReducer from './slices/userSlice.ts';

export const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

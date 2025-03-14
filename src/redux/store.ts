import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice.ts';
import orderReducer from './slices/ordersSlice.ts';
import userReducer from './slices/userSlice.ts';

export const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer, orders: orderReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

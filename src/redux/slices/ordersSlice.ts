import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDataQty } from '../../types/productData.ts';

interface ICartData {
  cartData: ProductDataQty[];
  totalPrice: number;
  priority: boolean;
}

export interface OrdersState {
  orderItems: ICartData[];
}

const initialState: OrdersState = {
  orderItems: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<ICartData>) => {
      state.orderItems.push({ ...action.payload });
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;

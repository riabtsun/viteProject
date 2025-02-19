import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDataQty } from '../../types/productData.ts';
import { productPrice, totalPrice } from '../../utils.ts';

export const getAllData = createAsyncThunk('pizzasList', async () => {
  const response = await fetch(
    'https://react-fast-pizza-api.onrender.com/api/menu'
  );
  return await response.json();
});

export interface CartState {
  items: ProductDataQty[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductDataQty>) => {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existItem?.id) {
        state.items.push({ ...action.payload, qty: 1 });
        totalPrice(state);
      } else {
        existItem.qty += 1;
        productPrice(existItem);
        totalPrice(state);
      }
    },
    decrementFromCart: (state, action: PayloadAction<ProductDataQty['id']>) => {
      const existItem = state.items.find((item) => item.id === action.payload);
      if (existItem) {
        existItem.qty -= 1;
        productPrice(existItem);
        totalPrice(state);
      }
    },
    deleteFromCart: (state, action: PayloadAction<ProductDataQty['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      totalPrice(state);
    },
    clearCart: (state) => {
      state.items = [];
      totalPrice(state);
    },
  },
  // extraReducers: {
  //   [getAllData.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getAllData.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.products = action.payload;
  //   },
  //   [getAllData.rejected]: (state, action: PayloadAction<any>) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },
});
export const { addToCart, decrementFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

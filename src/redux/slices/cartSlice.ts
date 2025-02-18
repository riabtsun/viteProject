import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from '../../pages/Menu/Menu';

export const getAllData = createAsyncThunk('pizzasList', async () => {
  const response = await fetch(
    'https://react-fast-pizza-api.onrender.com/api/menu'
  );
  return await response.json();
});

interface CartState {
  items: ProductData[];
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
    addToCart: (state, action: PayloadAction<ProductData>) => {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existItem?.id) {
        state.items.push(action.payload);
      } else {
        existItem.qty += 1;
      }
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
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

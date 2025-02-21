import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData, ProductDataQty } from '../../types/productData.ts';
import { productPrice, totalPrice } from '../../utils.ts';

export const getAllData = createAsyncThunk('pizzasList', async () => {
  const response = await fetch(
    'https://react-fast-pizza-api.onrender.com/api/menu'
  );
  const data = await response.json();
  return data.data;
});

export interface CartState {
  menuItems: ProductData[];
  items: ProductDataQty[];
  totalPrice: number;
  totalCount: number;
  isLoading: boolean;
  error: string;
}

const initialState: CartState = {
  menuItems: [],
  items: [],
  totalPrice: 0,
  totalCount: 0,
  isLoading: false,
  error: '',
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
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      getAllData.fulfilled,
      (state, action: PayloadAction<ProductData[]>) => {
        state.menuItems = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(getAllData.rejected, (state) => {
      state.error = 'Fetch data error';
      state.isLoading = false;
    });
  },
});
export const { addToCart, decrementFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

import { ProductDataQty } from './types/productData.ts';
import { CartState } from './redux/slices/cartSlice.ts';

export const productPrice = (product: ProductDataQty) => {
  return (product.totalPrice = product.unitPrice * product.qty);
};

export const totalPrice = (state: CartState) => {
  state.totalPrice = state.items.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );
};

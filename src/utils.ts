import { ProductDataQty } from './types/productData.ts';

export const productPrice = (product: ProductDataQty) => {
  return (product.totalPrice = product.unitPrice * product.qty);
};

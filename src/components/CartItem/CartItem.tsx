import classes from './cartItem.module.css';
import { CartProps } from '../../types.ts';
import { useRef } from 'react';
import Button from '../Button/Button.tsx';
import { ProductDataQty } from '../../types/productData.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import {
  addToCart,
  decrementFromCart,
  deleteFromCart,
} from '../../redux/slices/cartSlice.ts';

const CartItem = ({ name, id }: CartProps) => {
  const productItem = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const cartList: ProductDataQty[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const currentItem = cartList.find((item) => item?.id === id);
  const addItem = (item: ProductDataQty) => {
    if (item?.qty >= 0) {
      dispatch(addToCart(item));
    }
  };
  const removeItem = (item: ProductDataQty) => {
    if (item?.qty >= 1) {
      dispatch(decrementFromCart(item.id));
    } else {
      dispatch(deleteFromCart(item.id));
    }
  };

  const deleteItem = (item: ProductDataQty) => {
    dispatch(deleteFromCart(item.id));
  };

  return (
    <div ref={productItem} className={classes.cartItem}>
      <span className={classes.quantityText}>×{currentItem?.qty}</span>
      <span>{name}</span>
      <span className={classes.price}>€{currentItem?.totalPrice}</span>
      <div className={classes.quantityControls}>
        <Button
          onClick={() => currentItem && removeItem(currentItem)}
          className={classes.quantityBtn}
          text='-'
          type='button'
        />
        <span>{currentItem?.qty}</span>
        <Button
          onClick={() => currentItem && addItem(currentItem)}
          className={classes.quantityBtn}
          text='+'
          type='button'
        />
        <Button
          onClick={() => currentItem && deleteItem(currentItem)}
          className={classes.deleteBtn}
          text='DELETE'
          type='button'
        />
      </div>
    </div>
  );
};

export default CartItem;

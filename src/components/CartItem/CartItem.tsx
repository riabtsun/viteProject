import classes from './cartItem.module.css';
import { CartProps } from '../../types.ts';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';

const CartItem = ({ name, price, quantity }: CartProps) => {
  const [count, setCount] = useState(quantity);
  const [itemPrice, setItemPrice] = useState(price * quantity);
  const productItem = useRef<HTMLDivElement>(null);

  const addItem = () => {
    if (count >= 0) {
      setCount(count + 1);
      setItemPrice(itemPrice + price);
    }
  };
  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
      setItemPrice(itemPrice - price);
    }
  };

  const deleteItem = () => {
    if (productItem.current) {
      productItem.current.remove();
    }
  };

  return (
    <div ref={productItem} className={classes.cartItem}>
      <span className={classes.quantityText}>×{count}</span>
      <span>{name}</span>
      <span className={classes.price}>€{itemPrice}</span>
      <div className={classes.quantityControls}>
        <Button onClick={removeItem} className={classes.quantityBtn} text='-' />
        <span>{count}</span>
        <Button onClick={addItem} className={classes.quantityBtn} text='+' />
        <Button
          onClick={deleteItem}
          className={classes.deleteBtn}
          text='DELETE'
        />
      </div>
    </div>
  );
};

export default CartItem;

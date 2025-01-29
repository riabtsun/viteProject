import classes from './cartItem.module.css';
import { CartProps } from '../../types.ts';

const CartItem = ({ name, price, quantity }: CartProps) => {
  return (
    <div className={classes.cartItem}>
      <span className={classes.quantityText}>×{quantity}</span>
      <span>{name}</span>
      <span className={classes.price}>€{price}</span>
      <div className={classes.quantityControls}>
        <button className={classes.quantityBtn}>-</button>
        <span>1</span>
        <button className={classes.quantityBtn}>+</button>
        <button className={classes.deleteBtn}>DELETE</button>
      </div>
    </div>
  );
};

export default CartItem;

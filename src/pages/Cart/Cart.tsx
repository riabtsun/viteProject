import classes from './cart.module.css';
import '../../App.css';
import CartItem from '../../components/CartItem/CartItem.tsx';
import cartItems from '../../cartData.ts';
import { CartProps } from '../../types.ts';

const Cart = () => {
  return (
    <div className='container'>
      <a href='#' className={classes.backLink}>
        ← Back to menu
      </a>
      <h1 className={classes.cartTitle}>Your cart, vlad</h1>

      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((product: CartProps) => {
            return (
              <CartItem
                key={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            );
          })
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <div className={classes.cartActions}>
        <button className={classes.orderBtn}>Order pizzas</button>
        <button className={classes.clearBtn}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;

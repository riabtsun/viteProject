import classes from './cart.module.css';
import '../../App.css';
import CartItem from '../../components/CartItem/CartItem.tsx';
import Button from '../../components/Button/Button.tsx';
import cartItems from '../../cartData.ts';
import { CartProps } from '../../types.ts';
import { useState } from 'react';

const Cart = () => {
  const [productItems, setProductItems] = useState([...cartItems]);
  const clearCart = () => {
    setProductItems([]);
  };
  return (
    <div className='container'>
      <a href='#' className={classes.backLink}>
        ← Back to menu
      </a>
      <h1 className={classes.cartTitle}>Your cart, vlad</h1>

      <div className='cart-items'>
        {productItems.length ? (
          productItems.map((product: CartProps) => {
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
        <Button className={classes.orderBtn} text='Order pizzas' />
        <Button
          onClick={clearCart}
          className={classes.clearBtn}
          text='Clear cart'
        />
      </div>
    </div>
  );
};

export default Cart;

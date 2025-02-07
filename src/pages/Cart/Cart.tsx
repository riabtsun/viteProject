import classes from './cart.module.css';
import '../../App.css';
import CartItem from '../../components/CartItem/CartItem.tsx';
import Button from '../../components/Button/Button.tsx';
import cartItems from '../../cartData.ts';
import { CartProps } from '../../types.ts';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContextProvider } from '../../contexts/UserContext.tsx';

const Cart = () => {
  const [productItems, setProductItems] = useState([...cartItems]);
  const clearCart = () => {
    setProductItems([]);
  };

  const data = useContext(UserContextProvider);
  return (
    <div className='container'>
      <Link to='/menu' className={classes.backLink}>
        ← Back to menu
      </Link>
      <h1 className={classes.cartTitle}>Your cart, {data?.name}</h1>

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
        <Button
          type='button'
          className={classes.orderBtn}
          text='Order pizzas'
        />
        <Button
          type='button'
          onClick={clearCart}
          className={classes.clearBtn}
          text='Clear cart'
        />
      </div>
    </div>
  );
};

export default Cart;

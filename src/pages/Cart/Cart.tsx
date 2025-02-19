import classes from './cart.module.css';
import '../../App.css';
import CartItem from '../../components/CartItem/CartItem.tsx';
import Button from '../../components/Button/Button.tsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import { ProductDataQty } from '../../types/productData.ts';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice.ts';

const Cart = () => {
  const dispatch = useDispatch();
  const clearCartData = () => {
    dispatch(clearCart());
  };
  const userNameValue = useSelector((state: RootState) => state.user.userName);
  const cartData = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  return (
    <div className='container'>
      <Link to='/menu' className={classes.backLink}>
        ← Back to menu
      </Link>
      <h1 className={classes.cartTitle}>Your cart, {userNameValue}</h1>

      <div className='cart-items'>
        {cartData.length ? (
          cartData.map((product: ProductDataQty) => {
            return (
              <CartItem
                key={product.id}
                name={product.name}
                price={product.unitPrice}
                quantity={product.qty}
                id={product.id}
              />
            );
          })
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <h2>Total price: {totalPrice}$</h2>
      <div className={classes.cartActions}>
        <Button
          type='button'
          className={classes.orderBtn}
          text='Order pizzas'
        />
        <Button
          type='button'
          onClick={clearCartData}
          className={classes.clearBtn}
          text='Clear cart'
        />
      </div>
    </div>
  );
};

export default Cart;

import classes from './productItem.module.css';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementFromCart,
  deleteFromCart,
} from '../../redux/slices/cartSlice.ts';
import { ProductData, ProductDataQty } from '../../types/productData.ts';
import { RootState } from '../../redux/store.ts';

const ProductItem = (props: ProductData) => {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = props;
  const cartList: ProductDataQty[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const currentItem = cartList.find((item) => item?.id === id);
  const totalProductPrice = currentItem?.totalPrice;
  const addToCardRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const hideBtn = (item: ProductDataQty): void => {
    dispatch(addToCart(item));
  };

  const handleAddToCart = (item: ProductDataQty) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item: ProductDataQty) => {
    if (item) {
      dispatch(decrementFromCart(item.id));
    }
  };
  return (
    <div className={classes.pizzaItem}>
      <img className={classes.pizzaImage} src={imageUrl} alt={name} />
      <div className={classes.pizzaInfo}>
        <h2>{name}</h2>
        <p className={classes.ingredients}>
          {ingredients.map((ingredient: string, index: number) =>
            index !== ingredients.length - 1 ? (
              <span key={ingredient}>{ingredient}, </span>
            ) : (
              <span key={ingredient}>{ingredient} </span>
            )
          )}
        </p>
        {soldOut ? (
          <p className={classes.soldOut}>SOLD OUT</p>
        ) : (
          <p className={classes.price}>€{totalProductPrice ?? unitPrice}</p>
        )}
      </div>
      {currentItem ? (
        <div ref={counterRef} className={classes.counter}>
          <Button
            onClick={() => currentItem && handleRemoveFromCart(currentItem)}
            className={classes.counterButton}
            aria-label='Decrease quantity'
            text='-'
            type='button'
          />
          <span>{currentItem?.qty}</span>
          <Button
            onClick={() => currentItem && handleAddToCart(currentItem)}
            className={classes.counterButton}
            aria-label='Increase quantity'
            text='+'
            type='button'
          />
        </div>
      ) : (
        !soldOut && (
          <div className='cart-controls'>
            <Button
              ref={addToCardRef}
              onClick={() => hideBtn(props)}
              className={classes.addToCart}
              text='ADD TO CART'
              type='button'
            />
          </div>
        )
      )}
    </div>
  );
};

export default ProductItem;

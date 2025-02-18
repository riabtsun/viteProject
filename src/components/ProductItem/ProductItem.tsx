import classes from './productItem.module.css';
import { useContext, useRef, useState } from 'react';
import Button from '../Button/Button.tsx';
import { UserContextProvider } from '../../contexts/UserContextProvider.ts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice.ts';
import { ProductData } from '../../pages/Menu/Menu.tsx';

const ProductItem = (props: ProductData) => {
  const {
    id,
    name,
    unitPrice,
    imageUrl,
    ingredients,
    soldOut,
    qty = 0,
  } = props;
  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState<number>(unitPrice);
  const addToCardRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const data = useContext(UserContextProvider);
  const hideBtn = (item: ProductData): void => {
    if (addToCardRef.current && counterRef.current) {
      addToCardRef.current.style.display = 'none';
      counterRef.current.style.display = 'flex';
    }
    dispatch(addToCart(item));
  };
  const decrementCount = (): void => {
    if (count > 1) {
      setCount(count - 1);
      setItemPrice((prevItemPrice: number) => prevItemPrice - unitPrice);
    } else {
      if (counterRef.current && addToCardRef.current) {
        counterRef.current.style.display = 'none';
        addToCardRef.current.style.display = 'block';
      }
    }
  };
  const incrementCount = (): void => {
    setCount(count + 1);
    data?.addToCart({
      id,
      name,
      unitPrice,
      imageUrl,
      ingredients,
      soldOut,
      qty: count,
    });
    setItemPrice((prevItemPrice: number) => prevItemPrice + unitPrice);
  };

  const dispatch = useDispatch();
  const handleAddToCart = (item: ProductData) => {
    dispatch(addToCart(item));
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
          <p className={classes.price}>€{itemPrice}</p>
        )}
      </div>
      {!soldOut && (
        <div className='cart-controls'>
          <Button
            ref={addToCardRef}
            onClick={() => hideBtn(props)}
            className={classes.addToCart}
            text='ADD TO CART'
            type='button'
          />
          <div ref={counterRef} className={classes.counter}>
            <Button
              onClick={decrementCount}
              className={classes.counterButton}
              aria-label='Decrease quantity'
              text='-'
              type='button'
            />

            <span>{count}</span>
            <Button
              onClick={() => handleAddToCart(props)}
              className={classes.counterButton}
              aria-label='Increase quantity'
              text='+'
              type='button'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;

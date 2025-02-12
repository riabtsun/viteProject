import classes from './productItem.module.css';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';

export interface ProductDataProps {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
  qty: number;
}

const ProductItem = ({
  name,
  unitPrice,
  imageUrl,
  ingredients,
  soldOut,
}: ProductDataProps) => {
  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(unitPrice);
  const addToCardRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const hideBtn = (): void => {
    if (addToCardRef.current && counterRef.current) {
      addToCardRef.current.style.display = 'none';
      counterRef.current.style.display = 'flex';
    }
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
    setItemPrice((unitPrice += itemPrice));
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
            onClick={hideBtn}
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
              onClick={incrementCount}
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

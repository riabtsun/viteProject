import classes from './productItem.module.css';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';
import { incrementCount, decrementCount } from '../../helpers';

interface ProductDataProps {
  id?: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

const ProductItem = ({
                       name,
                       unitPrice,
                       imageUrl,
                       ingredients,
                       soldOut,
                     }: ProductDataProps) => {
  const [count, setCount] = useState(1);
  const addToCardRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const hideBtn = (): void => {
    if (addToCardRef.current && counterRef.current) {
      addToCardRef.current.style.display = 'none';
      counterRef.current.style.display = 'flex';
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
            ),
          )}
        </p>
        {soldOut ? (
          <p className={classes.soldOut}>SOLD OUT</p>
        ) : (
          <p className={classes.price}>€{unitPrice}</p>
        )}
      </div>
      {!soldOut && (
        <div className='cart-controls'>
          <Button
            ref={addToCardRef}
            onClick={hideBtn}
            className={classes.addToCart}
            text='ADD TO CART'
          ></Button>
          <div ref={counterRef} className={classes.counter}>
            <button
              onClick={() => decrementCount(count, setCount, counterRef, addToCardRef)}
              className={classes.counterButton}
              aria-label='Decrease quantity'
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => incrementCount(count, setCount)}
              className={classes.counterButton}
              aria-label='Increase quantity'
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;

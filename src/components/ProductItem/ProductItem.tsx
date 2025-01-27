import classes from './productItem.module.css';
import { useRef, useState } from 'react';

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
  let [count, setCount] = useState(1);
  const addToCardRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const hideBtn = (): void => {
    if (addToCardRef.current && counterRef.current) {
      addToCardRef.current.style.display = 'none';
      counterRef.current.style.display = 'flex';
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(--count);
    } else {
      if (counterRef.current && addToCardRef.current) {
        counterRef.current.style.display = 'none';
        addToCardRef.current.style.display = 'block';
      }
    }
  };

  const incrementCount = () => {
    setCount(++count);
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
          <p className={classes.price}>€{unitPrice}</p>
        )}
      </div>
      {!soldOut && (
        <div className='cart-controls'>
          <button
            ref={addToCardRef}
            onClick={hideBtn}
            className={classes.addToCart}
          >
            ADD TO CART
          </button>
          <div ref={counterRef} className={classes.counter}>
            <button
              onClick={decrementCount}
              className={classes.counterButton}
              aria-label='Decrease quantity'
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={incrementCount}
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

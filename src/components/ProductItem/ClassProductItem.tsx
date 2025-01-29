import { Component, createRef } from 'react';
import classes from './productItem.module.css';

interface ProductDataProps {
  id?: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

interface ProductDataState {
  count: number;
}

/**
 * Для компонента на класах використовуйте методи життєвого циклу
 * та стан компонента (this.state та this.setState).
 */

class ClassProductItem extends Component<ProductDataProps, ProductDataState> {
  constructor(props: ProductDataProps) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  addToCardRef = createRef<HTMLButtonElement>();
  counterRef = createRef<HTMLDivElement>();

  hideBtn = (): void => {
    if (this.addToCardRef.current && this.counterRef.current) {
      this.addToCardRef.current.style.display = 'none';
      this.counterRef.current.style.display = 'flex';
    }
  };

  decrementCount = (): void => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    } else {
      if (this.counterRef.current && this.addToCardRef.current) {
        this.counterRef.current.style.display = 'none';
        this.addToCardRef.current.style.display = 'block';
      }
    }
  };

  incrementCount = (): void => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { name, unitPrice, imageUrl, ingredients, soldOut } = this.props;
    const { count } = this.state;
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
              ref={this.addToCardRef}
              onClick={this.hideBtn}
              className={classes.addToCart}
            >
              ADD TO CART
            </button>
            <div ref={this.counterRef} className={classes.counter}>
              <button
                onClick={this.decrementCount}
                className={classes.counterButton}
                aria-label='Decrease quantity'
              >
                -
              </button>
              <span>{count}</span>
              <button
                onClick={this.incrementCount}
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
  }
}

export default ClassProductItem;

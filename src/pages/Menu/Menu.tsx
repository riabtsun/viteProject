import classes from './menu.module.css';
import ProductItem from '../../components/ProductItem/ProductItem.tsx';
import pizzas from '../../data.ts';
import ClassProductItem from '../../components/ProductItem/ClassProductItem.tsx';

interface ProductData {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

const Menu = () => {
  return (
    <div className={classes.menuContainer}>
      {pizzas.length ? (
        pizzas.map((pizza: ProductData) => (
          <ClassProductItem key={pizza.id} {...pizza} />
        ))
      ) : (
        <p>No pizzas found</p>
      )}
    </div>
  );
};

export default Menu;

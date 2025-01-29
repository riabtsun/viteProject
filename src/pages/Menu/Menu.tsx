import '../../App.css';
import ProductItem from '../../components/ProductItem/ProductItem.tsx';
import pizzas from '../../menuData.ts';

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
    <div className='container'>
      {pizzas.length ? (
        pizzas.map((pizza: ProductData) => (
          <ProductItem key={pizza.id} {...pizza} />
        ))
      ) : (
        <p>No pizzas found</p>
      )}
    </div>
  );
};

export default Menu;

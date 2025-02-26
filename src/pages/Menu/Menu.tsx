import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import ProductItem from '../../components/ProductItem/ProductItem.tsx';
import { getAllData } from '../../redux/slices/cartSlice.ts';
import { AppDispatch, RootState } from '../../redux/store.ts';
import { ProductData } from '../../types/productData.ts';

const Menu = () => {
  const { menuItems, isLoading, error } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!menuItems.length) {
      dispatch(getAllData());
    }
  }, [dispatch, menuItems.length]);

  return (
    <div className='container'>
      {isLoading && (
        <img src='/pizza_loader.gif' alt='pizza' width='150' height='150' />
      )}
      {error && <p>Fetch failed</p>}
      {menuItems &&
        menuItems.map((pizza: ProductData) => (
          <ProductItem key={pizza.id} {...pizza} />
        ))}
    </div>
  );
};

export default Menu;

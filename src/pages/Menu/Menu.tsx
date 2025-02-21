// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import ProductItem from '../../components/ProductItem/ProductItem.tsx';
import useFetch from '../../hooks/useFetch.ts';
import { ProductData } from '../../types/productData.ts';
// import { getAllData } from '../../redux/slices/cartSlice.ts';
// import { AppDispatch, RootState } from '../../redux/store.ts';

interface IProduct {
  data: ProductData[];
  success: string;
}

const Menu = () => {
  // const { menuItems, isLoading, error } = useSelector(
  //   (state: RootState) => state.cart
  // );
  // const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, isError } = useFetch<IProduct>(
    'https://react-fast-pizza-api.onrender.com/api/menu'
  );

  console.log(data);
  // useEffect(() => {
  //   dispatch(getAllData());
  // }, [dispatch]);

  return (
    <div className='container'>
      {isLoading && (
        <img src='/pizza_loader.gif' alt='pizza' width='150' height='150' />
      )}
      {isError && <p>Fetch failed</p>}
      {data &&
        data.data.map((pizza: ProductData) => (
          <ProductItem key={pizza.id} {...pizza} />
        ))}
    </div>
  );
};

export default Menu;

import '../../App.css';
import ProductItem from '../../components/ProductItem/ProductItem.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductData } from '../../types/productData.ts';

const Menu = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://react-fast-pizza-api.onrender.com/api/menu'
        );
        if (!response) {
          throw new Error('Network response was not ok');
        }
        setData(response.data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Завантаження даних...</h1>;
  }

  return (
    <div className='container'>
      {data.length ? (
        data.map((pizza: ProductData) => (
          <ProductItem key={pizza.id} {...pizza} />
        ))
      ) : (
        <p>All pizzas was eaten 😥</p>
      )}
    </div>
  );
};

export default Menu;

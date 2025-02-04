import '../../App.css';
import ProductItem from '../../components/ProductItem/ProductItem.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ProductData {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

const Menu = () => {
  const [data, setData] = useState<ProductData[]>([]);

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
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      {data.length ? (
        data.map((pizza: ProductData) => (
          <ProductItem key={pizza.id} {...pizza} />
        ))
      ) : (
        <p>No pizzas found</p>
      )}
    </div>
  );
};

export default Menu;

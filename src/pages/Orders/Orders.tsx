import { useSelector } from 'react-redux';
import Order from '../../components/Order/Order.tsx';
import { RootState } from '../../redux/store.ts';
import styles from './orders.module.css';

const Orders = () => {
  const orders = useSelector((state: RootState) => state.orders.orderItems);

  orders.forEach((order) => {
    console.log(order.priority);
  });

  return (
    <div className={styles.container}>
      {orders.map((order, idx) => {
        const cartData = order.cartData,
          priority = order.priority,
          totalPrice = order.totalPrice;
        return (
          <Order
            cartData={cartData}
            priority={priority}
            totalPrice={totalPrice}
          />
        );
      })}
    </div>
  );
};

export default Orders;

import styles from './order.module.css';

const Order = () => {
  // const { id } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.orderTitle}>Order #5T460L status: preparing</h1>
        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.badgePriority}`}>
            PRIORITY
          </span>
          <span className={`${styles.badge} ${styles.badgePreparing}`}>
            PREPARING ORDER
          </span>
        </div>
      </div>

      <div className={styles.timeBanner}>
        <div className={styles.timeLeft}>Only 49 minutes left 😃</div>
        <div className={styles.estimatedTime}>
          (Estimated delivery: Dec 12, 01:37 PM)
        </div>
      </div>

      <div className={styles.orderDetails}>
        <div className={styles.pizzaItem}>
          <div className={styles.pizzaHeader}>
            <span className={styles.pizzaName}>1× Margherita</span>
            <span className={styles.pizzaPrice}>€12.00</span>
          </div>
          <div className={styles.ingredients}>Tomato, Mozzarella, Basil</div>
        </div>
      </div>

      <div className={styles.priceBreakdown}>
        <div className={styles.priceItem}>
          <span className={styles.priceLabel}>Price pizza:</span>
          <span className={styles.priceValue}>€12.00</span>
        </div>
        <div className={styles.priceItem}>
          <span className={styles.priceLabel}>Price priority:</span>
          <span className={styles.priceValue}>€2.00</span>
        </div>
        <div className={styles.priceItem}>
          <span className={styles.priceLabel}>To pay on delivery:</span>
          <span className={styles.priceValue}>€14.00</span>
        </div>
      </div>
    </div>
  );
};

export default Order;

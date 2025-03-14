import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/slices/cartSlice.ts';
import { addOrder } from '../../redux/slices/ordersSlice.ts';
import { userName } from '../../redux/slices/userSlice.ts';
import { RootState } from '../../redux/store.ts';
import { FormState } from '../../types/iFormState.ts';
import styles from './form.module.css';
import { schema } from './schemaForm.ts';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormState>({
    defaultValues: {
      firstName: 'Default',
      phone: '+380',
      address: 'Dnipro',
      priority: false,
    },
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const [priority, setPriority] = useState<boolean>(false);
  const handlePriority = () => {
    return setPriority((prev) => !prev);
  };

  const cartData = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const userStateName = useSelector((state: RootState) => state.user.userName);

  const dispatch = useDispatch();
  const [userInputName, setUserInputName] = useState('');
  const handleInputName = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInputName(e.target.value);
    register('firstName').onChange(e);
    console.log(e.target.value);
  };

  const handleSubmitForm: SubmitHandler<FormState> = (data) => {
    console.log(data);
    dispatch(userName(userInputName));
    dispatch(addOrder({ cartData, totalPrice, priority }));
    dispatch(clearCart());
    navigate('/orders/1');
  };

  return (
    <div className='container'>
      <h1>Ready to order? Let's go!</h1>

      <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <div className={styles.formGroup}>
          <label htmlFor='firstName'>First name</label>
          <input
            type='text'
            id='firstName'
            readOnly={!!userStateName}
            onChange={handleInputName}
            value={!userStateName ? userInputName : userStateName}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='phone'>Phone number</label>
          <input
            type='text'
            id='phone'
            required={true}
            {...register('phone')}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='address'>Address</label>
          <div className='input-wrapper'>
            <input
              type='text'
              id='address'
              required={true}
              {...register('address')}
            />
          </div>
        </div>
        <div className={styles.checkboxGroup}>
          <div className={styles.checkboxWrapper}>
            <input
              type='checkbox'
              id='priority'
              checked={priority}
              onChange={handlePriority}
            />
            <label htmlFor='priority'>Want to give your order priority?</label>
          </div>
        </div>

        <button type='submit' className={styles.orderBtn} disabled={!isValid}>
          Order now for €{totalPrice}
        </button>
      </form>
    </div>
  );
};

export default Form;

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormState } from '../../types/iFormState.ts';
import styles from './form.module.css';

export const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Ім'я має бути не менше 3 символів" })
    .max(15, { message: "Ім'я має бути не більше 15 символів" }),
  email: z.string().email(),
  age: z.number().min(10).max(99).positive(),
  password: z.string().min(6),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormState>({
    defaultValues: {
      username: 'Default',
      age: 10,
      password: 'qwerty',
      email: 'default@email.com',
    },
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });
  const handleSubmitForm: SubmitHandler<FormState> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor=''>
        Your name
        <input type='text' {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </label>
      <label>
        Age
        <input type='number' min={10} max={99} {...register('age')} />
      </label>
      <label>
        Password
        <input type='password' {...register('password')} />
      </label>
      <label>
        Email
        <input type='email' {...register('email')} />
      </label>
      <button type={'submit'} disabled={!isValid}>
        Submit form
      </button>
    </form>
  );
};

export default Form;

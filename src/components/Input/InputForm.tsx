import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../Button/Button.tsx';
import btnClasses from '../Button/button.module.css';
import { useNavigate } from 'react-router-dom';
// import { UserContextProvider } from '../../contexts/UserContextProvider.ts';
import { useDispatch } from 'react-redux';
import { userName } from '../../redux/slices/userSlice.ts';

interface InputProps {
  type: string;
  className?: string;
  placeHolder: string;
  ariaLabel: string;
  withBtn: boolean;
  navigateTo?: string;
}

const InputForm = ({
  type,
  placeHolder,
  ariaLabel,
  className,
  withBtn,
  navigateTo,
}: InputProps) => {
  const [inputState, setInputState] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputState(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  // const data = useContext(UserContextProvider);

  const dispatch = useDispatch();
  const handleChangeName = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // data?.setName(inputState);
    navigate(navigateTo ?? '/');
    dispatch(userName(inputState));
  };

  return (
    <form onSubmit={handleChangeName}>
      <input
        className={className}
        type={type}
        placeholder={placeHolder}
        aria-label={ariaLabel}
        onChange={handleInput}
        value={inputState}
      />
      {withBtn && (
        <Button
          type='submit'
          text='Start Order'
          className={btnClasses.orderBtn}
        />
      )}
    </form>
  );
};

export default InputForm;

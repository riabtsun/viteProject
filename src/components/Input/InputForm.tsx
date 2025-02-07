import { ChangeEvent, useState, useContext } from 'react';
import Button from '../Button/Button.tsx';
import btnClasses from '../Button/button.module.css';
import { useNavigate } from 'react-router-dom';
import { UserContextProvider } from '../../contexts/UserContext.tsx';

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
  const [inputState, setInputState] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputState(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  const data = useContext(UserContextProvider);

  const handleChangeName = (): void => {
    data?.setName(inputState);
    navigate(navigateTo ?? '/');
  };

  return (
    <form>
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
          onClick={handleChangeName}
        />
      )}
    </form>
  );
};

export default InputForm;

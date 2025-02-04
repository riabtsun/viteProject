import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button.tsx';
import btnClasses from '../Button/button.module.css';
import { useNavigate } from 'react-router-dom';

interface InputProps {
  type: string;
  className?: string;
  placeHolder: string;
  ariaLabel: string;
  withBtn: boolean;
  navigateTo?: string;
}

const Input = ({
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
  const btnNavigate = (): void => {
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
          onClick={btnNavigate}
        />
      )}
    </form>
  );
};

export default Input;

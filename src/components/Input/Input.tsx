import { ChangeEvent, useState } from 'react';

interface InputProps {
  type: string;
  className?: string;
  placeHolder: string;
  ariaLabel: string;
}

const Input = ({ type, placeHolder, ariaLabel, className }: InputProps) => {
  const [inputState, setInputState] = useState('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputState(e.target.value);
    console.log(e.target.value);
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
    </form>
  );
};

export default Input;

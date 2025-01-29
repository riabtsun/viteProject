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
    setInputState(inputState);
    console.log(e.target.value);
  };
  return (
    <input
      className={className}
      type={type}
      placeholder={placeHolder}
      aria-label={ariaLabel}
      onChange={handleInput}
      value={inputState}
    />
  );
};

export default Input;

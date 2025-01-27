import classes from './button.module.css';
import { useRef } from 'react';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function getRandomColor(): void {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = color;
    }
  }

  return (
    <button ref={buttonRef} onClick={getRandomColor} className={classes.btn}>
      {text}
    </button>
  );
};

export default Button;

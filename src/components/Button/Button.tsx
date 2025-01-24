import classes from './button.module.css';
import {useRef} from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const buttonRef = useRef(null);

  function getRandomColor():void {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    buttonRef.current.style.backgroundColor = color;
  }

  return <button ref={buttonRef} onClick={getRandomColor} className={classes.btn}>{text}</button>;
};

export default Button;

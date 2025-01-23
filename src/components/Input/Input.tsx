import classes from './input.module.css';

interface InputProps {
  placeHolder: string;
  ariaLabel: string;
}

const Input = ({ placeHolder, ariaLabel }: InputProps) => {
  return (
    <input
      className={classes.input}
      type='text'
      placeholder={placeHolder}
      aria-label={ariaLabel}
    />
  );
};

export default Input;

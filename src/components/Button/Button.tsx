import classes from './button.module.css';

interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return <button className={classes.btn}>{text}</button>;
};

export default Button;

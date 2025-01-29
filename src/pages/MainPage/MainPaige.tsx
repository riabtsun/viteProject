import classes from '../../components/Input/input.module.css';
import btnClasses from '../../components/Button/button.module.css';
import typographyClasses from '../../components/Typography/typography.module.css';
import Typography from '../../components/Typography/Typography.tsx';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';

const MainPaige = () => {
  return (
    <>
      <Typography className={typographyClasses.mainTitle} tag='h1'>
        The best pizza.
      </Typography>
      <Typography tag='p' className='subtitle'>
        Straight out of the oven, straight to you.
      </Typography>
      <Typography tag='p' className={typographyClasses.welcome}>
        👉 Welcome! Please start by telling us your name
      </Typography>
      <Input
        placeHolder='Your full name'
        ariaLabel='Your full name'
        type={'text'}
        className={classes.input}
      />
      <Button text='Start Order' className={btnClasses.orderBtn} />
    </>
  );
};

export default MainPaige;

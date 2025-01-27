import Typography from '../../components/Typography/Typography.tsx';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';

const MainPaige = () => {
  return (
    <>
      <Typography className='mainTitle' tag='h1'>
        The best pizza.
      </Typography>
      <Typography tag='p' className='subtitle'>
        Straight out of the oven, straight to you.
      </Typography>
      <Typography tag='p' className='welcome'>
        👉 Welcome! Please start by telling us your name
      </Typography>
      <Input placeHolder='Your full name' ariaLabel='Your full name' />
      <Button text='Start Order' />
    </>
  );
};

export default MainPaige;

import './App.css';
import './components/Typography/typography.module.css';
import Header from './components/Layout/Header/Header';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Typography from './components/Typography/Typography';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Typography className="mainTitle" tag="h1">
          The best pizza.
        </Typography>
        <Typography tag="p" className="subtitle">
          Straight out of the oven, straight to you.
        </Typography>
        <Typography tag="p" className="welcome">
          👉 Welcome! Please start by telling us your name
        </Typography>
        <Input placeHolder="Your full name" ariaLabel="Your full name" />
        <Button text="Start Order" />
      </main>
    </div>
  );
}

export default App;

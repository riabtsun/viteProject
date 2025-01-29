import './App.css';
import './components/Typography/typography.module.css';
import Header from './components/Layout/Header/Header';
import MainPaige from './pages/MainPage/MainPaige.tsx';
import Menu from './pages/Menu/Menu.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart.tsx';

function App() {
  return (
    <Router>
      <div className='containerFluid'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<MainPaige />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

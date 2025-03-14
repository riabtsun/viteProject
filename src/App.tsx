import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/Header';
import Order from './components/Order/Order.tsx';
import './components/Typography/typography.module.css';
import Cart from './pages/Cart/Cart.tsx';
import Form from './pages/Form/Form.tsx';
import MainPaige from './pages/MainPage/MainPaige.tsx';
import Menu from './pages/Menu/Menu.tsx';
import Orders from './pages/Orders/Orders.tsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.tsx';

function App() {
  return (
    <div className='containerFluid'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<MainPaige />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/form' element={<Form />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path={'/orders'} element={<Orders />} />
          <Route path={'/orders/:id'} element={<Order />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

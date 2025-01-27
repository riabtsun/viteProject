import './App.css';
import './components/Typography/typography.module.css';
import Header from './components/Layout/Header/Header';
import MainPaige from './pages/MainPage/MainPaige.tsx';
import Menu from './pages/Menu/Menu.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<MainPaige />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

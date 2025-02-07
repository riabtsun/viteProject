import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import UserContext from './contexts/UserContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <UserContext>
        <App />
      </UserContext>
    </HashRouter>
  </StrictMode>
);

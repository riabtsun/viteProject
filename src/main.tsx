import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import UserContext from './contexts/UserContext.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/*<UserContext>*/}
      <Provider store={store}>
        <App />
      </Provider>
      {/*</UserContext>*/}
    </BrowserRouter>
  </StrictMode>
);

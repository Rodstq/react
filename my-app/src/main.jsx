import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Only here
import './index.css';
import './pages/css/home.css';
import App from './App.jsx';
import Cabecalho from './components/header';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* BrowserRouter only wraps the root component */}
      <Cabecalho />
      <App />
    </BrowserRouter>
  </StrictMode>
);

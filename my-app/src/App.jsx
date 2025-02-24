import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';  // No BrowserRouter import here
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <div className='app-body'>
      <Routes>  {/* This is fine to be used directly here */}
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

export default App;

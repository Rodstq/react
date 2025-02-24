import React from "react";
import './cabecalho.css';
import { Link } from 'react-router-dom';  // Importando o Link do React Router



const Cabecalho = () => {
    return (
        <header className="cabecalho">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>  {/* Link para a Home */}
          <li><Link to="/sobre">Sobre</Link></li>  {/* Link para a Sobre */}
          <li><Link to="/contato">Contato</Link></li>  {/* Link para a Contato */}
        </ul>

        <ul>
          <li><Link to="/">Login</Link></li>  {/* Link para a Home */}
          <li><Link to="/sobre">Cadastro</Link></li>  {/* Link para a Sobre */}
          <li><Link to="/sobre">Minha Conta</Link></li>  {/* Link para a Sobre */}
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
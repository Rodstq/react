// src/pages/Home.jsx
import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/usuarios")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro na requisição");
        }
        return resposta.json();
      })
      .then((data) => {
        setDados(data);
        setCarregando(false);
      })
      .catch((erro) => {
        setErro(erro.message);
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;


  return (
  <div className='home-body'>
    <h2>Home</h2>
    <p>Bem-vindo à página inicial!</p>
    <table className="table table-bordered table-striped">
    <thead> 
      <tr>
        <th>cpf</th>
        <th>nome</th>
        <th>telefone</th>
        <th>formacao</th>
        <th>usuario</th>
      </tr>
    </thead> 
    <tbody>
      {dados.map((usuario, index) => (
        <tr key={index}>
          <td>{usuario.nome}</td>
          <td>{usuario.cpf}</td>
          <td>{usuario.telefone}</td>
          <td>{usuario.formacao}</td>
          <td>{usuario.tipousuario}</td>
        </tr>
      ))}
    </tbody>
    </table>
</div>
  );
}

export default Home;
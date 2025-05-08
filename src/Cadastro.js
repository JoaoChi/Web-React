import React, { useState } from 'react';
import './App.css'; // usa o mesmo estilo do login
import logo from './loog.webp';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillExperiment } from "react-icons/ai";

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro:', { nome, email, senha });
  };

  return (
    <div className="container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
        <AiFillExperiment size={40} color='#7494ec'/>
          <h1>Cadastro</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">Cadastrar</button>

          <p className="social-text">Ou cadastre-se com plataformas digitais</p>
          <div className="social-icons">
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

          <p className="footer-register">
            Já tem uma conta? <Link to="/">Voltar para login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;

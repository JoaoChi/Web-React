// App.js
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillExperiment } from "react-icons/ai";

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, senha });
  };

  return (
    <div className="container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
        <AiFillExperiment size={40} color='#7494ec'/>
        <h1>Login</h1>

          <div className="input-box">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className='bx bxs-envelope'></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <i className='bx bxs-eye-off'></i> 
            <i className='bx bx-hide'></i>
          </div>

          <div className="forgot-link">
            <a href="/">Esqueceu sua senha?</a>
          </div>

          <button type="submit" className="btn">Entrar</button>

          <p className="social-text">Login com plataformas digitais</p>
          <div className="social-icons">
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

          <p className="footer-register">
            Não possui uma conta? <Link to="/cadastro">Registre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;

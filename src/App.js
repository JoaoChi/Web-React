import React, { useState } from 'react';
import './App.css';
import logo from './loog.webp';
import { Link } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, senha });
  };
  

  return (
    <div className="App">
      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />
        <h1 className='title'>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <text className='text-email'>E-mail</text>
          <input
            type="email"
            placeholder="@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <text className='text-senha'>Senha</text>
          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <p className="footer-text">
            <a href="/esqueci-senha">Esqueci minha senha</a>
          </p>
          <button type="submit">Entrar</button>
          <p className="footer-register">
            Não possui uma conta? <Link to="/cadastro">Registre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;

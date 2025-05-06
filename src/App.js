import React, { useState } from 'react';
import './App.css';
import logo from './loog.webp';

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
        <h2>Bem-vindo!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <p className="footer-text">Esqueci minha senha</p>
      </div>
    </div>
  );
}

export default App;

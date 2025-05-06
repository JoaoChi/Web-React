import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Cadastro:', { nome, email, senha });
    };

    return (
        <div className="cadastro-container">
                <h1 className="text-cadastro">Cadastro de Usuário</h1>
                <div className="cadastro-column">
                <form onSubmit={handleSubmit} className="cadastro-form">
                    <label>Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Cadastrar</button>

                    <p>
                        Já tem uma conta? <Link to="/">Voltar para login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;

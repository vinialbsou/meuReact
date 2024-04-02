import React, { useState } from 'react';
import '../App.css';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verifica se as senhas são iguais
        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais');
            return;
        }
        // Aqui você pode enviar os dados do usuário para o backend
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
    };

    return (
        <div className="cadastro-container">
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        placeholder="Nome"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        placeholder="Senha"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="confirmarSenha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                        placeholder="Confirmar Senha"
                    />
                </div>
                <button type="submit" className="btn-cadastrar">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroUsuario;

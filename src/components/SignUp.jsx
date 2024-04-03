import React, { useState } from 'react';
import '../App.css';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');

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
        console.log('CPF:', cpf);
        console.log('Data de Nascimento:', dataNascimento);
        console.log('Cidade:', cidade);
        console.log('Estado:', estado);
        console.log('País:', pais);
    };

    return (
        <div className="cadastro-container">
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
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
                        className="register"
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
                        className="register"
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
                        className="register"
                        id="confirmarSenha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                        placeholder="Confirmar Senha"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                        placeholder="CPF"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        className="register"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                        placeholder="Data de Nascimento"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                        placeholder="Cidade"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        required
                        placeholder="Estado"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
                        id="pais"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        required
                        placeholder="País"
                    />
                </div>
                <button type="submit" className="btn-cadastrar">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroUsuario;

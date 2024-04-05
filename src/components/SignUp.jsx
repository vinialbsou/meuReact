import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import axios from 'axios';

const userRegistration = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');

    const dispatch = useDispatch();
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

    const handleButtonClick = async () => {
        // const response = await axios.get('https://api.example.com/register');
        // console.log(response.data);
        // dispatch({ type: 'USER_REGISTER', payload: {nome, email, senha, cpf, dataNascimento, cidade, estado, pais} }); // Dispatch da ação para buscar o usuário com ID 1
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
                    <label htmlFor="genero">Gênero:</label>
                    <select
                        id="genero"
                        className="register"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        required
                    >
                        <option value="">Selecione...</option>
                        <option value="cis_women">Mulher cisgênero</option>
                        <option value="trans_women">Mulher transexual</option>
                        <option value="cis_man">Homem cisgênero</option>
                        <option value="trans_man">Homem transexual</option>
                        <option value="non_binary">Gênero não-binário</option>
                        <option value="agender">Agênero</option>
                        <option value="fluid_gender">Gênero-fluido</option>
                        <option value="Bigender">Bigênero</option>
                        <option value="Polygender">Poligênero</option>
                        <option value="Gender_neutral">Gênero neutro</option>
                    </select>
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
                <button type="submit" className="btn-cadastrar" onClick={handleButtonClick}>Cadastrar</button>
            </form>
        </div>
    );
};

export default userRegistration;

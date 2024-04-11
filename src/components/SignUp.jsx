import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import '../App.css';
import {userRegister} from "../reducers/users";

function UserRegistration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [state, setStates] = useState('');
    const [country, setCountry] = useState('');
    const dispatch = useDispatch();
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleBlur = () => {
        if(confirmPassword === '')
            return;

        setPasswordsMatch(password === confirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setPasswordsMatch(password === confirmPassword);

        // console.log('name:', name);
        // console.log('Email:', email);
        // console.log('password:', password);
        // console.log('CPF:', cpf);
        // console.log('Data de Nascimento:', birthDate);
        // console.log('city:', city);
        // console.log('state:', state);
        // console.log('País:', country);

    };

    function handleButtonClick(values) {
        const cpf = values.cpf.replace(/\D/g, ''); //Only numbers

        dispatch({
            type: userRegister,
            payload: {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    cpf: cpf,
                    birthDate: values.birthDate,
                    gender: values.gender,
                    city: values.city,
                    state: values.state,
                    country: values.country
            }
        })
    }


    return (
        <div className="cadastro-container">
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="name"
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
                        id="password"
                        value={password}
                        //onChange={(e) => setPassword(e.target.value)}
                        onChange={handlePasswordChange}
                        onBlur={handleBlur}
                        required
                        placeholder="Senha"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="register"
                        id="confirmPassword"
                        value={confirmPassword}
                        //onChange={(e) => setConfirmPassword(e.target.value)}
                        onChange={handleConfirmPasswordChange}
                        onBlur={handleBlur}
                        required
                        placeholder="Confirmar password"
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
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                        placeholder="Data de Nascimento"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gênero:</label>
                    <select
                        id="gender"
                        className="register"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
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
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="Cidade"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
                        id="states"
                        value={state}
                        onChange={(e) => setStates(e.target.value)}
                        required
                        placeholder="Estado"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="register"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                        placeholder="País"
                    />
                </div>
                {!passwordsMatch && <p className="password-match">As senhas não são iguais</p>}
                <button type="submit" className="btn-cadastrar" onClick={() => handleButtonClick({
                    name,
                    email,
                    password,
                    confirmPassword,
                    cpf,
                    birthDate,
                    gender,
                    city,
                    state,
                    country
                })}>Cadastrar
                </button>
            </form>
        </div>
    );
};

export default UserRegistration;

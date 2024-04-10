import React from 'react';
import './App.css';
import Login from './components/Login.jsx';
import TopMenu from './components/TopMenu.jsx';
import SignUp from './components/SignUp.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {connect} from 'react-redux';

function App(props) {

    return (
        <div className="App">
            <Router>
                <div>
                    <TopMenu/>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/singup" element={<SignUp/>}/>
                    </Routes>
                </div>
            </Router>
        </div>

    );
}

const mapState = (state) => ({
    //language: state.language.language,
    name: state.user.name,
    email: state.user.email,
    password: state.user.password,
    cpf: state.user.cpf,
    birthDate: state.user.birthDate,
    genero: state.user.genero,
    city: state.user.city,
    state: state.user.state,
    country: state.user.country,
});

const connector = connect(mapState);

export default connector(App);
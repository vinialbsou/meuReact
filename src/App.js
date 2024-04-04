import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login.jsx';
import TopMenu from './components/TopMenu.jsx';
import SignUp from './components/SignUp.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider, connect, useDispatch } from 'react-redux';
import store from './store/index.js';
import {
    userRegister
} from "./reducers/users";

function App(props) {

    useEffect(() => {
        store.dispatch({
            type: userRegister,
            payload: {
                language: props.language ?? 'pt-BR',
            },
        });
    }, []);

    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;

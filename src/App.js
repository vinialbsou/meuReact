import React from 'react';
import './App.css';
import Login from './components/Login.jsx';
import TopMenu from './components/TopMenu.jsx';
import SignUp from './components/SignUp.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

function App() {
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

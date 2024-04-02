import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.jsx';
import TopMenu from './components/TopMenu.jsx';
import SignUp from './components/SignUp.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
        <Router>
            <div>
                <TopMenu />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/singup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;

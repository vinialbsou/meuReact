import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import iconLoginImage from '../assets/icons/loginIcon.jpg';

const TopMenu = () => {
    return (
        <div className="top-menu">
            <div className="logo">Logo</div>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="login-button">
                <button>
                    <Link to="/login">
                        <img src={iconLoginImage} alt="Login" className="iconImage"/> {/* add login icon*/}
                    </Link>
                </button>
            </div>
        </div>
    );
};


export default TopMenu;

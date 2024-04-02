import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import iconLoginImage from '../assets/icons/loginIcon.jpg';
import { Button, Tooltip } from '@mui/material';

const TopMenu = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Lógica para fazer logout
        setIsLoggedIn(false);
    };

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
                {isLoggedIn ? (
                    <Tooltip title="Logout">
                        <Button onClick={handleLogout}>
                            <FontAwesomeIcon icon={faUser}/>
                        </Button>
                    </Tooltip>
                ) : (
                    <Tooltip title="Logar">
                        <Button>
                            <Link to="/login">
                                <img src={iconLoginImage} alt="Login" className="iconImage"/>
                            </Link>
                        </Button>
                    </Tooltip>
                )}
            </div>
        </div>
    );
};


export default TopMenu;

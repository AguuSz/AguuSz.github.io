import React from 'react';
import './header.styles.scss'

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="option">Inicio</Link>
            <div className="opciones">
                <Link to="/signIn" className="option">Log in</Link>
                <Link to="/about" className="option">Acerca</Link>
            </div>
        </div>
    )
}

export default Header;
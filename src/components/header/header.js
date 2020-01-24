import React from 'react';
import './header.styles.scss'

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="option">INICIO</Link>
                <div className="opciones">
                    {
                        currentUser ?
                            (<div className="option sign-out" onClick={() => auth.signOut()}>CERRAR SESION</div>)
                            :
                            (<Link to="/signIn" className="option green">INICIAR SESION</Link>)
                    }
                    <Link to="/about" className="option">ACERCA</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
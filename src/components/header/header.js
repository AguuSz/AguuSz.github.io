import React from 'react';
import './header.styles.scss'

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, isLoading }) => {

    const showOnceLoaded = () => {
        if (!isLoading) {
            return (
                currentUser ?
                    (<div className="option sign-out" onClick={() => auth.signOut()}>CERRAR SESION</div>)
                    :
                    (<Link to="/signIn" className="option green">INICIAR SESION</Link>)
            )
        } else {
            return (
                <div className="option sign-out"> - </div>
            )
        }
    }

    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="option">INICIO</Link>
                <div className="opciones">
                    {
                        showOnceLoaded()
                    }
                    <Link to="/about" className="option">ACERCA</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
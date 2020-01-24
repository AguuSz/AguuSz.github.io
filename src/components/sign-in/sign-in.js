import React from 'react';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import Swal from 'sweetalert2';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            }, () => {
                Swal.fire(
                    'Exito!',
                    'Ha iniciado sesion, ahora puede ir al homescreen',
                    'success'
                )
            })

        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Ya tengo cuenta</h2>
                <span>Inicie sesion con su correo y contraseña</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Correo"
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Contraseña"
                        required
                        handleChange={this.handleChange}
                    />

                    <div className="buttons">
                        <CustomButton type="submit">INICIAR SESION</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Iniciar sesion con Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
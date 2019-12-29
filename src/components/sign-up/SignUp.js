import React, { Component } from 'react'
import firebase from 'firebase';
import Swal from 'sweetalert2';

export class SignUp extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        //Evita que se refresque la pagina
        e.preventDefault();

        const errors = [];
        const { email, password, password2 } = this.state;

        //Realiza una comprobacion
        if (password !== password2) {
            errors.push('Passwords must be identical');
        }

        //Una vez no hay errores
        if (errors.length === 0) {
            //Manda los datos a la DB
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState({
                        name: '',
                        email: '',
                        password: '',
                        password2: ''
                    }, () => {
                        Swal.fire(
                            'Te haz registrado correctamente!!',
                            'Ahora inicia sesion para empezar a usar la app',
                            'success'
                        )
                    });

                })
                .catch((error) => {
                    alert(error)
                })
        } else {
            alert(errors);
        }
    }

    render() {
        return (
            <div className="row mt-2 mx-auto container w-50">
                <div className="my-4 mr-3 col-sm-12">
                    <div className="card">
                        <h3 className="card-header card-title">Sign up</h3>
                        <form className="card-body form-group" onSubmit={this.handleSubmit} autoComplete="off">
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Name"
                                required>
                            </input>
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Email"
                                required>
                            </input>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Password"
                                required>
                            </input>
                            <input
                                type="password"
                                name="password2"
                                value={this.state.password2}
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Repeat password"
                                required>
                            </input>

                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Register"></input>
                            <br />

                            <a href="/" className="btn btn-warning">Forgot password?</a>
                            <br />
                            <br />
                            <a href="/signIn" className="btn btn-dark">Do you already have an account?</a>



                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp

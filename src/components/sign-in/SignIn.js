import React, { Component } from 'react'
import firebase from 'firebase';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';

export class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            idUsuario: '',
            emailUsuario: '',
            nameUsuario: '',
            emailVerifiedUsuario: '',
            photoURLUsuario: '',
            redirect: false
        }
    }

    userLogged = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                const { email, uid, displayName, emailVerified, photoURL } = user;

                this.setState({
                    idUsuario: uid,
                    emailUsuario: email,
                    nameUsuario: displayName,
                    emailVerifiedUsuario: emailVerified,
                    photoURLUsuario: photoURL,
                });
                // ...
            } else {
                // User is signed out.
                this.setState({
                    idUsuario: '',
                    emailUsuario: '',
                    nameUsuario: '',
                    emailVerifiedUsuario: '',
                    photoURLUsuario: ''
                });
            }
        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        //Evita que se refresque la pagina
        e.preventDefault();

        const { email, password } = this.state;

        //Comprueba que los datos existan en la base de datos
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                Swal.fire(
                    'Done!',
                    'You have logged in',
                    'success'
                )
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    redirect: true
                })
            })
            .catch((error) => {
                error = error.toString();
                Swal.fire(
                    "There's been an error!",
                    error,
                    'error'
                )
            })

    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <div className="row mt-4 mx-auto container w-50">
                <div className="my-4 mr-3 col-sm-12">
                    <div className="card">
                        <h3 className="card-header card-title">Sign in</h3>
                        <form className="card-body form-group" onSubmit={this.handleSubmit} autoComplete="off">
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

                            <input type="checkbox" name="rememberMe" id="remember" />
                            <label htmlFor="remember">Remember me</label>

                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Sign in"></input>
                            <br />

                            <a href="/" className="btn btn-warning">Forgot password?</a>
                            <br />
                            <br />
                            <a href="/signUp" className="btn btn-dark">Create an account</a>


                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn

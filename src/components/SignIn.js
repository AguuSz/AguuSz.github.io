import React, { Component } from 'react'
import firebase from 'firebase';
import Swal from 'sweetalert2';

export class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
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
                    password: ''
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

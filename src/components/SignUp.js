import React, { Component } from 'react'

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

        //Manda los datos a la DB


        //Resetea el estado de la app
        this.setState({
            name: '',
            email: '',
            password: '',
            password2: ''
        })
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
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Name"
                                required>
                            </input>
                            <input
                                type="text"
                                name="email"
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Email"
                                required>
                            </input>
                            <input
                                type="text"
                                name="password"
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Password"
                                required>
                            </input>
                            <input
                                type="text"
                                name="password2"
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Repeat password"
                                required>
                            </input>

                            <input type="checkbox" name="rememberMe" id="remember" />
                            <label htmlFor="remember">Remember me</label>

                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Sign in"></input>
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

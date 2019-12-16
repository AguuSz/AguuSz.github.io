import React, { Component } from 'react'

export class SignIn extends Component {

    handleInput = () => {

    }

    handleSubmit = () => {

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
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Email">
                            </input>
                            <input
                                type="text"
                                name="password"
                                onChange={this.handleInput}
                                className="form-control form-control-md text-center mb-3"
                                placeholder="Password">
                            </input>

                            <input type="checkbox" name="rememberMe" id="remember" />
                            <label for="remember">Remember me</label>

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

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/header';
import TodoList from './components/todoList/TodoList';
import Formulario from "./components/formulario/Formulario";
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';

class App extends Component {

	constructor() {
		super()
		this.state = {
			usuario: '',
			email: ''
		}
	}

	updateState = (data) => {

	}
	render() {
		return (
			<Router>
				<div className="App">
					<Header titulo="Tasks" />

					<div className="container">
						<Route path="/" exact>
							<div className="row mt-4">
								<div className="col-md-3 col-sm-12">
									<Formulario />
								</div>
								<div className="col-md-9">
									<TodoList />
								</div>
							</div>
						</Route>
						<Route path="/signIn">
							<SignIn />
						</Route>
						<Route path="/signUp">
							<SignUp />
						</Route>

					</div>
				</div>
			</Router>
		);
	}
}

export default App;

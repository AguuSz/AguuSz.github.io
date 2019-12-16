import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import Formulario from "./components/Formulario";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navigation titulo="Tasks" />

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

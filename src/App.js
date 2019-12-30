import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import de componentes
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import SignInAndSignUp from './components/sign-in-and-sign-up/SignInAndSignUp';
import About from './components/about/About';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			test: ''
		}
	}

	render() {
		return (
			<Router>
				<Header />
				<Route path="/" exact component={Homepage}></Route>
				<Route path="/signIn" component={SignInAndSignUp}></Route>
				<Route path="/about" component={About}></Route>
			</Router>
		)
	}
}

export default App;
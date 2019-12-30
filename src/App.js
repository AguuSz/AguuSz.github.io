import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import de componentes
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import SignInAndSignUp from './components/sign-in-and-sign-up/SignInAndSignUp';
import About from './components/about/About';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	unsuscribeFromAuth = null;

	componentDidMount() {
		this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//Si el usuario esta con la sesion iniciada
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					});
				})
			} else { //En caso de que no este iniciada la sesion
				this.setState({ currentUser: null });

			}
		})
	}

	//Para evitar leaks en la memoria
	componentWillUnmount() {
		this.unsuscribeFromAuth();
	}

	render() {
		return (
			<Router>
				<Header currentUser={this.state.currentUser} />
				<Route path="/" exact render={(props) => <Homepage currentUser={this.state.currentUser} />} />
				<Route path="/signIn" component={SignInAndSignUp}></Route>
				<Route path="/about" component={About}></Route>
			</Router>
		)
	}
}

export default App;
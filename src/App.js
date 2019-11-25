import React, { Component } from 'react';
import './App.css';


import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import Formulario from "./components/Formulario";


// firebase.firestore().collection('todos').add({
// 	"title": "Prueba con zeman",
// 	"description": "Resumen maquinas termicas",
// 	"priority": "high",
// 	"id": uuid.v4()
// })


class App extends Component {

	// delTodo = (id) => {
	// 	this.setState({
	// 		tareas: [...this.state.tareas.filter(todo => todo.id !== id)]
	// 	});
	// }
	render() {
		return (
			<div className="App">
				<Navigation titulo="Tasks" />

				<div className="container">
					<div className="row mt-4">
						<div className="col-md-3 col-sm-12">
							<Formulario />
						</div>
						<div className="col-md-9">
							<TodoList />
						</div>
					</div>
				</div>
			</div >
		);
	}
}

export default App;

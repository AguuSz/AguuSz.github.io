import React, { Component } from 'react';
import firebase from 'firebase';
import mydate from 'current-date';

class Formulario extends Component {
    state = {
        title: '',
        description: ''
    }
    handleInput = this.handleInput.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        firebase.firestore().collection('todos').add({
            "title": this.state.title,
            "description": this.state.description,
            "date": mydate('date'),
            "hour": mydate('time')
        })

        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <div className="my-4 mr-3 col-sm-12">
                <div className="card">
                    <h3 className="card-header card-title">Añadir tarea</h3>
                    <form className="card-body form-group" onSubmit={this.handleSubmit} autoComplete="off">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control form-control-md text-center mb-3"
                            value={this.state.title}
                            placeholder="Tarea">
                        </input>
                        <input
                            type="text"
                            name="description"
                            onChange={this.handleInput}
                            className="form-control form-control-md text-center mb-3"
                            value={this.state.description}
                            placeholder="Descripcion">
                        </input>
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Añadir"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;
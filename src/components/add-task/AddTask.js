import React, { Component } from 'react'
import './AddTask.styles.scss';

import { firestore } from '../../firebase/firebase.utils';

export class AddTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            titulo: '',
            descripcion: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log('done')
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { titulo, descripcion } = this.state;
        const { id } = this.props.currentUser;
        const createdAt = new Date();

        const userRef = firestore.collection(`users/${id}/todos`);

        await userRef.add({
            titulo,
            descripcion,
            createdAt
        })

        this.setState({
            titulo: '',
            descripcion: ''
        });

    }

    render() {
        return (
            <div className="add-task">
                <form className="formulario">
                    <h3 className="form-titulo">Añadir tarea</h3>

                    <input
                        className="form-input"
                        name="titulo"
                        value={this.state.titulo}
                        type="text"
                        placeholder="Titulo.."
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-input"
                        name="descripcion"
                        value={this.state.descripcion}
                        type="text"
                        placeholder="Descripcion.."
                        onChange={this.handleChange}
                    />

                    <button className="boton submit" onClick={this.handleSubmit}>AÑADIR</button>
                </form>
            </div>
        )
    }
}

export default AddTask

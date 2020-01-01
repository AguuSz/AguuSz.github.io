import React, { Component } from 'react'
import './AddTask.styles.scss';

import { firestore } from '../../firebase/firebase.utils';

export class AddTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            titulo: '',
            descripcion: '',
            categoria: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { titulo, descripcion, categoria } = this.state;
        const { id } = this.props.currentUser;
        const createdAt = new Date();

        const userRef = firestore.collection(`users/${id}/todos`);

        await userRef.add({
            titulo,
            descripcion,
            categoria,
            createdAt
        })
            .then(() => {
                this.setState({
                    titulo: '',
                    descripcion: '',
                    categoria: ''
                });
            })
            .catch((error) => alert(error))

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
                    <div className="selector-categoria">
                        <label htmlFor="categoria">Categoria: </label>
                        <select name="categoria" className="selector" onChange={this.handleChange} value={this.state.categoria}>
                            <option value="">Varios</option>
                            <option value="libros">Libros</option>
                            <option value="programacion">Programacion</option>
                            <option value="gimnasio">Gimnasio</option>
                        </select>
                    </div>


                    <button className="boton submit" onClick={this.handleSubmit}>AÑADIR</button>
                </form>
            </div>
        )
    }
}

export default AddTask

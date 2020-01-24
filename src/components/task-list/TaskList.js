import React, { Component } from 'react'
import './TaskList.styles.scss'
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

import Task from '../task/task';

import { firestore } from '../../firebase/firebase.utils';
import { FirestoreCollection } from 'react-firestore'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export class TaskList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            categoria: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            categoria: e.target.value
        });
    }

    handleClick = (idTask) => {
        const { id } = this.props.currentUser;
        const docRef = firestore.doc(`users/${id}/todos/${idTask}`);

        docRef.delete()
            .catch((error) => {
                alert(error)
            })
    }

    render() {
        const { id } = this.props.currentUser;
        const { categoria } = this.state;
        return (
            <div className="task-list">
                <h1 className="titulo">Lista de tareas</h1>
                <div className="selector-categoria">
                    <label htmlFor="categoria">Ordenar por categoria: </label>
                    <select name="categoria" className="selector" onChange={this.handleChange}>
                        <option value="">Varios</option>
                        <option value="libros">Libros</option>
                        <option value="programacion">Programacion</option>
                        <option value="gimnasio">Gimnasio</option>
                    </select>
                </div>
                <div className="container">
                    <FirestoreCollection
                        path={`users/${id}/todos`}
                        filter={['categoria', '==', `${categoria}`]}
                        render={({ isLoading, data }) => {
                            return isLoading ? (
                                <PropagateLoader
                                    css={override}
                                    size={25}
                                    //size={"150px"} this also works
                                    color={"#CF1259"}
                                />
                            ) : (
                                    <React.Fragment>
                                        {

                                            data.map(({ id, ...additionalProps }) => (
                                                <Task key={id} id={id} {...additionalProps} onClick={this.handleClick} />
                                            ))
                                        }
                                    </React.Fragment>
                                );
                        }}
                    />
                </div>

            </div>
        )
    }
}

export default TaskList

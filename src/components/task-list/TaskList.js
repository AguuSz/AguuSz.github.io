import React, { Component } from 'react'
import './TaskList.styles.scss'

import Task from '../task/task';

import { firestore } from '../../firebase/firebase.utils';
import { FirestoreCollection } from 'react-firestore'

export class TaskList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        const { id } = this.props.currentUser;
        const userRef = firestore.collection(`users/${id}/todos`);

        const todos = [];

        userRef.onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                todos.push(doc.data())
            })
            this.setState({
                todos: todos
            })
        })
    }

    render() {
        const { id } = this.props.currentUser
        return (
            <div className="task-list">
                <h1 className="titulo">Lista de tareas</h1>
                <div className="container">
                    <FirestoreCollection
                        path={`users/${id}/todos`}
                        render={({ isLoading, data }) => {
                            return isLoading ? (
                                <h1>CARGANDO...</h1>
                            ) : (
                                    <React.Fragment>
                                        {

                                            data.map(({ id, ...additionalProps }) => (
                                                <Task key={id} id={id} {...additionalProps} />
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

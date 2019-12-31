import React, { Component } from 'react'
import './TaskList.styles.scss'

import Task from '../task/task';

export class TaskList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    id: 1,
                    titulo: 'test1',
                    descripcion: 'lorem ipsum 1'
                },
                {
                    id: 2,
                    titulo: 'test2',
                    descripcion: 'lorem ipsum 2'
                }
            ]

        }
    }

    render() {
        return (
            <div className="task-list">
                {
                    this.state.todos.map(({ id, ...otherTodoProps }) => (
                        <React.Fragment key={id}>
                            <Task key={id} {...otherTodoProps} />
                        </React.Fragment>
                    ))
                }
            </div>
        )
    }
}

export default TaskList

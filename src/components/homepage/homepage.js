import React from 'react'
import './homepage.styles.scss';

import AddTask from '../add-task/AddTask';
import TaskList from '../task-list/TaskList';

const Homepage = ({ currentUser }) => (
    <div className="container">
        {
            currentUser ?
                (<div className="homepage">
                    <AddTask currentUser={currentUser} />
                    <TaskList currentUser={currentUser} />
                </div>)
                :
                (<div>
                    <h1>Bienvenido! Inicie sesion para continuar</h1>
                </div>)
        }
    </div>
)

export default Homepage

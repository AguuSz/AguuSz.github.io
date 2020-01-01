import React from 'react';
import './task.styles.scss';

const Task = (props) => (
    <div className="carta">
        <h1 className="titulo">{props.titulo}</h1>
        <p className="descripcion">{props.descripcion}</p>

        <button className="boton pulse" onClick={() => console.log(props.id)}>ELIMINAR</button>
    </div>
)

export default Task;
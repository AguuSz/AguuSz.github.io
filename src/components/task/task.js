import React from 'react';
import './task.styles.scss';

class Task extends React.Component {
    render() {
        return (
            <div className="carta">
                <h1 className="titulo">{this.props.titulo}</h1>
                <p className="descripcion">{this.props.descripcion}</p>

                <button className="boton pulse" onClick={this.props.onClick.bind(this, this.props.id)}>ELIMINAR</button>
            </div>
        )
    }
}

export default Task;
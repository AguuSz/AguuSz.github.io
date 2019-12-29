import React, { Component } from 'react'

export class Carta extends Component {

    render() {
        const { title, date, description, id, hour } = this.props;
        return (
            <div className="col-md-3">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                            {date}
                        </span>
                        <span className="badge badge-pill badge-info ml-2">
                            {hour}
                        </span>
                    </div>
                    <div className="card-body">
                        <p> {description} </p>
                        <button className="btn btn-block btn-danger btn-large"
                            onClick={this.props.onClick.bind(this, id)}
                        >
                            Borrar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carta

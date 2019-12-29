import React, { Component } from 'react'
import Carta from '../carta/Carta';
import '../../App.css'
import { FirestoreCollection } from 'react-firestore';
import { Ripple } from 'react-awesome-spinners';
import firebase from 'firebase';
import Swal from 'sweetalert2';

export class TodoList extends Component {

    onClick = (id) => {
        const db = firebase.firestore();
        console.log(id);

        db.collection("todos").doc(id).delete().then(function () {
            //Que hacer cuando se borre
        }).catch(function (error) {
            //Que hacer cuando tire error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ha ido mal.'
            })

        });
        Swal.fire(
            'Hecho!',
            'Se ha completado la tarea!',
            'success'
        )
    }

    render() {
        return (
            <div className="dou">
                <div className="col-md-12">
                    <div className="row dou">
                        <FirestoreCollection className="row"
                            path="todos"
                            render={({ isLoading, data }) => {
                                return isLoading ? (
                                    <Ripple />
                                ) : (
                                        <React.Fragment>
                                            {data.map(usuario => (
                                                <Carta key={usuario.id} title={usuario.title} date={usuario.date} description={usuario.description} id={usuario.id} hour={usuario.hour} onClick={this.onClick} />
                                            ))}
                                        </React.Fragment>
                                    )
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList


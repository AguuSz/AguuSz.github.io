import React, { Component } from 'react';
import './About.styles.scss'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="about">
                    <h1>Acerca</h1>
                    <p>Esta aplicacion fue creada como practica con React. Se han utilizado varias librerias tales como Firebase, algunos spinners para React y alertas personalizadas.</p>
                    <p>El proposito tambien fue crear una app que sirva para poder anotar las cosas que tenemos que hacer con respecto a varios temas, en mi caso inclui "Varios", "Programacion", "Gimnasio" y "Leer" ya que son las categorias que mas se adaptan a mi estilo de vida.</p>
                    <br />
                    <h2>Cualquier sugerencia, no dudes en mandarmelo a mi <a href="mailto:agus.sepu2000@hotmail.com?subject='Sugerencias'">correo</a></h2>
                </div>



                <div className="whoami">
                    <p>Hecha por <strong>Agustin Sepulveda</strong> </p>
                    <p>Me podes encontrar en:</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/AguuSz">
                        <i class="fab fa-github"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/agus.sepulveda02">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/p9ahxub">
                        <i class="fab fa-discord"></i>
                    </a>

                </div>

            </div>
        )
    }
}

export default About

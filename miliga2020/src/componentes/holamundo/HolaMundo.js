import React from "react";
import './HolaMundo.css';
class HolaMundo extends React.Component {
    render() {
        return (<div>
                {/*poner comentarios dentro la etiqueta padre*/}
                {/*<p>Hola Mundo......</p>*/}
                <h2>HOLA {this.props.nombre} con edad {this.props.edad}</h2>
                <p>Hola Mundo.</p>
            </div>
        );
    }
}


export default HolaMundo;
import React from "react";
//Material
import Button from '@material-ui/core/Button';
//Estilos
import './HolaMundo.css';

class HolaMundo extends React.Component {
    render() {
        return (<div>
                {/*poner comentarios dentro la etiqueta padre*/}
                {/*<p>Hola Mundo......</p>*/}
                <h2>HOLA {this.props.nombre} con edad {this.props.edad}</h2>
                <p className={ this.props.tipo }>HLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <Button variant="contained" color="secondary" >
                    +
                </Button>
        </div>


        );
    }
}


export default HolaMundo;
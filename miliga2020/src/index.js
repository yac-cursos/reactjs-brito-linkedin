import React from 'react';
import { render } from "react-dom";
import * as serviceWorker from './serviceWorker';
// Estilos
import './index.css'
//componentes
import Header from './componentes/layout/header/Header';
import CssBaseline from "@material-ui/core/CssBaseline";

// The CODE!
const Root = () => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <div className="contenedor">

                <Router />
            </div>
        </div>
    )
}



render(<Root />, document.querySelector('#root'));

serviceWorker.register();

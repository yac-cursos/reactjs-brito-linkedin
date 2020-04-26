import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// Estilos
import './Liga.css';

// Componentes
import Equipo from './../equipo/Equipo';
import Jugador from './../jugador/Jugador';

// Imagenes
import LogoFelinos from './../../assets/logos/felinos.png';
import LogoPiratas from './../../assets/logos/piratas.png';
import LogoTiburones from './../../assets/logos/tiburones.png';
import FotoSergio from './../../assets/fotos/sergio.png';
import FotoManuel from './../../assets/fotos/manuel.png';
import FotoJose from './../../assets/fotos/jose.png';
import FotoPaco from './../../assets/fotos/paco.png';


class Liga extends Component {

    render() {
        return (
            <div className="contenedor">
                <Grid container className="root" spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>

                            <Grid key="1" item>
                                <Paper className="equipo">
                                    <Equipo nombre="Felinos" logo={LogoFelinos}/>
                                </Paper>
                            </Grid>
                            <Grid key="2" item>
                                <Paper className="equipo">
                                    <Equipo nombre="Piratas" logo={LogoPiratas}/>
                                </Paper>
                            </Grid>
                            <Grid key="3" item>
                                <Paper className="equipo">
                                    <Equipo nombre="Tiburones" logo={LogoTiburones}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className="root" spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Grid key="1" item>
                                <Paper className="jugador">
                                    <Jugador nombre="Sergio" foto={FotoSergio}/>
                                </Paper>
                            </Grid>
                            <Grid key="2" item>
                                <Paper className="jugador">
                                    <Jugador nombre="Manuel" foto={FotoManuel}/>
                                </Paper>
                            </Grid>
                            <Grid key="3" item>
                                <Paper className="jugador">
                                    <Jugador nombre="Jose" foto={FotoJose}/>
                                </Paper>
                            </Grid>
                            <Grid key="4" item>
                                <Paper className="jugador">
                                    <Jugador nombre="Paco" foto={FotoPaco}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Liga;

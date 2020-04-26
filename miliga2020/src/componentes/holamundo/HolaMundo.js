import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Equipo from "../equipo/Equipo";
import LogoFelinos from "../../assets/logos/felinos.png";
import LogoPiratas from "../../assets/logos/piratas.png";
import LogoTiburones from "../../assets/logos/tiburones.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    const [spacing] = React.useState(2);
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>

                    <Grid key="1" item>
                        <Paper>
                            <Equipo nombre="Felinos" logo={LogoFelinos}/>
                        </Paper>
                    </Grid>
                    <Grid key="2" item>
                        <Paper>
                            <Equipo nombre="Piratas" logo={LogoPiratas}/>
                        </Paper>
                    </Grid>
                    <Grid key="3" item>
                        <Paper>
                            <Equipo nombre="Tiburones" logo={LogoTiburones}/>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

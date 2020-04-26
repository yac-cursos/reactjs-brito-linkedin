import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="app-bar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="logo"></div>
                        <Typography variant="h6" color="inherit" className="flex">
                            Mi liga 2020
                        </Typography>
                        <Button color="inherit">Equipos</Button>
                        <Button color="inherit">Calendarios</Button>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;

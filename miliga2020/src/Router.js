import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Liga from './componentes/liga/Liga';
import Calendario from './componentes/calendario/Calendario';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Liga} />
            <Route path='/liga' component={Liga} />
            <Route path='/calendario' component={Calendario} />
        </Switch>
    </BrowserRouter>
)

export default Router;
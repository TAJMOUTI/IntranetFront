import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../Components/Homepage/Homepage';
import Supportpage from '../Components/Support/Supportpage/Supportpage';

const RoutingComponent = () => (
    <BrowserRouter>
        {/*Redirection vers les bons composants selon les liens (selon la) */}
        <Switch> 
            <Route exact path="/" component={Homepage} />
            <Route exact path="/support" component={Supportpage} />
        </Switch>
    </BrowserRouter>
);

export default RoutingComponent;
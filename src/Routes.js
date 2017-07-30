import React from 'react';
import HomePage from './components/home/HomePage';
import Login from './components/login/Login';
import {Switch, Route} from 'react-router-dom'

const Routes = props => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login}/>
    </Switch>
);

export default Routes;
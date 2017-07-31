import React from 'react';
import HomePage from './components/home/HomePage';
import Login from './components/login/Login';
import Perfil from './components/login/Perfil';
import {Switch, Route} from 'react-router-dom'


const Routes = props => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login}/>
        <Route path="/perfil" component={Perfil}/>

    </Switch>
);

export default Routes;
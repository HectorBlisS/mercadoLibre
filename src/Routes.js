import React from 'react';
import HomePage from './components/home/HomePage';
import Login from './components/login/Login';
import Perfil from './components/login/Perfil';
import NewProductPage from './components/products/NewProductPage';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import {Switch, Route} from 'react-router-dom';
import AdList from './components/catalog/AdsList';


const Routes = props => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login}/>
        <Route path="/perfil" component={Perfil}/>
        <Route path="/nuevo" component={NewProductPage}/>
        <Route path="/anuncio/:productId" component={ProductDetail}/>
        <Route path="/anuncios/:estado" component={ProductList}/>
        <Route path='/anuncios' component={AdList}/>

    </Switch>
);

export default Routes;

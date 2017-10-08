import React from 'react';
import HomePage from './components/home/HomePage';
import Login from './components/login/theLogin';
import Perfil from './components/login/Perfil';
import {ChoiceNewAd} from './components/products/ChoiceNewAd';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import {Switch, Route} from 'react-router-dom';
import AdList from './components/catalog/AdsList';
import Checkout from './components/checkout/Checkout';


const Routes = props => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login}/>
        <Route path="/perfil" component={Perfil}/>
        <Route path="/nuevo" component={ChoiceNewAd}/>
        <Route path="/anuncio/:productId" component={ProductDetail}/>
        <Route path="/anuncios/:estado" component={ProductList}/>
        <Route path='/anuncios' component={AdList}/>
        <Route path='/checkout/:id' component={Checkout}/>

    </Switch>
);

export default Routes;

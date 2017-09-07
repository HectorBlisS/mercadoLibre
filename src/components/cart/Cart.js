import React from 'react';
import './Cart.css';
import firebase from '../../api/firebase';
import {Icon, Col, Row, Button} from 'antd';
import CartService from './cartService';

class Cart extends React.Component{

    constructor(){
        super();
        this.CartService = new CartService;
    }

    state = {
        items:[],
        active:true
    }

    componetWillMount(){
        firebase.database().ref()
    }



    render(){
        return(

            <div className={'carrito '+ ( this.state.active ? "activated":"")} id="cd-cart">
                <div className="overlay"></div>
                <div className={"cartin "+ ( this.state.active ? "activated":"")} id="cartin">
                    <div className="carrito-container">
                        <div className="titleitem">
                            <a href="" id="close-cart" className="close"><Icon type="close-circle" /></a>
                            <h2>Tu carrito</h2>
                            <hr/>
                        </div>
                        {/*<div className="items">

                            <div className="empty" ng-show="$ctrl.cartService.count === 0">
                                Aún no tienes nada en tu carrito
                            </div>
                            <div className="empty" ng-show="!$ctrl.auth.user">
                                Debes iniciar sesión para comprar
                            </div>

                            <div className="row" ng-show="$ctrl.cartService.count !== 0" ng-repeat="item in $ctrl.cartService.details">
                                <div className="divitem">

                                    <div className="col-md-2 col-sm-6 col-xs-6 listitem"><a href="" class="trash" ng-click="$ctrl.cartService.deleteProduct(item.item.id)"><i class="fa fa-trash" aria-hidden="true"></i></a></div>
                                    <div className="col-md-3 col-sm-6 col-xs-6 listitem">
                                        <img ng-show="item.item.image" className="img-responsive itemimg" ng-src="{{$ctrl.mainService.reqImageHTTPS(item.item.image)}}" ng-alt="{{::item.item.name}}">

                                            <img ng-hide="item.item.image" class="img-responsive itemimg" src="/images/no_disponible.png" alt="imagen no disponible">
                                    </div>
                                    <div className="col-md-5 col-sm-12 col-xs-12 listitem">{{::item.item.name}}</div>
                                    <div className="col-md-2 col-sm-12 col-xs-12 listitem">{{::item.item.price | currency}}</div>

                                </div>

                            </div>

                        </div>*/}

                        <div className="items">
                            <Row className="divitem">
                                <Col className="listitem">

                                </Col>
                                <Col className="listitem">

                                </Col>
                                <Col className="listitem">

                                </Col>
                            </Row>
                        </div>

                        <div className="checkout">
                            <div className="total">
                                <strong>Total:</strong>
                                <span>${this.CartService.total}</span>
                            </div>
                            <a  id="btn-checkout">
                                <Button className="btn btn-success btn-block">Pagar</Button>
                            </a>
                            <Button className="clean" onClick={this.CartService.clearStorage}>Limpiar carrito</Button>
                        </div>
                    </div>
                </div>

            </div>

        );
    }

}

export default Cart;
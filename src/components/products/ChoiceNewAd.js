/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {VehiculoForm} from '../common/forms/VehiculoForm';

export class ChoiceNewAd extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1>BlisS</h1>
                <Link to="/nuevo/vehiculo">
                    <Button bsStyle="success">
                        Automovil, moto o camioneta
                    </Button>
                </Link>

                <Route exact path="/nuevo/vehiculo" component={VehiculoForm}/>
                <Route path="/nuevo/vehiculo/:adId" component={VehiculoForm}/>
            </div>
        );
    }
}



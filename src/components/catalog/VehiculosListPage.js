import React, {Component} from 'react';
import {Portada} from '../common/Portada';
import {VehiculosList} from "./VehiculosList";
import VehiculosFilter from "./VehiculosFilter";

import './catalogo.css';

class VehiculosListPage extends Component{
    render(){
        return(
            <div style={styles.container} >
               <Portada
                titulo="Tu nuevo auto está aquí"
                tipo="vehiculo"
               />
                <div style={{display:'flex'}}>
                    <VehiculosFilter/>
                    <VehiculosList/>
                </div>

            </div>
        );
    }
}

const styles = {
   container:{
       backgroundColor:"#f5f5f5"
   }
};


export default VehiculosListPage;
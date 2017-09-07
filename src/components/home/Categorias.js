import React, {Component} from 'react';
import './Categorias.css';
import FontAwesome from 'react-fontawesome';

class Categorias extends Component{
    render(){
        return(
            <div className='categori'>
                <h2>Categorías</h2>
                <div className="box_categori">
                    <div className="uno">
                        <div className="uno_cuadrado">
                            <div className="mascara">
                                <span>Telefonía</span>
                             </div>
                        </div>
                        <div className="uno_rect">
                            <div className="rect_uno">
                                <div className="mascara">
                                    <span>Telefonía</span>
                                </div>
                            </div>
                            <div className="rect_uno">
                                <div className="mascara">
                                    <span>Telefonía</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dos">
                        <div className="uno_rect">
                            <div className="dos_uno">
                                <div className="dos_cuadrado">
                                    <div className="mascara">
                                        <span>Telefonía</span>
                                    </div>
                                </div>
                                <div className="dos_cuadra">
                                    <div className="mascara">
                                        <span>Telefonía</span>
                                    </div>
                                </div>
                                <div className="dos_cuadrado">
                                    <div className="mascara">
                                        <span>Telefonía</span>
                                    </div>
                                </div>

                            </div>

                            <div className="dos_uno">
                                <div className="tres_cuadrado">
                                    <div className="mascara">
                                        <span>Telefonía</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Categorias;

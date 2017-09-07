import React, {Component} from 'react';
import './Card.css';
import FontAwesome from 'react-fontawesome';

class Card extends Component{
    render(){
        return(
            <div className='cards'>
                <div className="photo">
                    <div className="mask">
                      <span><FontAwesome className='red' name='camera'/></span>
                        <span>$5,000.00</span>
                    </div>
                </div>
                <div className="text">
                    <h3> Telefono 6s</h3>
                    <p>Telefonía</p>
                    <p>CDMX</p>
                    <p>Fecha de publicacion</p>
                </div>
            </div>
        );
    }
}


export default Card;
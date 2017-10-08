import React, {Component} from 'react';
import Card from '../card/Card';
//import FontAwesome from 'react-fontawesome';

class Recientes extends Component{
    render(){
        return(
       	<div className='recientes'>
            <h2>Anuncios Recientes</h2>
       		<div className="section_recientes">
                <Card />
                <Card/>
                <Card />
                <Card/>

       		</div>

       	</div>
        );
    }
}


export default Recientes;
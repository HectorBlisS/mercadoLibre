import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class Buscador extends Component{
    render(){
        return(
       	<div className='footer'>
       		<div className='flex'>
       			<p>Mercado Fácil</p>
       			<div className='inp'>
                    <input type="text" name="nombre" className='formcontrol' placeholder="Nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                    <p className="help-block text-danger"></p>
       			</div>
       			<div className='select'>
                    <select >
					  <option value="volvo">Volvo</option>
					  <option value="saab">Saab</option>
					  <option value="mercedes">Mercedes</option>
					  <option value="audi">Audi</option>
					</select>
					<p className="help-block text-danger"></p>
       			</div>
       			<div className='select'>
                    <select >
					  <option value="volvo">Volvo</option>
					  <option value="saab">Saab</option>
					  <option value="mercedes">Mercedes</option>
					  <option value="audi">Audi</option>
					</select>
					<p className="help-block text-danger"></p>
       			</div>
       			<div>
       				<button></button>
       			</div>

       		</div>

       	</div>
        );
    }
}


export default Buscador;
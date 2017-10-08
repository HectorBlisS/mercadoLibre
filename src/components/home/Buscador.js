import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class Buscador extends Component{
    render(){
        return(
       	<div className='footer'>
       		<div className='dis_flex'>
       			<div className='box_img'>
              <img alt="logose" src='https://www.segundamano.mx/static/img/smmx-logo.png'/>
       			</div>
            <div className='box_search'>
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
         			<div className='search'>
         				<button><FontAwesome className='red' name='search'/></button>
         			</div>
              </div>
       		</div>
          <div className='catg'>
            <div className='sect'>
              <FontAwesome className='icon_cat' name='home' size='4x'/>
            </div>
            <div className='sect'>
              <FontAwesome className='icon_cat' name='car' size='4x'/>
            </div>
            <div className='sect'>
              <FontAwesome className='icon_cat' name='mobile' size='4x'/>
            </div>
            <div className='sect'>
              <FontAwesome className='icon_cat' name='bath' size='4x'/>
            </div>
            <div className='sect'>
              <FontAwesome className='icon_cat' name='graduation-cap' size='4x'/>
            </div>
             <div className='sect'>
              <FontAwesome className='icon_cat' name='bicycle' size='4x'/>
            </div>
             <div className='sect'>
              <FontAwesome className='icon_cat' name='briefcase' size='4x'/>
            </div>

          </div>

       	</div>
        );
    }
}


export default Buscador;
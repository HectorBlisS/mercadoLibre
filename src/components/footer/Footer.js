import React, {Component} from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';

class Footer extends Component{
    render(){
        return(
       	<div className='footer'>
       		<div className='flexi'>
	       		<div className='box acerca'>
	       			<h3>Acerca de</h3>
	       			<p>Tu mercadito</p>
	       			<p>Mapa de sitio</p>
	       			<p>Contáctanos</p>
	       		</div>
	       		<div className='box redes'>
	       			<h3>Ayuda</h3>
	       			<p>Comprar</p>
	       			<p>Vender</p>
	       			<p>Soporte</p>	
	       		</div>
	       		<div className='box ingresa'>
	       			<h3>Redes sociales</h3>
	       			<p><FontAwesome className='red' name='facebook-square'/>Facebook</p>
	       			<p><FontAwesome className='red' name='twitter-square'/>Twitter</p>
	       			<p><FontAwesome className='red' name='youtube-square'/>YouTube</p>	
	       		</div>
	       		<div className='box ingresa'>
	       			<h3>Mi cuenta</h3>
	       			<p>Ingresar</p>
	       			<p></p>
	       				
	       		</div>
       		</div>
       		<hr className='raya' />
       		<div className='fl'>
       			<div>
       				<p>Copyright © 2017 DeRemate.com de México S. de R.L. de C.V.</p>	
	       			<span className='borde'>Trabaja con nosotros</span>
	       			<span>Términos y condiciones</span>
       			</div>
       			<div >

       				<p className='accion'>Prueba nuestra app</p>
       			</div>
       		</div>
       	</div>
        );
    }
}


export default Footer;
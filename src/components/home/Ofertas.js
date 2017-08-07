import React, {Component} from 'react';
import {Icon} from 'antd';


import FontAwesome from 'react-fontawesome';
import './Ofertas.css';

class Ofertas extends Component{
    render(){
        return(
       	<div className='promo'>
       		<h2>Ofertas de la semana</h2>
       		<div className='flex'>
       			<div className='cardcita'>
       				<img src='http://fravega.vteximg.com.br/arquivos/ids/290493-1000-1000/CELULAR-LIBRE-SAMSUNG-GALAXY-J7-4G-BLACK.jpg'/>
       				<p>$10,000.00</p>
       			</div>
       			<div className='cardcita'>
       				<img src='http://fravega.vteximg.com.br/arquivos/ids/290493-1000-1000/CELULAR-LIBRE-SAMSUNG-GALAXY-J7-4G-BLACK.jpg'/>
       				<p>$10,000.00</p>
       			</div>
       			<div className='cardcita'>
       				<img src='http://fravega.vteximg.com.br/arquivos/ids/290493-1000-1000/CELULAR-LIBRE-SAMSUNG-GALAXY-J7-4G-BLACK.jpg'/>
       				<p>$10,000.00</p>
       			</div>
       			<div className='cardcita'>
       				<img src='http://fravega.vteximg.com.br/arquivos/ids/290493-1000-1000/CELULAR-LIBRE-SAMSUNG-GALAXY-J7-4G-BLACK.jpg'/>
       				<p>$10,000.00</p>
       			</div>
       		</div>
       		<div>
       			<h2>Encuentra lo que buscas</h2>
       			<div>
       				<span><Icon type="android" />Autos</span>
       			</div>
       		</div>
       	</div>
        );
    }
}


export default Ofertas;

import React, {Component} from 'react';import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
//import logo from '../../logo.svg';

import './home.css';



const { Header } = Layout;
const logo = "https://vendelofacil.com.mx/static/media/log_50.png"




class NavBar extends Component{
    
    state = {
        user:null
    }
    
    render(){
        const {user} = this.state;
        return(
<header className="nav-container">
   <div className="nav-group">
      <span className="nav-logo">
          <img src={logo} alt="logo"/>
      </span>
      <span className="nav-title">
          Véndelo Fácil
      </span>
      <div className="nav-right">
          {user && <span className="nav-item">
               Mi cuenta
           </span>}
          {!user && 
             
               <Link 
               style={{color:'white'}}
               className="nav-item" to="/login">
               Inicia Sesión
                  </Link>
             

          }
           <span className="nav-item-red">
               ¡Publica Gratis!
           </span>
      </div>

   </div>
    
</header>
        );
    }
};

const styles = {
    logo:{
        paddingTop:'20px',
        height:'30px',
        paddingBottom:0
    }
}

export default NavBar;
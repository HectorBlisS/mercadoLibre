import React, {Component} from 'react';import { Avatar } from 'antd';
import {Link} from 'react-router-dom';
//import logo from '../../logo.svg';
import { Menu, Dropdown, Icon } from 'antd';
import firebase from '../../api/firebase';



import './home.css';



class NavBar extends Component{

    state = {
        user:null
    };

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            this.setState({user});
        }
        firebase.auth().onAuthStateChanged(user=>{
           if(user){
               this.setState({user});
           }
        });
    }

 cerrarSesion = () => {
    firebase.auth().signOut();
    localStorage.removeItem("user");
    this.setState({user:null});
//    this.props.history.push('/');
};

    render(){
        const menu = (
  <Menu>
    <Menu.Item>
        <Link to="/perfil">Mi cuenta</Link>
    </Menu.Item>
    <Menu.Item>
      <a onClick={this.cerrarSesion}>Cerrar sesión</a>
    </Menu.Item>

  </Menu>
);
        const {user} = this.state;
        return(
<header className="nav-container">
   <div className="nav-group">

      <span className="nav-title">
        <Link to="/"
          style={{color:'white', textDecoration:'none'}}
          className="nav-item">
              Vendelo Fácil
        </Link>
      </span>
      <div className="nav-right">

          {!user &&

               <Link
               style={{color:'white'}}
               className="nav-item" to="/login">
               Inicia Sesión
                  </Link>


          }

          <Link
              style={{color:'white'}}
              className="nav-item" to="/anuncios">
              Explorar Anuncios
          </Link>

             <Link to="/nuevo"
                style={{color:'white', textDecoration:'none'}}
                className="nav-item-red">

                   ¡Publica Gratis!

             </Link>

           {user &&
              <div
                 className="nav-item"
                  >
                       <Dropdown overlay={menu} placement="bottomLeft">
     <Avatar src={user.photoURL}/>
    </Dropdown>
              </div>

           }




      </div>

   </div>

</header>
        );
    }
}



export default NavBar;

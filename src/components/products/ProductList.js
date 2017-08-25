import React, {Component} from 'react';
import {Col, Row, Card} from 'antd';
import {Link} from 'react-router-dom';
import CardAnuncio from './CardAnuncio';
import firebase from '../../api/firebase';




class ProductList extends Component{
  constructor(){
    super()
    this.state={
        anuncios:[
          {
            id:1,
            imagen:'https://acs2.blob.core.windows.net/imgcatalogo/xl/P_982cac879b32434ebe0201ba0e4c4ce1.jpg',
            nombre:'chevy',
            precio:10000
          },
          {
            id:2,
            imagen:'https://www.tesla.com/tesla_theme/assets/img/modals/model-select-models.png?20160811',
            nombre:'tesla',
            precio:1000000
          },
          {
            id:3,
            imagen:'http://assets.bugatti.com/fileadmin/user_upload/Web/Pages/Models/Super_Sport/BUG_super_sport_02.jpg',
            nombre:'bugatti',
            precio:10000000
          }
        ]
    }
  }
  render(){
    return(
      <div style={{padding:'0 5%'}}>

        {this.state.anuncios.map(anuncio=>{
          return(

              <CardAnuncio anuncio={anuncio}/>

          )
        })}


      </div>
    );
  }
}
export default ProductList;

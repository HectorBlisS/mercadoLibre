import React, {Component} from 'react';
import CardAnuncio from './CardAnuncio';
import firebase from '../../api/firebase';




class ProductList extends Component{
  constructor(){
    super()
    this.state={
        anuncios:[
          // {
          //   id:1,
          //   imagen:'https://acs2.blob.core.windows.net/imgcatalogo/xl/P_982cac879b32434ebe0201ba0e4c4ce1.jpg',
          //   nombre:'chevy',
          //   precio:10000
          // },
          // {
          //   id:2,
          //   imagen:'https://www.tesla.com/tesla_theme/assets/img/modals/model-select-models.png?20160811',
          //   nombre:'tesla',
          //   precio:1000000
          // },
          // {
          //   id:3,
          //   imagen:'http://assets.bugatti.com/fileadmin/user_upload/Web/Pages/Models/Super_Sport/BUG_super_sport_02.jpg',
          //   nombre:'bugatti',
          //   precio:10000000
          // }
        ]
    }
  }

  componentWillMount(){
    firebase.database().ref('productos').on('child_added', r=>{
      let anuncios=this.state.anuncios
      let nuevo = r.val()
      nuevo['key']=r.key
      anuncios.push(nuevo)
      this.setState({anuncios})
      //firebase.storage().ref().child('product_images/'+r.key).getDownloadURL()
    })
    console.log(this.state.anuncios)
  }
  render(){

    return(
      <div style={{padding:'0 5%'}}>

        {this.state.anuncios.map(anuncio=>{
          return(

              <CardAnuncio anuncio={anuncio} match={this.props.match}/>

          )
        })}


      </div>
    );
  }
}
export default ProductList;

import React, {Component} from 'react';
import { Row, Col, Carousel, Card, Avatar, Input, message, Button} from 'antd';
import firebase from '../../api/firebase';

const { TextArea } = Input;
class ProductDetail extends Component{

  constructor(){
    super()
    this.state={

      anuncio:{
        // titulo:'Mi cochezaso',
        // descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fotos:[],
        categorias:[],
        estado:[]
      },
      laFoto:''
    }
  }


  componentWillMount(){
    firebase.database().ref('productos/' + this.props.match.params.productId)
    .on('value', (snap)=>{
      this.setState({anuncio:snap.val(), laFoto:snap.val().fotos[0]})
      console.log(this.state)
    })
  }

  sendMessage=()=>{
    message.success('Se ha enviado tu mensaje a Oswaldinho')
  }

  changeFoto=(foto)=>{
    this.setState({laFoto:foto})
  }
  render(){
    return(
      <div style={{padding:'2%'}}>
        <Row gutter={16} style={{width:'100%'}}>

          <Col span={16}>
            <h1>{this.state.anuncio.titulo} </h1>
              <p>{this.state.anuncio.categorias.map(cat=>{
                  return(
                    <span>{cat} / </span>
                  )
                })}</p>
              <div style={{width:'90%'}}>
                <img style={{width:'90%'}} src={this.state.laFoto}/>
              </div>
              <div style={{width:'100px', display:'flex'}}>
                {this.state.anuncio.fotos.map(f=>{
                  return(
                    <img
                      src={f}
                      style={{width:'100%', height:'100%', padding:'1%'}}
                      onClick={()=>this.changeFoto(f)}/>
                  )
                })}
              </div>

          </Col>
          <Col span={8}>
            <Card title="Oswaldinho" extra={<Avatar style={{marginTop:'-8px'}}src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} style={{ width: 300 }}>
              <p>{this.state.anuncio.estado.map(es=>{
                  return(
                    <span>{es} / </span>
                  )
                })}</p>
              <h3>Contacta a Oswaldinho</h3>
              <TextArea rows={4} placeholder="Tu mensaje"/>
              <br/><br/>
              <Button
                size="large"
                type="primary"
                onClick={this.sendMessage}>Primary</Button>
              <br/><br/><hr/><br/>
              <h3>Características:</h3>
              <p>{this.state.anuncio.descripcion}</p>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}
export default ProductDetail;

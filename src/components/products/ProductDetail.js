import React, {Component} from 'react';
import { Row, Col, Carousel, Card, Avatar, Input, message, Button} from 'antd';


const { TextArea } = Input;
class ProductDetail extends Component{

  constructor(){
    super()
    this.state={
      anuncio:{
        titulo:'Mi cochezaso',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fotos:['http://assets.bugatti.com/fileadmin/user_upload/Web/Pages/Models/Super_Sport/BUG_super_sport_02.jpg',]
      }
    }
  }
  sendMessage=()=>{
    message.success('Se ha enviado tu mensaje a Oswaldinho')
  }
  render(){
    return(
      <div style={{padding:'2%'}}>
      <Row gutter={16} style={{width:'100%'}}>

        <Col span={16}>
          <h1>{this.state.anuncio.titulo} </h1>
          <Carousel style={{width:'100%'}}>
          {this.state.anuncio.fotos.map(foto=>{
            return(
              <img src={foto} style={{width:'100%', height:400}}/>
            )
          })}

         </Carousel>
        </Col>
        <Col span={8}>
          <Card title="Oswaldinho" extra={<Avatar style={{marginTop:'-8px'}}src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} style={{ width: 300 }}>
            <p>Hidalgo, México</p>
            <h3>Contacta a Oswaldinho</h3>
            <TextArea rows={4} placeholder="Tu mensaje"/>
            <br/><br/>
            <Button
              size="large"
              type="primary"
              onClick={this.sendMessage}>Primary</Button>
            <br/><br/><hr/>
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

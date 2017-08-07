import React, {Component} from 'react';
import { Row, Col, Carousel, Card} from 'antd';

class ProductDetail extends Component{

  constructor(){
    super()
    this.state={
      anuncio:{
        titulo:'Mi chochezaso',
        fotos:['http://assets.bugatti.com/fileadmin/user_upload/Web/Pages/Models/Super_Sport/BUG_super_sport_02.jpg',]
      }
    }
  }
  render(){
    return(
      <div>
      <Row gutter={16} style={{width:'100%'}}>
        <h1>{this.state.anuncio.titulo} </h1>
        <Col span={16}>
          <Carousel style={{width:'100%'}}>
          {this.state.anuncio.fotos.map(foto=>{
            return(
              <img src={foto} style={{width:'100%', height:400}}/>
            )
          })}

         </Carousel>
        </Col>
        <Col span={8}>
          <Card title={this.state.anuncio.titulo}  style={{ width: 300 }}>

            </Card>
        </Col>

      </Row>

      </div>
    );
  }
}
export default ProductDetail;

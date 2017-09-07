import React from 'react';
import {Col, Row, Card, Button} from 'antd';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import moment from 'moment';
import NoFile from '../../assets/images/Sin_imagen.png';
import CartService from '../cart/cartService';

class CardAnuncio extends React.Component {

    constructor(){
        super();
        this.CartServicer = new CartService();
    }


    addToCart = ()=>{
        this.CartServicer.addProduct(this.props.anuncio)
    }

  render () {
    const anuncio = this.props.anuncio;
    return(
      <div style={{padding:'1% 3%'}}>
          <Card style={{height:'20vh', padding:'1%'}} bodyStyle={{ padding: 0 }}>
            <Row>
              <Col span={6}>
                <div style={{width:'100%', height:'100%'}}>
                  <img alt={anuncio.categorias} style={{width:'80%', height:'15vh'}} src={anuncio.fotos ? anuncio.fotos[0]: NoFile} />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <h2>{anuncio.titulo}</h2>
                  <h4>{anuncio.categorias.map((cat,index)=>{
                      return(
                        <span key={index}>{cat} / </span>
                      )
                    })}</h4>
                  <h5>{anuncio.estado.map((es,index)=>{
                        return(
                          <span key={index}>{es} / </span>
                        )
                      })}</h5>
                </div>
                <Link to={'/anuncio/'+anuncio.key}>
                  <Button style={{margin:'3% 0'}}>Ver detalles</Button>
                </Link>
              </Col>
              <Col span={6}>
                <div>
                  <h3>${anuncio.precio}</h3>
                  <p>{moment(anuncio.date).format('LL')}</p>
                </div>
                  <Link to={'/checkout/'+anuncio.key}>
                    <Button type="primary" onClick={this.addToCart} style={{margin:'3% 0'}}>Comprar</Button>
                  </Link>
              </Col>
            </Row>
          </Card>
      </div>
    )
  }
}

export default CardAnuncio;

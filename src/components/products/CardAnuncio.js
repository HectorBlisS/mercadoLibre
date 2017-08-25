import React from 'react';
import {Col, Row, Card} from 'antd';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import moment from 'moment';

class CardAnuncio extends React.Component {

  render () {
    const anuncio = this.props.anuncio
    return(
      <div style={{padding:'1% 3%'}}>
        <Link to={'/anuncio/'+anuncio.key}>
          <Card style={{height:'20vh', padding:'1%'}} bodyStyle={{ padding: 0 }}>
            <Row>
              <Col span={6}>
                <div style={{width:'100%', height:'100%'}}>
                  <img alt={anuncio.fotos.length} style={{width:'80%', height:'15vh'}} src={anuncio.fotos[0]} />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <h2>{anuncio.titulo}</h2>
                  <h4>{anuncio.categorias.map(cat=>{
                      return(
                        <span>{cat} / </span>
                      )
                    })}</h4>
                  <h5>{anuncio.estado.map(es=>{
                        return(
                          <span>{es} / </span>
                        )
                      })}</h5>
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <h3>${anuncio.precio}</h3>
                  <p>{moment(anuncio.date).format('LL')}</p>
                </div>
              </Col>
            </Row>
          </Card>
        </Link>
      </div>
    )
  }
}

export default CardAnuncio;

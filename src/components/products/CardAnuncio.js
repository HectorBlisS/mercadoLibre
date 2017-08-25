import React from 'react';
import {Col, Row, Card} from 'antd';
import {Link} from 'react-router-dom';

class CardAnuncio extends React.Component {

  render () {
    const anuncio = this.props.anuncio
    return(
      <div style={{padding:'1% 3%'}}>
        <Link to={'/anuncio/'+anuncio.id}>
          <Card key={anuncio.id} style={{height:'20vh', padding:'1%'}} bodyStyle={{ padding: 0 }}>
            <Row>
              <Col span={6}>
                <div style={{width:'100%', height:'100%'}}>
                  <img alt="example" style={{width:'80%', height:'15vh'}} src={anuncio.imagen} />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <h3>{anuncio.nombre}</h3>
                  <p>${anuncio.precio}</p>
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <h3>{anuncio.nombre}</h3>
                  <p>${anuncio.precio}</p>
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

import React, {Component} from 'react';
import {Col, Row, Card} from 'antd';
import {Link} from 'react-router-dom';

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
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">Filtro</div>
          </Col>
          <Col className="gutter-row" span={16}>
            <Row gutter={16}>
              {this.state.anuncios.map(anuncio=>{
                return(
                  <Col className="gutter-row" span={6}>
                    <Link to={'/anuncio/'+anuncio.id}>
                      <Card key={anuncio.id} style={{height:'30vh'}} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                          <img alt="example" style={{width:'100%', height:'20vh'}} src={anuncio.imagen} />
                        </div>
                        <div className="custom-card">
                          <h3>{anuncio.nombre}</h3>
                          <p>${anuncio.precio}</p>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                )
              })}

            </Row>
          </Col>

        </Row>
      </div>
    );
  }
}
export default ProductList;

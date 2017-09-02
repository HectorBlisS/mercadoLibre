import React, {Component} from 'react';
import { Row, Col, Carousel, Card} from 'antd';

import './newProduct.css';

class Resumen extends Component{
  constructor(){
    super();
    this.state={
      anuncio:{fotos:[]}
    }
  }
  componentWillMount(){
    console.log('resumen',this.props.anuncio)
      this.setState({anuncio:this.props.anuncio});
  }
  render(){

    return(
      <div style={this.props.style}>
        <h2>Revisa los datos de tu anuncio antes de publicar</h2>

          <Row gutter={16} style={{width:'100%'}}>
            <Col span={16}>
              <Carousel autoplay vertical style={{width:'100%'}}>
              {this.state.anuncio.fotos.map((foto, index)=>{
                return(
                  <div key={index}><img src={foto.thumbUrl} style={{width:'100%', height:400}} alt="fotos subidas"/></div>
                )
              })}

             </Carousel>
            </Col>
            <Col span={8}>
              <Card title={this.props.anuncio.titulo}  style={{ width: 300 }}>
                <h3>Precio: ${this.props.anuncio.precio}</h3>
                <p>Categoría: {this.props.anuncio.categorias[0]}
                  >{this.props.anuncio.categorias[1]}
                  {this.props.anuncio.categorias[2]?'>'+this.props.anuncio.categorias[2]:''}</p>
                <p>Origen: {this.props.anuncio.estado[1]}</p>

                <p>Descripción: {this.props.anuncio.descripcion}</p>
                {this.props.anuncio.categorias[1] === "Autos"?
                  <div>
                    <p>Marca: {this.props.anuncio.marca}</p>
                    <p>Modelo: {this.props.anuncio.modelo} {this.props.anuncio.año}</p>
                    <p>Kilometraje: {this.props.anuncio.kilometros}</p>
                    <p>Combustible: {this.props.anuncio.combustible}</p>
                    <p>Transmisión: {this.props.anuncio.transmision}</p>

                  </div>
                  :'pues no '}
                </Card>
            </Col>

          </Row>

      </div>
    );
  }
}
export default Resumen;

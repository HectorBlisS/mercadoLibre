import React, {Component} from 'react';
import { Cascader, Input, Select, Upload, Icon, Modal } from 'antd';
import firebase from '../../api/firebase';

const Option = Select.Option;


const estados = [{
  value:'México',
  label:'México',
  children:[
    {value:'Aguascalientes',
    label:'Aguascalientes',},
    {value:'Baja California',
    label:'Baja California',},
    {value:'Baja California Sur',
    label:'Baja California Sur',},
    {value:'Campeche',
    label:'Campeche',},
    {value:'Chiapas',
    label:'Chiapas',},
    {value:'Chihuahua',
    label:'Chihuahua',},
    {value:'Ciudad de México',
    label:'Ciudad de México',},
    {value:'Coahuila',
    label:'Coahuila',},
    {value:'Colima',
    label:'Colima',},
    {value:'Durango',
    label:'Durango',},
    {value:'Estado de México',
    label:'Estado de México',},
    {value:'Guanajuato',
    label:'Guanajuato',},
    {value:'Guerrero',
    label:'Guerrero',},
    {value:'Hidalgo',
    label:'Hidalgo',},
    {value:'Jalisco',
    label:'Jalisco',},
    {value:'Michoacán',
    label:'Michoacán',},
    {value:'Morelos',
    label:'Morelos',},
    {value:'Nayarit',
    label:'Nayarit',},
    {value:'Nuevo León',
    label:'Nuevo León',},
    {value:'Oaxaca',
    label:'Oaxaca',},
    {value:'Puebla',
    label:'Puebla',},
    {value:'Querétaro',
    label:'Querétaro',},
    {value:'Quintana Roo',
    label:'Quintana Roo',},
    {value:'San Luis Potosí',
    label:'San Luis Potosí',},
    {value:'Sinaloa',
    label:'Sinaloa',},
    {value:'Sonora',
    label:'Sonora',},
    {value:'Tabasco',
    label:'Tabasco',},
    {value:'Tamaulipas',
    label:'Tamaulipas',},
    {value:'Tlaxcala',
    label:'Tlaxcala',},
    {value:'Veracruz',
    label:'Veracruz',},
    {value:'Yucatán',
    label:'Yucatán',},
    {value:'Zacatecas',
    label:'Zacatecas',}
  ]
}]

const categorias = [{
  //1st category
  value: 'Vehículos',
  label: 'Vehículos',
  children: [{
    value: 'Moto',
    label: 'Moto',

    },{
    value: 'Autos',
    label: 'Autos',

    },{
    value: 'Camionetas',
    label: 'Camionetas',
    children: [{
      value: 'Suv',
      label: 'Suv,Jeep,Van',
      },{
      value: 'Pickip',
      label: 'Pickup',
      }],
      },{
      value: 'Camiones',
      label: 'Camiones',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    },{
    value: 'Partes y Accesorios',
    label: 'Partes y Accesorios',
    children: [{
      value: 'Refacciones',
      label: 'Refacciones',
      },{
      value: 'Rines y Llantas',
      label: 'Rines y Llantas',
      },{
      value: 'Remolques y Cajas',
      label: 'Remolques y Cajas',
    }],
    },{
    value: 'Náutica y Aereos',
    label: 'Náutica y Aereos',

  }],
  }, //2ndcatetory
  {
  value: 'Electrónica',
  label: 'Electrónica',
  children: [{
    value: 'Celulares',
    label: 'Celulares',
    children: [{
      value: 'Celulares',
      label: 'Celulares',
      },{
      value: 'Accesorios',
      label: 'Accesorios',
    }],
  },],
}];


class Basicos extends Component{

  constructor(){
    super()
    this.state={
      anuncio:{
        categorias:'',
        estado:'',
        titulo:'',
        precio:'',
        fotos:[],
      },
      previewVisible: false,
      previewImage: '',
      fileList: [],
    }
  }
  componentWillMount(){
    this.setState({anuncio:this.props.anuncio})
    this.props.anuncio.fotos&&this.props.anuncio.fotos.length>=1?this.setState({fileList:this.props.anuncio.fotos}):console.log('aun no hay fotos')
  }



  onChangeSelects=(value) =>{
    let field = this.state.selectname
    let anuncio = this.state.anuncio;
    anuncio[field] = value
    this.setState({anuncio});
    console.log(this.state.anuncio)
    //put in the last input
    this.props.pasala(this.state.anuncio)
  }
  selectName=(e)=>{
    this.setState({selectname:e.target.name})
    console.log(e.target.name)
  }
  handleText = (event) => {
      let field = event.target.name
      let anuncio = this.state.anuncio;
      anuncio[field] = event.target.value
      this.setState({anuncio});
      console.log(this.state.anuncio)
      this.props.pasala(this.state.anuncio)
    }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    let anuncio = this.state.anuncio
    anuncio['fotos'] = this.state.fileList
    this.setState({ fileList,anuncio })
    console.log("handleChange", fileList)
    this.props.pasala(this.state.anuncio)
  }
  render(){
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return(
      <div style={this.props.style}>
        <h2>Título de tu publicación</h2>
        <Input
          value={this.state.anuncio.titulo}
          name='titulo'
          style={{width:'50%'}}
          size='large'
          onChange={this.handleText}
          placeholder="Mi súper producto"/>

        <h2>Elige la Categoría</h2>
        <Cascader
          value={this.state.anuncio.categorias}
          onClick={this.selectName}
          name='categorias'
          style={{width:'50%'}}
          options={categorias}
          size='large'
          onChange={this.onChangeSelects}
          placeholder="Please select" />
          <h2>Precio </h2>
          <Input
            value={this.state.anuncio.precio}
            name='precio'
            style={{width:'50%'}}
            size='large'
            onChange={this.handleText}
            placeholder="$10000 MXN"/>

        <h2>Elige tu Ubicación</h2>
        <Cascader
          value={this.state.anuncio.estado}
          onClick={this.selectName}
          name='estado'
          options={estados}
          size='large'
          style={{ width: '50%' }}
          placeholder="Hidalgo"
          onChange={this.onChangeSelects}/>

        <h2>Fotos del Anuncio ({this.state.fileList.length+' de 5'})</h2>
        <Upload
          listType="picture-card"
          fileList={this.state.fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          multiple={true}
          //customRequest={ this.props.handleImageUpload }
          customRequest={ this.handleImageUpload }
        >
          {this.state.fileList.length >= 10 ? null : uploadButton}
        </Upload>

        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>


      </div>
    );
  }
}

export default Basicos;

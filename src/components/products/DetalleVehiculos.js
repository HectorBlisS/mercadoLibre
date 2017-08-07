import React, {Component} from 'react';
import { Select, Input} from 'antd';


const { TextArea } = Input;


const Option = Select.Option;
const marcas=[
  {nombre:'Alfa Romeo'},
  {nombre:'Aston Martin'},
  {nombre:'Audi'},
  {nombre:'Bentley'},
  {nombre:'Benz'},
  {nombre:'BMW'},
  {nombre:'Bugatti'},
  {nombre:'Cadillac'},
  {nombre:'Chevrolet'},
  {nombre:'Chrysler'},
  {nombre:'Citroen'},
  {nombre:'Corvette'},
  {nombre:'DAF'},
  {nombre:'Dacia'},
  {nombre:'Daewoo'},
  {nombre:'Daihatsu'},
  {nombre:'Datsun'},
  {nombre:'De Lorean'},
  {nombre:'Dino'},
  {nombre:'Dodge'},
  {nombre:'Farboud'},
  {nombre:'Ferrari'},
  {nombre:'Fiat'},
  {nombre:'Ford'},
  {nombre:'Honda'},
  {nombre:'Hummer'},
  {nombre:'Hyundai'},
  {nombre:'Jaguar'},
  {nombre:'Jeep'},
  {nombre:'KIA'},
  {nombre:'Koenigsegg'},
  {nombre:'Lada'},
  {nombre:'Lamborghini'},
  {nombre:'Lancia'},
  {nombre:'Land Rover'},
  {nombre:'Lexus'},
  {nombre:'Ligier'},
  {nombre:'Lincoln'},
  {nombre:'Lotus'},
  {nombre:'Martini'},
  {nombre:'Maserati'},
  {nombre:'Maybach'},
  {nombre:'Mazda'},
  {nombre:'McLaren'},
  {nombre:'Mercedes'},
  {nombre:'Mercedes-Benz'},
  {nombre:'Mini'},
  {nombre:'Mitsubishi'},
  {nombre:'Nissan'},
  {nombre:'Noble'},
  {nombre:'Opel'},
  {nombre:'Peugeot'},
  {nombre:'Pontiac'},
  {nombre:'Porsche'},
  {nombre:'Renault'},
  {nombre:'Rolls-Royce'},
  {nombre:'Rover'},
  {nombre:'Saab'},
  {nombre:'Seat'},
  {nombre:'Skoda'},
  {nombre:'Smart'},
  {nombre:'Spyker'},
  {nombre:'Subaru'},
  {nombre:'Suzuki'},
  {nombre:'Toyota'},
  {nombre:'Vauxhall'},
  {nombre:'Volkswagen'},
  {nombre:'Volvo'},
]

class DetalleVehiculos extends Component{
  constructor(){
    super()
    this.state={
      search:'',
      anuncio:{
        titulo:'',
        precio:'',
        fotos:[],
        categorias:'',
        estado:'',
      },
      marcas:[
        {nombre:'Alfa Romeo'},
        {nombre:'Aston Martin'},
        {nombre:'Audi'},
        {nombre:'Bentley'},
        {nombre:'Benz'},
        {nombre:'BMW'},
        {nombre:'Bugatti'},
        {nombre:'Cadillac'},
        {nombre:'Chevrolet'},
        {nombre:'Chrysler'},
        {nombre:'Citroen'},
        {nombre:'Corvette'},
        {nombre:'DAF'},
        {nombre:'Dacia'},
        {nombre:'Daewoo'},
        {nombre:'Daihatsu'},
        {nombre:'Datsun'},
        {nombre:'De Lorean'},
        {nombre:'Dino'},
        {nombre:'Dodge'},
        {nombre:'Farboud'},
        {nombre:'Ferrari'},
        {nombre:'Fiat'},
        {nombre:'Ford'},
        {nombre:'Honda'},
        {nombre:'Hummer'},
        {nombre:'Hyundai'},
        {nombre:'Jaguar'},
        {nombre:'Jeep'},
        {nombre:'KIA'},
        {nombre:'Koenigsegg'},
        {nombre:'Lada'},
        {nombre:'Lamborghini'},
        {nombre:'Lancia'},
        {nombre:'Land Rover'},
        {nombre:'Lexus'},
        {nombre:'Ligier'},
        {nombre:'Lincoln'},
        {nombre:'Lotus'},
        {nombre:'Martini'},
        {nombre:'Maserati'},
        {nombre:'Maybach'},
        {nombre:'Mazda'},
        {nombre:'McLaren'},
        {nombre:'Mercedes'},
        {nombre:'Mercedes-Benz'},
        {nombre:'Mini'},
        {nombre:'Mitsubishi'},
        {nombre:'Nissan'},
        {nombre:'Noble'},
        {nombre:'Opel'},
        {nombre:'Peugeot'},
        {nombre:'Pontiac'},
        {nombre:'Porsche'},
        {nombre:'Renault'},
        {nombre:'Rolls-Royce'},
        {nombre:'Rover'},
        {nombre:'Saab'},
        {nombre:'Seat'},
        {nombre:'Skoda'},
        {nombre:'Smart'},
        {nombre:'Spyker'},
        {nombre:'Subaru'},
        {nombre:'Suzuki'},
        {nombre:'Toyota'},
        {nombre:'Vauxhall'},
        {nombre:'Volkswagen'},
        {nombre:'Volvo'},
      ]
    }
  }

  componentWillMount(){
    this.setState({anuncio:this.props.anuncio})
  }

  handleText = (event) => {
      let field = event.target.name
      let anuncio = this.state.anuncio;
      anuncio[field] = event.target.value
      this.setState({anuncio});
      console.log(this.state.anuncio)
      this.props.pasala(this.state.anuncio)
    }


  handleCombustible=(value) =>{
    let field = 'combustible'
    let anuncio = this.state.anuncio;
    anuncio[field] = value
    this.setState({anuncio});
    console.log(this.state.anuncio)
  }
  handletrans=(value) =>{
    let field = 'transmision'
    let anuncio = this.state.anuncio;
    anuncio[field] = value
    this.setState({anuncio});
    console.log(this.state.anuncio)
  }
  handleMarca = (value,e) => {
    this.setState({search:value})
    console.log(this.state.search)
    let field = 'marca'
    let anuncio = this.state.anuncio;
    anuncio[field] = value
    this.setState({anuncio});
    console.log(this.state.anuncio)
  }
  handleModelo = (value,e) => {
    this.setState({search:value})
    console.log(this.state.search)
    let field = 'modelo'
    let anuncio = this.state.anuncio;
    anuncio[field] = value
    this.setState({anuncio});
    console.log(this.state.anuncio)
  }

  render(){
    let filtered = this.state.marcas.filter((marca)=>{

        return marca.nombre.toLowerCase().indexOf(
          this.state.search.toLowerCase())!== -1
      })
    return(
      <div style={this.props.style}>
        <h2>Describe tu anuncio</h2>

          <TextArea
            autosize
            name='descripcion'
            value={this.state.anuncio.descripcion}
            style={{width:'50%'}}
            size='large'
            onChange={this.handleText}
            placeholder="blablabla"/>
        <h2>Tipo de Combustible</h2>
        <Select
          value={this.state.anuncio.combustible}
          name="combustible"
          placeholder="Combustible"
          style={{width:'50%'}}
          size='large'
          onChange={this.handleCombustible}>
         <Option value="Gasolina">Gasolina</Option>
         <Option value="Diesel">Diesel</Option>
         <Option value="Híbrido">Híbrido</Option>
         <Option value="Gas">Gas</Option>
         <Option value="Eléctrico">Eléctrico</Option>
       </Select>
       <h2>Tipo de Transmisión</h2>
       <Select
         value={this.state.anuncio.transmision}
         name="transmisión"
         style={{width:'50%'}}
         placeholder="Transmisión"
        size='large'
         onChange={this.handletrans}>
          <Option value="Manual">Manual</Option>
          <Option value="Automática">Automática</Option>

      </Select>
      <h2>Marca</h2>
      <Select
      style={{width:'50%'}}
       mode="combobox"
       value={this.state.search?this.state.search:this.props.anuncio.marca}
       placeholder='Marca'
       notFoundContent=""
       defaultActiveFirstOption={false}
       showArrow={false}
       filterOption={false}
       onChange={this.handleMarca}
     >
        {filtered.map(marca=>{
          return(
            <Option value={marca.nombre}>{marca.nombre}</Option>
          )
        })}
     </Select>
     <h2>Modelo</h2>
     <Select
     style={{width:'50%'}}

      value={this.state.search?this.state.search:this.props.anuncio.marca}
      placeholder='Modelo'
      notFoundContent=""
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onChange={this.handleModelo}
    >
       {filtered.map(marca=>{
         return(
           <Option value={marca.nombre}>{marca.nombre}</Option>
         )
       })}
    </Select>
     <h2>Año</h2>
     <Input
       value={this.state.anuncio.año}
       name='año'
       style={{width:'50%'}}
       size='large'
       onChange={this.handleText}
       placeholder="Año del vehículo"/>
     <h2>Kilometraje</h2>
       <Input
         value={this.state.anuncio.kilometros}
         name='kilometros'
         style={{width:'50%'}}
         size='large'
         onChange={this.handleText}
         placeholder="4000km"/>
      </div>
    );
  }
}
export default DetalleVehiculos;

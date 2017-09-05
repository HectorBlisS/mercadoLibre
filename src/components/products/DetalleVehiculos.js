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
];

class DetalleVehiculos extends Component{
  constructor(){
    super();
    this.state={
      search:'',
      isCar: {
          descripcion:'',
          combustible:'',
          transmision:'',
          marca:'',
          modelo:'',
          ano:'',
          km:'',
          condicion:''
      },
      marcas:marcas,
        anuncio:null,
    }
  }

  componentWillMount(){
    this.setState({anuncio:this.props.anuncio});
    this.props.disable();
  }

  handleText = (event) => {
      let field = event.target.name;
      let isCar = this.state.isCar;
      isCar[field] = event.target.value;
      this.setState({isCar});
      this.validateEmpty();
    };


  handleCombustible=(value) =>{
    let field = 'combustible';
    let isCar = this.state.isCar;
    isCar[field] = value;
    this.setState({isCar});
    this.validateEmpty();
  };

  handletrans=(value) =>{
    let field = 'transmision';
    let isCar = this.state.isCar;
      isCar[field] = value;
    this.setState({isCar});
    this.validateEmpty();
  };

    handleCondition = (value) => {
        let field = 'condicion';
        let isCar = this.state.isCar;
        isCar[field] = value;
        this.setState({isCar});
        this.validateEmpty();
    };

  handleMarca = (value, e) => {
    this.setState({search:value});
    let field = 'marca';
    let isCar = this.state.isCar;
      isCar[field] = value;
    this.setState({isCar});
    this.validateEmpty();
  };

  handleModelo = (value, e) => {
    this.setState({search:value});
    let field = 'modelo';
    let isCar = this.state.isCar;
      isCar[field] = value;
    this.setState({isCar});
    this.validateEmpty();
  };

    validateEmpty = () => {
        const anuncio = this.state.anuncio;
        const isCar = this.state.isCar;

        for (let k in isCar){
            if(isCar[k] === ""){
                console.log(isCar);
                return false
            }
        }
        this.props.enable();
        console.log(anuncio);
        anuncio["isCar"] = isCar;
        this.setState({anuncio});
        this.props.updateAnuncio(anuncio);
    };


  render(){
    let filtered = this.state.marcas.filter((marca)=>{

        return marca.nombre.toLowerCase().indexOf(
          this.state.search.toLowerCase())!== -1
      });

    const {isCar} = this.state;

    return(
      <div style={this.props.style}>
        <h2>Describe tu anuncio</h2>

          <TextArea
            autosize
            name='descripcion'
            value={isCar.descripcion}
            style={{width:'50%'}}
            size='large'
            onChange={this.handleText}
            placeholder="blablabla"/>
        <h2>Tipo de Combustible</h2>
        <Select
          value={isCar.combustible}
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
         value={isCar.transmision}
         name="transmisión"
         style={{width:'50%'}}
         placeholder="Transmisión"
        size='large'
         onChange={this.handletrans}>
          <Option value="Manual">Manual</Option>
          <Option value="Automática">Automática</Option>

      </Select>

      <h2>Condición del vehiculo</h2>
      <Select
          value={isCar.condicion}
          name="transmisión"
          style={{width:'50%'}}
          placeholder="Estados del Vehiculo"
          size='large'
          onChange={this.handleCondition}>
          <Option value="Usado">Usado</Option>
          <Option value="Nuevo">Nuevo</Option>

      </Select>

      <h2>Marca</h2>
      <Select
      style={{width:'50%'}}
       mode="combobox"
       value={this.state.search?this.state.search:this.state.isCar.marca}
       placeholder='Marca'
       notFoundContent=""
       defaultActiveFirstOption={false}
       showArrow={false}
       filterOption={false}
       onChange={this.handleMarca}
     >
        {filtered.map((marca,index)=>{
          return(
            <Option key={index} value={marca.nombre}>{marca.nombre}</Option>
          )
        })}
     </Select>
     <h2>Modelo</h2>
        <Input
            value={isCar.modelo}
            name='modelo'
            style={{width:'50%'}}
            size='large'
            onChange={this.handleText}
            placeholder="Modelo del Vehiculo"/>
     <h2>Año</h2>
     <Input
       value={isCar.ano}
       name='ano'
       style={{width:'50%'}}
       size='large'
       onChange={this.handleText}
       placeholder="Año del vehículo"/>
     <h2>Kilometraje</h2>
       <Input
         value={isCar.km}
         name='km'
         style={{width:'50%'}}
         size='large'
         onChange={this.handleText}
         placeholder="4000km"/>
      </div>
    );
  }
}
export default DetalleVehiculos;

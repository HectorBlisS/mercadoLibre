import React, {Component} from 'react';
import firebase from '../../api/firebase';
import { Steps, Button, message, Spin } from 'antd';
import Basicos from './Basicos';
import DetalleVehiculos from './DetalleVehiculos';
import Resumen from './Resumen';

const Step = Steps.Step;






const steps = [{
  title: 'Básicos',
  content:''
}, {
  title: 'Detalles',
  content: ''
},{
  title: 'Resumen',
  content: ''
}];

class NewProductPage extends Component{

  constructor(props) {
     super(props);
     this.state = {
         user:null,
       current: 0,
       anuncio:{},
       disabled: true,
         loading:false
     };
   }
   publicar=()=>{
        this.setState({loading:true});
      const anuncio = this.state.anuncio;
      const fotos = this.state.anuncio.fotos;
      const user = this.state.user;
      anuncio.fotos = null;
      anuncio["user"] = user.uid;

      firebase.database().ref('users/'+ user.uid + '/productos')
          .push(anuncio)
          .then(r=>{
              firebase.database().ref('productos/')
                  .push(anuncio)
                  .then(r=>r=>message.success('Se ha publicado tu anuncio!'));
          })
          .catch(e=>message.error('No se pudo publicar', e));



     //this.handleImageUpload()
   };
   next() {
    /*if(this.validateAds(this.state.anuncio,5)){
      const current = this.state.current + 1;
      this.setState({ current });
    }else if(this.validateAds(this.state.anuncio,11)){
      const current = this.state.current + 1;
      this.setState({ current });
    }*/
    const current = this.state.current + 1;
    this.setState({ current });

   }
   prev() {
     const current = this.state.current - 1;
     this.setState({ current });
   }
    updateAnuncio = (anuncio) => {
       this.setState({anuncio});
       console.log(this.state.anuncio);
    };

  handleImageUpload = () => {
    let user = JSON.parse(localStorage.getItem("user"));

    this.state.anuncio.fotos.map((foto)=>{
      console.log("archivo",foto)
      let storage = firebase.storage().ref("product_images/"+user.uid)
      storage.child(foto.name).put(foto.originFileObj)
    })
   //storage.child(file.name).put(file));
 };

 disable = () => {
   this.setState({disabled:true});
 };

 enable = () => {
        this.setState({disabled:false});
    };

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        this.setState({user});
    }
    firebase.auth().onAuthStateChanged(user=>{
       if(user){
           this.setState({user});
       }else{
         message.warning('Inicia sesión para publicar')
         this.props.history.push('/login')
       }
    });
  }
  render(){
    const {disabled, loading} = this.state;
    return(
      <div style={{padding:'3% 5%', textAlign:'center'}}>
          {!loading ? <div>
        <Steps current={this.state.current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>

          
        <div className="steps-content">
          {this.state.current===0?

              <Basicos updateAnuncio={this.updateAnuncio} enable={this.enable} style={styles.stepContainer}  handleImageUpload={this.handleImageUpload}/>
          :
          this.state.current===1?
              <DetalleVehiculos updateAnuncio={this.updateAnuncio} disable={this.disable} enable={this.enable} style={styles.stepContainer} anuncio={this.state.anuncio}/>:
          this.state.current===2?
              <Resumen style={styles.stepContainer} anuncio={this.state.anuncio}/>:''}
        </div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
              <Button type="primary" onClick={() => this.next()} disabled={disabled}  >Siguiente</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={this.publicar} disabled={disabled}>Publicar</Button>
          }

          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Anterior
            </Button>
          }
        </div>
          </div> : <Spin /> }
      </div>
    );
  }
}


const styles={
    stepContainer:{
        padding:'1%',
        height:'70vh',
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom:'20px'

    }
};

export default NewProductPage;

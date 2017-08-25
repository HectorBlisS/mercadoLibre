import React, {Component} from 'react';
import firebase from '../../api/firebase';
import { Steps, Button, message } from 'antd';
import Basicos from './Basicos';
import DetalleVehiculos from './DetalleVehiculos';
import Resumen from './Resumen';

const Step = Steps.Step;



const styles={
  stepContainer:{
    padding:'1%',
    height:'70vh',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  }
}


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
       current: 0,
       anuncio:{},
       disabled: true
     };
   }
   publicar=()=>{
     message.success('Processing complete!')
     this.handleImageUpload()
   }
   next() {
     const current = this.state.current + 1;
     this.setState({ current });
   }
   prev() {
     const current = this.state.current - 1;
     this.setState({ current });
   }
   pasala=(a)=>{
     this.setState({anuncio:a})
   }

  handleImageUpload = () => {

    this.state.anuncio.fotos.map((foto)=>{
      let user = JSON.parse(localStorage.getItem("user"));
      let storage = firebase.storage().ref("product_images/"+user.uid)
      storage.child(foto.name).put(foto)
    })
   //storage.child(file.name).put(file));
 }

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

    return(
      <div style={{padding:'3% 5%'}}>
        <Steps current={this.state.current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">
          {this.state.current===0?

              <Basicos style={styles.stepContainer} pasala={this.pasala} anuncio={this.state.anuncio} handleImageUpload={this.handleImageUpload}/>
          :
          this.state.current===1?
              <DetalleVehiculos style={styles.stepContainer} pasala={this.pasala} anuncio={this.state.anuncio}/>:
          this.state.current===2?
              <Resumen style={styles.stepContainer} anuncio={this.state.anuncio}/>:''}
        </div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
              <Button type="primary" onClick={() => this.next()} disabled={false}  >Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={this.publicar}>Done</Button>
          }

          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </div>
    );
  }
}
export default NewProductPage;

import React, {Component} from 'react';
import firebase, {api} from '../../api/firebase';
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
         loading:false,
         fotos:[]
     };
   }

    setFotos = (list) => {
      this.setState({fotos:list});
    };

    fotosDespues = (key) => {
        const fotos = this.state.fotos;
        //const anuncioRef = firebase.database().ref('productos/' + key);
        const storage = firebase.storage().ref("product_images/" + key + "/");
        let anuncio = this.state.anuncio;
        anuncio['fotos'] = [];

        fotos.map(foto=> {

            storage.child(foto.name).put(foto.originFileObj)
                .then(r => {
                    console.log(r.downloadURL);
                    anuncio['fotos'].push(r.downloadURL);
                    //this.setState({anuncio});
                    api.putProduct(key, anuncio)
                        .then(r=>{
                            console.log('foto subida: ');
                        });
                })
                .catch(e=>{
                    console.log(e);
                    message.error("algo falló, vuelve a intentarlo");

                });



        });

    };

   publicar = () => {
       //rama general
       const user = this.state.user;
       let anuncio = this.state.anuncio;
       anuncio['user'] = user.uid;
       //anuncio['fotos'] = [];

       api.saveProduct(anuncio)
           .then(r=>{
               api.saveUserProduct(r, user.uid);
               this.setState({anuncio});
               message.success("Tu anuncio se ha publicado");
               this.fotosDespues(r);
           })
           .catch(e=>{
               message.error('algo falló, intentalo de nuevo perro');
               console.log(e);
           });
       //rama usuario


    //  this.setState({loading:true});
      //const anuncio = this.state.anuncio;
    //  const fotos = this.state.fotos;
    //  const user = this.state.user;
    //  anuncio.fotos = [];
    //  anuncio["user"] = user.uid;
    //  anuncio['date'] = Date.now();

    //  this.setState({anuncio});


    //  firebase.database().ref('users/'+ user.uid + '/productos')
      //    .push(anuncio)
        //  .then(r=>{

              //console.log(r.key);
        //      firebase.database().ref('productos/'+r.key)
          //        .set(anuncio);

           //   this.handleImageUpload(r.key);
           //   message.success("Tu auncio de ha publicado");
              //this.setState({loading:false});
             // this.props.history.push('/perfil');

              //this.handleImageUpload(r.key);
              //message.success("Tu auncio de ha publicado");
              //this.setState({loading:false});
              //this.props.history.push('/perfil');

              //console.log(r.key);



        //  })
          //.catch(e=>{
            //  message.error('No se pudo publicar');
              //console.log(e);

          //});
       //



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

  handleImageUpload = (key) => {
    const fotos = this.state.fotos;
    const user = this.state.user;


    fotos.map((foto)=>{
      //console.log("archivo",foto);
      let storage = firebase.storage().ref("product_images/" + key)
      storage.child(foto.name).put(foto.originFileObj)
        return true;

    });
   //storage.child(file.name).put(file));


    const anuncio = this.state.anuncio;
    let fotosArray = [];

    fotos.map((foto)=>{
      //console.log("archivo",foto);

      let storage = firebase.storage().ref("product_images/" + key);
        storage.child(foto.name).put(foto.originFileObj)
          .then(r=>{
              console.log(r.downloadURL);
              fotosArray.push(r.downloadURL);
              anuncio['fotos'] = fotosArray;
              firebase.database().ref('productos/'+key)
                  .set(anuncio);
              firebase.database().ref('users/'+user.uid+'/productos/'+key)
                  .set(anuncio);
              this.setState({fotosArray});
          });

        return true;
    });
    message.success("Tu Anuncio se ha publicado con éxito");
      this.props.history.push('/perfil');

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
      <div style={{padding:'3% 5%', width:'100%'}}>
          {!loading ? <div>
        <Steps current={this.state.current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>


        <div className="steps-content">
          {this.state.current===0?

              <Basicos setFotos={this.setFotos} updateAnuncio={this.updateAnuncio} enable={this.enable} style={styles.stepContainer}  handleImageUpload={this.handleImageUpload}/>
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
          </div> : <div style={{margin:'0 auto'}}><Spin  /></div> }
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

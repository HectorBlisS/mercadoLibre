import React, {Component} from 'react';
import { Row, Col, Card, Avatar, Input, message, Button} from 'antd';
import firebase from '../../api/firebase';


const { TextArea } = Input;
class ProductDetail extends Component{

  constructor(){
    super();
    this.state={

      anuncio:{
        fotos:[],
        categorias:[],
        estado:[]
      },
      laFoto:'',
        message:'',
        loading:true,
        owner:null,
        preguntas:[]
    }

  }


  componentWillMount(){


    //traemos el anuncio
    firebase.database().ref('productos/' + this.props.match.params.productId)
    .on('value', (snap)=>{
      let anuncio = snap.val();
      anuncio['key'] = snap.key;
      this.setState({anuncio, laFoto:snap.val().fotos[0]});
      //console.log(this.state);

      //obtenemos los datos del anunciante:
        firebase.database().ref('users/'+snap.val().user)
            .on('value', s=>{
              this.setState({owner:s.val(), loading:false});

            });

        //traemos los comentarios con un onChild
        firebase.database().ref('preguntas')
            .orderByChild("anuncio")
            .equalTo(this.props.match.params.productId)
            .on('child_added', s=>{
              let pregunta = s.val();
              pregunta['key'] = s.key;
              const preguntas = this.state.preguntas;
              firebase.database().ref('users/' + pregunta.sender)
                  .on('value', s=>{
                    pregunta['sender'] = s.val();
                      preguntas.push(pregunta);
                    this.setState({preguntas});
                    console.log(pregunta);
                  });
            });

    });


   if(typeof this.props.productId === undefined){
     firebase.database().ref('productos/' + this.props.match.params.productId)
         .on('value', (snap)=>{
           this.setState({anuncio:snap.val(), laFoto:snap.val().fotos[0]})
           console.log(this.state)
         })
   }else{
     firebase.database().ref('productos/' + this.props.productId)
         .on('value', (snap)=>{
           this.setState({anuncio:snap.val(), laFoto:snap.val().fotos[0]})
           console.log(this.state)
         })
   }


  }

  sendMessage=()=>{
    const anuncio = this.state.anuncio;
    this.setState({loading:true});
    firebase.auth().onAuthStateChanged(user=>{
      //console.log(user);
      if(user){
          firebase.database().ref('preguntas')
              .push({
                  date:Date.now(),
                  sender:user.uid,
                  anuncio:this.props.match.params.productId,
                  owner:anuncio.user,
                  message:this.state.message,
                  read:false
              })
              .then(r=>{
                  message.success('Se ha enviado tu mensaje a '+ this.state.owner.displayName);
                  this.setState({loading:false});
              })
              .catch(e=>{
                  message.error('No Se ha enviado tu mensaje');
                  this.setState({loading:false});
              });
      } else {
          message.warning('Para preguntar debes iniciar sesión primero =)');
        }
    });





  };

  changeFoto=(foto)=>{
    this.setState({laFoto:foto})
  };

  getMessage = (e) => {
    //console.log(e.target.value);
    const message = e.target.value;
    this.setState({message});
  };

  render(){
    return(
      <div style={{padding:'2%'}}>
        <Row gutter={16} style={{width:'100%'}}>

          <Col span={16}>
            <h1>{this.state.anuncio.titulo} </h1>
              <p>{this.state.anuncio.categorias.map((cat,i)=>{
                  return(
                    <span key={i} >{cat} / </span>
                  )
                })}</p>
              <div style={{width:'90%'}}>
                <img alt="lafoto" style={{width:'90%'}} src={this.state.laFoto}/>
              </div>
              <div style={{width:'100px', display:'flex'}}>
                {this.state.anuncio.fotos.map((f,i)=>{
                  return(
                    <img
                        key={i}
                        alt="foto"
                      src={f}
                      style={{width:'100%', height:'100%', padding:'1%'}}
                      onClick={()=>this.changeFoto(f)}/>
                  )
                })}
              </div>

          </Col>
          <Col span={8}>
            <Card title="Oswaldinho" extra={<Avatar style={{marginTop:'-8px'}}src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} style={{ width: 300 }}>
              <p>{this.state.anuncio.estado.map((es,i)=>{
                  return(
                    <span
                      key={i}
                    >{es} / </span>
                  )
                })}</p>
              <h3>Contacta a Oswaldinho</h3>
              <TextArea
                  onChange={this.getMessage}
                  rows={4} placeholder="Tu mensaje">
                {this.state.mensaje}
              </TextArea>
              <br/><br/>
              <Button
                size="large"
                loading={this.state.loading}
                type="primary"
                onClick={this.sendMessage}>Enviar Pregunta al Propietario</Button>
              <br/><br/><hr/><br/>
              <h3>Características:</h3>
              <p>{this.state.anuncio.descripcion}</p>
            </Card>
          </Col>

        </Row>

        <div>
          <h2>Comentarios</h2>

              {this.state.preguntas.map(p=>
                  <Card key={p.key} loading={this.state.loading} title={
                    <div style={{padding:10}}>
                      <Avatar src={p.sender.photoURL} />
                      <span>{p.sender.displayName + " -- "}</span>
                      <span>{p.message}</span>
                    </div>
                  } style={{ width: '50%' }}>
                      {p.answer}
                  </Card>
              )}

        </div>

      </div>
    );
  }
}
export default ProductDetail;

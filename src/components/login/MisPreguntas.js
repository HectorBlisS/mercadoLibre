import React, {Component} from 'react';
import firebase from '../../api/firebase';
import {Card, Avatar, Button, Modal, message} from 'antd'
import { Input } from 'antd';
const { TextArea } = Input;


class MisPreguntas extends Component{

    state = {
      preguntas:[],
        loading:true,
        answerModal:false,
        pregunta:{sender:{}},
        response:''
    };

    componentWillMount(){
        // traemos al usuario
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                // traemos las preguntas
                firebase.database().ref('preguntas')
                    .orderByChild("owner")
                    .equalTo(user.uid)
                    .on('child_added', s=>{
                        let preguntas = this.state.preguntas;
                        let pregunta = s.val();
                        pregunta['key'] = s.key;

                        // sabemos la info del sender
                        firebase.database().ref('users/' + pregunta.sender)
                            .on('value', s=>{
                                pregunta['sender'] = s.val();
                                // sabemos la info del anuncio
                                firebase.database().ref('productos/' + pregunta.anuncio)
                                    .on('value', s=>{
                                       pregunta['anuncio'] = s.val();
                                       preguntas.push(pregunta);
                                       this.setState({preguntas, loading:false, pregunta});
                                    });

                                console.log(pregunta);
                            });

                    });

                firebase.database().ref('preguntas')
                    .orderByChild("owner")
                    .equalTo(user.uid)
                    .on('child_changed', s=>{

                        let preguntas = [];
                        let pregunta = s.val();
                        pregunta['key'] = s.key;

                        // sabemos la info del sender
                        firebase.database().ref('users/' + pregunta.sender)
                            .on('value', s=>{
                                pregunta['sender'] = s.val();
                                // sabemos la info del anuncio
                                firebase.database().ref('productos/' + pregunta.anuncio)
                                    .on('value', s=>{
                                        pregunta['anuncio'] = s.val();
                                        preguntas.push(pregunta);
                                        this.setState({preguntas, loading:false, pregunta});
                                    });

                                console.log(pregunta);
                            });

                    });
            }
        });
    }

    handleModal = (pregunta) => {
        console.log('openmodal:',pregunta);
        this.setState({answerModal:true, pregunta});
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            answerModal: false,
        });
    };

    textArea = (e) => {
        const response = e.target.value;
        this.setState({response});
    };

    responder = () => {


        firebase.database().ref("preguntas/" + this.state.pregunta.key)
            .on("value", s=>{
                let p = s.val();
                p['answer'] = this.state.response;
                p['read'] = true;
                firebase.database().ref("preguntas/" + s.key)
                    .set(p);
                message.success("Tu respuesta fué enviada");
            });
        this.setState({answerModal:false});
    };



    render(){
        return(
            <div>

                {this.state.preguntas.map(p=>
                    <Card
                        key={p.key}
                        loading={this.state.loading}
                        extra={!p.read?<Button onClick={()=>this.handleModal(p)}>Responder</Button>:null}
                        title={
                        <div style={{padding:10}}>
                            <Avatar src={p.sender.photoURL} />
                            <span> {p.sender.displayName + " "}</span>
                            <span>en: {p.anuncio.titulo}
                            <br/>

                            </span>
                        </div>
                    } style={{ width: '50%' }}>
                        <span>{p.message}</span>
                        <br/>
                        {p.answer}
                    </Card>
                )}


                <Modal
                    title={"Responder a " + this.state.pregunta.sender.displayName}
                    visible={this.state.answerModal}
                    onOk={this.responder}
                    okText="Responder"
                    cancelText="Cancelar"
                    onCancel={this.handleCancel}
                >
                    <TextArea
                        onChange={this.textArea}
                        rows={4} />
                </Modal>

            </div>
        );
    }
}

export default MisPreguntas;


import React, {Component} from 'react';
import firebase from '../../api/firebase';
import {Card, Avatar, Button, Modal} from 'antd'

class MisPreguntas extends Component{

    state = {
      preguntas:[],
        loading:true,
        answerModal:false,
        pregunta:{sender:{}}
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
                                       this.setState({preguntas, loading:false});
                                    });

                                console.log(pregunta);
                            });

                    });
            }
        });
    }

    handleModal = (pregunta) => {
        this.setState({answerModal:true, pregunta});
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            answerModal: false,
        });
    };

    responder = () => {

    };


    render(){
        return(
            <div>

                {this.state.preguntas.map(p=>
                    <Card
                        key={p.key}
                        loading={this.state.loading}
                        extra={<Button onClick={()=>this.handleModal(p)}>Responder</Button>}
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
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

            </div>
        );
    }
}

export default MisPreguntas;


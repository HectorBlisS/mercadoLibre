import React, {Component} from 'react';
import firebase from '../../api/firebase';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card, message } from 'antd';
import "./login.css";



const FormItem = Form.Item;

class Login extends Component {

    state = {
        loading:false,
        location:""
    };

    componentWillMount(){
        let location = (typeof this.props.match === undefined) ? "ruta": "checkout";
        this.setState({location})
        if(location === "ruta"){
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                this.props.history.push('/');
            }
        }
    }

    fireLogin = (pro) => {
        console.log(pro)
        this.setState({loading:true});
        let provider;
        pro === 'google' ? provider = new firebase.auth.GoogleAuthProvider() : provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(r => {
                const perfil = firebase.database().ref("users/" + r.user.uid);
                perfil
                    .on('value', (s)=>{
                       if(s.val()){
                           console.log('already exists')
                       }else{
                           //console.log(r.user);
                            perfil.set({
                                displayName:r.user.displayName,
                                email:r.user.email,
                                photoURL:r.user.photoURL,
                                tel:'',
                                uid:r.user.uid
                            })
                       }
                    });

                //updates['users/' + r.user.uid] = postData;
               // firebase.database().ref().update(updates);
                // localStorage.setItem("user", JSON.stringify(result.user));
                // console.log(result.user.providerData[0]);
                // this.setState({loading:false});
                message.success("Bienvenido " + r.user.displayName);
               // console.log(localStorage.getItem("user"));
                if(this.state.location === "ruta") this.props.history.push('/perfil');

                //solo se ejecuta esta sección si el login es desde el checkout


            })
            .catch(e=>{
                this.setState({loading:false});
                message.error('No se puedo iniciar sesión '+e);

            });

    };

    render(){
        const {loading} = this.state;
        return(
            <Card style={{
                margin:'0 auto',
                marginTop:100,
                width: 300
            }}>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>

                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />

                    </FormItem>
                    <FormItem>

                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />

                    </FormItem>
                    <FormItem>

                        <Checkbox>Recuerdame</Checkbox>

                        <a className="login-form-forgot" href="">¿Olvidaste tu password?</a>


                        <div className="items-contaiener">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Inicia
                            </Button>
                            <span>O</span>
                            <a href="">¡Registrate ahora!</a>
                        </div>


                        <div style={{textAlign:'center'}}>
                            Inicia con redes sociales
                            <br/>
                            <Button
                                onClick={()=>this.fireLogin('google')}
                                type="danger"
                                loading={loading}
                            >Google</Button>
                            <Button type="primary"
                                    onClick={()=>this.fireLogin('facebook')}
                            >Facebook</Button>
                            <Button type="dashed">Twitter</Button>


                        </div>
                    </FormItem>
                </Form>
            </Card>

        );
    }
}

export default Login;
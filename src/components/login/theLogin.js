import React, {Component} from 'react';
import firebase from '../../api/firebase';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card, message } from 'antd';
import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import "./login.css";




const FormItem = Form.Item;

class Login extends Component {

    state = {
        loading:false,
        location: ""
    };

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        if(user){
            console.log('yo pusheo');
            this.props.history.push('/perfil');
        }


        //console.log(this.props.match)
        // let location = this.props.match ? "ruta": "checkout";
        //
        // this.setState({location});
        // if(location === "ruta"){
        //     const user = JSON.parse(localStorage.getItem('user'));
        //     if (user) {
        //         this.props.history.push('/');
        //     }
        // }

    }

    componentWillReceiveProps(nP){
        console.log(nP.user);
        if(nP.fetched){
            message.success("Bienvenido", nP.user.displayName);
            console.log('yo pusheo mijo: ');
            this.props.history.push('/perfil');
        }


    }

    fireLogin = (pro) => {
        //console.log(pro);
        this.setState({loading:true});
        let provider;
        pro === 'google' ? provider = new firebase.auth.GoogleAuthProvider() : provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(r=>{
                this.props.userActions.getCurrentUserInfo(r.user);
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

function mapStateToProps(state, ownProps){
    return {
        user: state.user,
        fetched:state.user !== {}
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
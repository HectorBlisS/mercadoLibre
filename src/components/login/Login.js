import React, {Component} from 'react';
import firebase from '../../api/firebase';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card, message } from 'antd';



const FormItem = Form.Item;

class Login extends Component {
    
    state = {
        loading:false
    }
    
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        if (user){
            this.props.history.push('/');
        }
    }
    
    fireLogin = () => {
      this.setState({loading:true});  
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            localStorage.setItem("user", JSON.stringify(result.user));
            console.log(result.user);
            this.setState({loading:false});
            message.success("Bienvenido "+result.user.displayName);
        console.log(localStorage.getItem("user"));
            this.props.history.push('/perfil');
    })
        .catch(e=>{
        this.setState({loading:false});
         message.error('No se puedo iniciar sesión'+e);
        
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Inicia
          </Button>
          O <a href="">¡Registrate ahora!</a>
          <div style={{textAlign:'center'}}>
              Inicia con redes sociales
                 <br/>
             <Button 
             onClick={this.fireLogin}
             type="danger"
             loading={loading}
             >Google</Button>
            <Button type="primary">Facebook</Button>
            <Button type="dashed">Twitter</Button>


          </div>
        </FormItem>
      </Form>
  </Card>
       
        );
    }
}

export default Login;
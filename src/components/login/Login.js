import React, {Component} from 'react';
import firebase from '../../api/firebase';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card } from 'antd';



const FormItem = Form.Item;

class Login extends Component {
    render(){

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

            <Checkbox>Remember me</Checkbox>

          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
  </Card>
       
        );
    }
}

export default Login;
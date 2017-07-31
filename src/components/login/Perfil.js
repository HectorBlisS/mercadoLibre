import React, {Component} from 'react';
import { Tabs, Icon } from 'antd';
import { Input, Card, Button } from 'antd';
import { Row, Col, message } from 'antd';
import firebase from '../../api/firebase';


const TabPane = Tabs.TabPane;

class Perfil extends Component{
    
    state = {
        user:{photoURL:'',displayName:''},
        userName:'Héctor BlisS',
        tel:'',
        mail:'',
        loading:false
    }
    
    componentWillMount(){
        let user = localStorage.getItem("user")
        user = JSON.parse(user);
        
        if(user){
           this.setState({user}); firebase.database().ref('users/'+user.uid)
            .on('value', r=>{
                 this.setState({user:r.val().user});
                console.log(r.val());
                
            });
           
        }else{
            this.props.history.push('/login');
        }
    }


  onChangeUserName = (e) => {
    let user = this.state.user;
    let field = e.target.name; 
      user[field] = e.target.value;
    this.setState({ 
        user
    });
  }
  
  guardarPerfil = () => {
      this.setState({loading:true});
      const user = this.state.user;
      firebase.database().ref('users/'+user.uid)
      .set({user})
      .then(r=>{
          this.setState({loading:false});
          message.success("Perfil guardado");
      });
      
  };
    
    render(){
        const {user, loading} = this.state;
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return(
    <div 
        style={{
                width:'80%',
                margin:'0 auto',
            }}>

    <Row 
        type="flex"
        justify="center"
        align="middle">
    <Col span={6}>
         <img 
                style={styles.img}
                src={user.photoURL} 
                alt=""/>
    </Col>
      <Col span={18}>
                
            <Card
                    loading={false}
                    title="Tus Datos"
                    style={{width:'50%', display:'inline-block'}}
                >
     <Input
       name="displayName"
        placeholder="Tu nombre de usuario"
        prefix={<Icon type="user" />}
        value={user.displayName}
        onChange={this.onChangeUserName}
      />
           <Input
        name="tel"
        placeholder="Tu teléfono"
        prefix={<Icon type="phone" />}
        value={user.tel}
        onChange={this.onChangeUserName}
      />
           <Input
        name="email"
        placeholder="Tu Correo electrónico"
        prefix={<Icon type="mail" />}
        value={user.email}
        onChange={this.onChangeUserName}
      />
           <Button
             loading={loading}
              type="danger"
              onClick={this.guardarPerfil}
              >
              Guardar 
           </Button>
            </Card>
      </Col>
     
    </Row>                

                
            

            
          
        <Tabs 
           defaultActiveKey="2">
            <TabPane tab={<span><Icon type="apple" />Preguntas</span>} key="1">
             Preguntas
            </TabPane>
            <TabPane tab={<span>
             <Icon type="android" />
             Publicaciones
             </span>} key="2">
              Publicaciones
            </TabPane>
            
            <TabPane tab={<span>
             <Icon type="android" />
             Operaciones
             </span>} key="3">
              Operaciones
            </TabPane>
            
        </Tabs>
    </div>

        );
    }
}

const styles = {
  img:{
      maxWidth: '150px',
      width:'auto',
      borderRadius:'50%',
      margin:'50px 10px 10px 0px',
      display:'inline-block'
  }  
};

export default Perfil;
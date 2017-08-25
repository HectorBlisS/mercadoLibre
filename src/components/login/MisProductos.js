import React, {Component} from 'react';
import firebase from '../../api/firebase';
import { Card, Button } from 'antd';

const DrawP = (props) => {
    const {p} = props;
    console.log(p);
    return(
        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src={p.fotos[0]} />
            </div>
            <div className="custom-card">
                <h3>{p.titulo}</h3>
                <p>$ {p.precio}</p>
                <Button
                    type="danger"
                >Editar</Button>
            </div>
        </Card>
    );
};


class MisProductos extends Component{

    state = {
        user:{},
        loading:true,
        products:[]
    };


    componentWillReceiveProps(props){
        this.setState({user:props.user});
        firebase.database().ref('users/'+props.user.uid+'/productos')
            .once('value')
            .then(s => {
                console.log(s.val());
                let products = [];
                for (let k in s.val()){
                    products.push(s.val()[k]);
                }
                this.setState({products, loading:false});
            })
            .catch();
    }


    render(){
        const {user, products} = this.state;
        return(
            <div>
                <h1>Productos de {user.displayName}</h1>
                {products.map((p,i)=><DrawP key={i} p={p} />)}
            </div>
        );
    }
}

export default MisProductos;
import React from 'react';
import { Steps, Button, message,Icon } from 'antd';
import './checkout.css';
import DataForm from './DataForm';
import ProductDetail from '../products/ProductDetail';
import FormPay from './FormPay';
import Login from '../login/theLogin';
import firebase from '../../api/firebase';

const Step = Steps.Step;

const stepsCar = [{
    title: 'Inicia sesión',
    content: <Login/>,
    icon:<Icon type="user" />
},{
    title: 'Información de Contacto',
    content: <DataForm/>,
}, {
    title: 'Ordenar',
    content: null,
}];

const stepsProduct = [{
    title: 'Inicia sesión',
    content: <Login/>,
    icon:<Icon type="user" />
},{
    title: 'Datos de compra',
    content: <FormPay/>,
    icon: <Icon type="credit-card" />
}, {
    title: 'Verificar',
    content: null,
    icon: <Icon type="solution" />
}];


class Checkout extends React.Component{

    constructor(props) {
        super(props);

        let obj = JSON.parse(localStorage.getItem("details"));
        let prod = obj[Object.keys(obj)[0]].item

        let s = prod.categorias[0] == "vehiculos" ? stepsCar:stepsProduct

        console.log(prod.categorias[0]);
        console.log(prod.categorias[0] === "vehiculos");

        this.state = {
            current: 0,
            steps: s,
            anuncio: prod,
            user: {},
            client: {}

        }
    }

    handleClientInfo = (info) => {
        const userProducts = firebase.database().ref('users/'+this.state.user+'/citas');
        return userProducts.child(info).set(true);
    }

    componentWillMount(){

        const newSteps = this.state.steps;
        newSteps[newSteps.length-1].content = <ProductDetail productId={this.state.anuncio.key} />

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user});
                //console.log(user);
                firebase.database().ref('users/'+user.uid)
                    .on('value', r=>{
                        if(r.val() !== null) this.setState({user:r.val()});
                        console.log(r.val());

                    })
                this.next();
            }
        });

    }

    handleCheckoutLogin = () => {

    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    handleClientInfo = (info) => {

        this.setState({clientInfo:info})
        message.success("Tus datos se agregaron con éxito")

    }

    render(){

        const current = this.state.current;
        return (
            <div className="steps-container-pay">
                <Steps current={current} style={{marginBottom:"5%"}}>
                    {this.state.steps.map(item => <Step key={item.title} title={item.title} icon={item.icon}/>)}
                </Steps>
                <div className="steps-content">{this.state.steps[this.state.current].content}</div>
                <div className="steps-action">
                    {
                        this.state.current < this.state.steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()} disabled={this.user}>Siguiente</Button>
                    }
                    {
                        this.state.current === this.state.steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>Comprar</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Anterior
                        </Button>
                    }
                </div>
            </div>
        );
    }

}

export default Checkout;
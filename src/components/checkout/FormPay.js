import React from 'react';
import {Input, Form, Tooltip, Icon, Button, Row, Col, Select} from 'antd';
import './FormPay.css';

const FormItem = Form.Item;

const Option = Select.Option;

class FormPay extends React.Component{

    constructor(props){
        super()
        this.state = {
            pago: {},
            list: [
                {"id":"MX-AGU",'name': 'Aguascalientes'},
                {"id":"MX-BCN",'name': 'Baja California Norte'},
                {"id":"MX-BCS",'name': 'Baja California Sur'},
                {"id":"MX-CAM",'name': 'Campeche'},
                {"id":"MX-CHP",'name': 'Chiapas'},
                {"id":"MX-CHH",'name': 'Chihuahua'},
                {"id":"MX-COA",'name': 'Coahuila'},
                {"id":"MX-COL",'name': 'Colima'},
                {"id":"MX-DF",'name':  'Ciudad De México'},
                {"id":"MX-DUR",'name': 'Durango'},
                {"id":"MX-GUA",'name': 'Guanajuato'},
                {"id":"MX-GRO",'name': 'Guerrero'},
                {"id":"MX-HID",'name': 'Hidalgo'},
                {"id":"MX-JAL",'name': 'Jalisco'},
                {"id":"MX-MEX",'name': 'Estado de México'},
                {"id":"MX-MIC",'name': 'Michoacan'},
                {"id":"MX-MOR",'name': 'Morelos'},
                {"id":"MX-NA",'name':  'Nayarit'},
                {"id":"MX-NLE",'name': 'Nuevo León'},
                {"id":"MX-OAX",'name': 'Oaxaca'},
                {"id":"MX-PUE",'name': 'Puebla'},
                {"id":"MX-QUE",'name': 'Queretaro'},
                {"id":"MX-ROO",'name': 'Quintana Roo'},
                {"id":"MX-SLP",'name': 'San Luis Potosi'},
                {"id":"MX-SIN",'name': 'Sinaloa'},
                {"id":"MX-SON",'name': 'Sonora'},
                {"id":"MX-TAB",'name': 'Tabasco'},
                {"id":"MX-TAM",'name': 'Tamaulipas'},
                {"id":"MX-TLA",'name': 'Tlaxcala'},
                {"id":"MX-VER",'name': 'Veracruz'},
                {"id":"MX-YUC",'name': 'Yucatan'},
                {"id":"MX-ZAC",'name': 'Zacatecas'}
            ]
        }
    }




    componentWillMount(){


    }


    handleChange = (e) =>{
        e.preventDefault();
        let pago = this.state.pago;
        let campo = e.target.name;
        pago[campo] = e.target.value;
        console.log(pago);
        this.setState({pago});
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        /*console.log(this.state.user.uid);
        let orden = this.state.busqueda;
        orden["pagado"] = true;
        let ordenes = firebase.database().ref("users/"+this.state.user.uid+"/orders")
        ordenes.push(orden);
        message.success("Yo've successfully paid")*/
    }

    handleStateSelection = (value) => {
     console.log(value)
        let pago = this.state.pago;
        pago["estado"] =value;
        this.setState({pago});
    }


    render(){

        const Info = () => (
            <div className="cvc-preview-container two-card">
                <div className="amex-cvc-preview"></div>
                <div className="visa-mc-dis-cvc-preview"></div>
            </div>
        );

        return(

            <Row>
                <Col lg={12} md={12} style={{padding:"0 .75em"}}>
                    <div className="pay-container">
                        <div className="header">
                            Ingresa la Información de pago
                        </div>
                        <div className="cards-available">
                            <span className="visa"></span>
                            <span className="mastercard" ></span>
                            <span className="american"></span>
                        </div>

                        <Form className="form" onSubmit={this.handleSubmit}>

                            <FormItem
                                className="form-item half"
                                label="Nombre del Tarjetahabiente">
                                <Input name="client_card" onChange={this.handleChange} placeholder="John Wick"/>
                            </FormItem>

                            <FormItem
                                className="form-item half"
                                label="Número de tarjeta">
                                <Input name="card" onChange={this.handleChange} placeholder="4242 4242 4242 4242"/>
                            </FormItem>

                            <FormItem
                                className="form-item quarter"
                                label="Exp. Mes">
                                <Input name="month" onChange={this.handleChange} placeholder="02" maxLength="2"/>
                            </FormItem>

                            <FormItem
                                className="form-item quarter"
                                label="Exp. Año">
                                <Input name="year" onChange={this.handleChange} placeholder="17" maxLength="2"/>
                            </FormItem>

                            <FormItem
                                className="form-item quarter"
                                label="No. Seguridad">
                                <Input addonAfter={<Tooltip placement="top" title={<Info/>}><Icon type="question-circle" /></Tooltip>} name="security" onChange={this.handleChange} placeholder="000" maxLength="4" minLength="3"/>
                            </FormItem>

                            <FormItem
                                className="form-item quarter"
                                label="Código postal">
                                <Input name="zip" onChange={this.handleChange} placeholder="09100" maxLength="10"/>
                            </FormItem>

                            <FormItem
                                className="form-item half"
                                label="Nombre del Cliente">
                                <Input name="client" onChange={this.handleChange} placeholder="Héctor Zavala" maxLength="50"/>
                            </FormItem>

                            <FormItem
                                className="form-item half"
                                label="Colonia">
                                <Input name="colonia" onChange={this.handleChange} placeholder="Buenos Aires" maxLength="30"/>
                            </FormItem>

                            <FormItem
                                className="form-item half"
                                label="Calle:">
                                <Input name="calle" onChange={this.handleChange} placeholder="Presidente Masarik" maxLength="30"/>
                            </FormItem>

                            <FormItem
                                className="form-item quarter"
                                label="No. Exterior">
                                <Input name="ext" onChange={this.handleChange} placeholder="9100" maxLength="10"/>
                            </FormItem>

                            <div>
                                <FormItem
                                    className="form-item quarter"
                                    label="Estado">
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Selecciona tu estado"
                                        optionFilterProp="children"
                                        onChange={this.handleStateSelection}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        {this.state.list.map(item=>(
                                            <Option value={item.name} key={item.id}>{item.name}</Option>
                                        ))}
                                    </Select>
                                </FormItem>
                            </div>

                            {/*<div>
                                <Button type="primary" htmlType="submit" size="large" className="pay-btn">
                                    Pagar
                                </Button>
                            </div>*/}



                        </Form>



                    </div>
                </Col>

                <Col lg={12} md={12} style={{padding:"0 .75em"}}>

                    <table>
                        <thead>
                            <tr>
                                <th>Datos del comprador</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Nombre del Tarjetahabiente:</td>
                            <td>{this.state.pago.client_card}</td>
                        </tr>
                        <tr>
                            <td>Expiración de tarjeta:</td>
                            <td>{this.state.pago.month} / {this.state.pago.year}</td>
                        </tr>
                        <tr>
                            <td>Nombre de cliente:</td>
                            <td>{this.state.pago.client}</td>
                        </tr>
                        <tr>
                            <td>Calle:</td>
                            <td>{this.state.pago.calle}</td>
                        </tr>
                        <tr>
                            <td>Código postal</td>
                            <td>{this.state.pago.zip}</td>
                        </tr>
                        <tr>
                            <td>Colonia:</td>
                            <td>{this.state.pago.colonia}</td>
                        </tr>
                        <tr>
                            <td>Número exterior</td>
                            <td>{this.state.pago.ext}</td>
                        </tr>
                        <tr>
                            <td>Estado:</td>
                            <td>{this.state.pago.estado}</td>
                        </tr>

                        </tbody>
                    </table>

                </Col>
            </Row>

        );
    }
}

export default FormPay;
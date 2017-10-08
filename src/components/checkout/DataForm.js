import React from 'react';

const DataForm = () => (<div>BlisS</div>);
export default DataForm;
// import React from 'react';
// import { Form, Input, Tooltip, Icon, Select, Checkbox, Button } from 'antd';
//
// const FormItem = Form.Item;
// const Option = Select.Option;
//
//
// class DataForm extends React.Component {
//     state = {
//         user:{}
//     };
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.handleClientInfo(this.state.user);
//     }
//
//     handleChange = (e) =>{
//         let user = this.state.user;
//         let field = e.target.name;
//         user[field] = e.target.value;
//         this.setState({user})
//         console.log(this.state)
//     }
//
//     handleHour = (a,b) => {
//         let user = this.state.user;
//         user["hora"] = b;
//         this.setState({user});
//
//     }
//
//     handleLada = (value) => {
//         console.log(value)
//     }
//
//     handleDate = (a,b) => {
//         let user = this.state.user;
//         let fecha = JSON.stringify(new Date(a));
//
//         user["date"] = fecha;
//         this.setState({user});
//
//     }
//
//     render() {
//
//         const { getFieldDecorator } = this.props.form;
//
//         const formItemLayout = {
//             labelCol: {
//                 xs: { span: 24 },
//                 sm: { span: 6 },
//             },
//             wrapperCol: {
//                 xs: { span: 24 },
//                 sm: { span: 14 },
//             },
//         };
//         const tailFormItemLayout = {
//             wrapperCol: {
//                 xs: {
//                     span: 24,
//                     offset: 0,
//                 },
//                 sm: {
//                     span: 14,
//                     offset: 6,
//                 },
//             },
//         };
//         const prefixSelector = getFieldDecorator('prefix', {
//             initialValue: '55',
//         })(
//             <Select style={{ width: 60 }} onChange={this.handleLada}>
//                 <Option value="55">55</Option>
//                 <Option value="771">771</Option>
//             </Select>
//         );
//
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <FormItem
//                     {...formItemLayout}
//                     label="E-mail"
//                     hasFeedback
//                 >
//                     {getFieldDecorator('email', {
//                         rules: [{
//                             type: 'email', message: 'No es un E-mail valido!',
//                         }, {
//                             required: true, message: 'Por favor escribe tu E-mail!',
//                         }],
//                     })(
//                         <Input name="email" onChange={this.handleChange}/>
//                     )}
//                 </FormItem>
//
//
//                 <FormItem
//                     {...formItemLayout}
//                     label={(
//                         <span>
//               Nombre completo&nbsp;
//                             <Tooltip title="Cual es el nombre del comprador?">
//                 <Icon type="question-circle-o" />
//               </Tooltip>
//             </span>
//                     )}
//                     hasFeedback
//                 >
//                     {getFieldDecorator('nombre', {
//                         rules: [{ required: true, message: 'Por favor ingresa tu nombre!', whitespace: true }],
//                     })(
//                         <Input name="nombre" onChange={this.handleChange}/>
//                     )}
//                 </FormItem>
//
//                 <FormItem
//                     {...formItemLayout}
//                     label="Número telefónico"
//                 >
//                     {getFieldDecorator('phone', {
//                         rules: [{ required: true, message: 'Por favor ingresa tu número de telefono!' }],
//                     })(
//                         <Input addonBefore={prefixSelector} style={{ width: '100%' }} name="number" onChange={this.handleChange}/>
//                     )}
//                 </FormItem>
//
//                 <FormItem
//                     {...formItemLayout}
//                     label="Selecciona la hora de la cita"
//                 >
//                     {getFieldDecorator('time', {
//                         rules: [{ required: true, message: 'Por favor ingresa la hora del encuentro!' }],
//                     })(
//                         <TimePicker onChange={this.handleHour} use12Hours format="h:mm a" style={{width:"21%"}}/>
//                     )}
//
//                 </FormItem>
//
//                 <FormItem
//                     {...formItemLayout}
//                     label="Selecciona la fecha de la cita"
//                 >
//                     {getFieldDecorator('date', {
//                         rules: [{ required: true, message: 'Por favor ingresa el día del Encuentro!' }],
//                     })(
//                         <DatePicker onChange={this.handleDate}/>
//                     )}
//
//                 </FormItem>
//
//
//                 <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
//                     {getFieldDecorator('agreement', {
//                         valuePropName: 'checked',
//                     })(
//                         <Checkbox>Acepto las <a href="">políticas de privacidad</a></Checkbox>
//                     )}
//                 </FormItem>
//                 <FormItem {...tailFormItemLayout}>
//                     <Button type="primary" htmlType="submit">Agregar datos</Button>
//                 </FormItem>
//             </Form>
//         );
//     }
// }
//
// const WrappedDataForm = Form.create()(DataForm);
//
// export default WrappedDataForm;
import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


class DataForm extends React.Component {
    state = {
        userInfo:{}
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleClientInfo(this.state.userInfo);
    }

    handleChange = (e) =>{
        let user = this.state.userInfo;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user})
        console.log(this.state)
    }

    handleLada = (value) => {
        console.log(value)
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '55',
        })(
            <Select style={{ width: 60 }} onChange={this.handleLada}>
                <Option value="55">55</Option>
                <Option value="771">771</Option>
            </Select>
        );

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                    hasFeedback
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input name="email" onChange={this.handleChange}/>
                    )}
                </FormItem>


                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
              Nombre completo&nbsp;
                            <Tooltip title="Cual es el nombre del comprador?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                    hasFeedback
                >
                    {getFieldDecorator('nombre', {
                        rules: [{ required: true, message: 'Por favor ingresa tu nombre!', whitespace: true }],
                    })(
                        <Input name="nombre" onChange={this.handleChange}/>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Número telefónico"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Por favor ingresa tu número de telefono!' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} name="number" onChange={this.handleChange}/>
                    )}
                </FormItem>


                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>Acepto las <a href="">políticas de privacidad</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Agregar datos</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedDataForm = Form.create()(DataForm);

export default WrappedDataForm;
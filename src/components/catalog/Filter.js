import React from 'react';
import {Menu, Icon, Slider, InputNumber} from 'antd';

const SubMenu = Menu.SubMenu;

class Filter extends React.Component{

    state={
        list: [
            {"id":"all",'name': 'Todos'},
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
        ],
        inputValue:2000
    }

    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
        this.props.handleSearchSlider(value);
    }

    render(){
        return(
            <Menu defaultSelectedKeys={['1']} mode="inline">

                <SubMenu
                    key="sub1"
                    title={<span><Icon type="safety" /><span>Condición</span></span>}
                >
                    <Menu.Item key="con1">Nuevo</Menu.Item>
                    <Menu.Item key="con2">Usado</Menu.Item>

                </SubMenu>

                <SubMenu
                    key="sub2"
                    title={<span><Icon type="line-chart" /><span>Costo</span></span>}
                >
                    <Slider min={2000} max={100000} onChange={this.onChange} value={this.state.inputValue} style={{width:'90%', margin:'0 auto'}}/>
                    <InputNumber
                        min={20000}
                        max={100000}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </SubMenu>

                <SubMenu
                    key="sub3"
                    title={<span><Icon type="environment-o" /><span>Ubicación</span></span>}
                >
                    {this.state.list.map((i, index)=>(
                        <Menu.Item key={index} >
                            <span onClick={()=>this.props.handleSearchLocation(i.name)} style={{width:'100%',display:'block'}}>{i.name}</span>
                        </Menu.Item>
                    ))}
                </SubMenu>

                <Menu.Item key={this.state.list.length-1}>
                    <Icon type="close-circle-o" />
                    <span style={{width:'100%',display:'inlineBlock'}} onClick={this.props.limpiar}>Limpiar Filtros</span>
                </Menu.Item>

            </Menu>
        );
    }

}

export default Filter;
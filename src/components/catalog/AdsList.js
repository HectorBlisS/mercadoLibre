import React from 'react';
import Filter from './Filter';
import {Layout,Icon, Breadcrumb, Input} from 'antd';
import './catalogo.css';
import firebase from '../../api/firebase';
import CardAnuncio from '../products/CardAnuncio';

const { Header, Footer, Sider, Content } = Layout;

class AdList extends React.Component{

    state = {
        collapsed: false,
        anuncios:[],
        search:"",
        results:[],
        searching: false,
        count: 0
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    componentWillMount(){
        firebase.database().ref('productos').on('child_added', r=>{
            let anuncios=this.state.anuncios
            let nuevo = r.val()
            nuevo['key']=r.key
            anuncios.push(nuevo)
            this.setState({anuncios})
            this.setState({results:anuncios})

        })
    }

    handleSearch = (e)=>{
        this.setState({search:e.target.value});
        let updateList = this.state.anuncios;
        updateList = updateList.filter(function (item) {
            return item.titulo.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({results:updateList})
    }

    handleSearchSlider = (value) => {

        let updateList;
        this.state.results.length > 0 && this.state.count===0 ? updateList = this.state.results : updateList = this.state.anuncios;
        const count = this.state.count + 1;
        this.setState({count:count});
        updateList = updateList.filter(function (item) {
            return item.precio <= value;
        });
        this.setState({results:updateList})

    }

    handleSearchLocation = (estado) => {
        let updateList = this.state.anuncios;
        if (estado !== "Todos"){
            updateList = updateList.filter(function (item) {
                return item.estado[1].search(estado) !== -1;
            });
        }
        this.setState({results:updateList})
    }

    limpiar = () => {
        this.setState({
            results:this.state.anuncios,

        })
    }


    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    className="filter"
                    style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                >
                    <Filter handleSearchSlider={this.handleSearchSlider} handleSearchLocation={this.handleSearchLocation} limpiar={this.limpiar}/>
                </Sider>
                <Layout style={{ marginLeft: this.state.collapsed ? 100:200 }}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Input
                            placeholder="Buscar"
                            value={this.state.search}
                            style={{ width: '30%' , display: 'block', margin: '0 auto'}}
                            suffix={this.state.searching ? <Icon type="loading" /> : <Icon type="search" />}
                            disabled={this.state.searching}
                            size="large"
                            onChange={this.handleSearch}
                        />
                    </Header>

                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>Anuncios</Breadcrumb.Item>
                            <Breadcrumb.Item>Estado</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.state.results.map((anuncio,index)=>{
                                return(

                                    <CardAnuncio anuncio={anuncio} match={this.props.match} key={index}/>

                                )
                            })}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Vendelo Fácil ©2017 Created by Fixter
                    </Footer>
                </Layout>
            </Layout>
        );
    }

}

export default AdList;
import React from 'react';
import Filter from './Filter';
import {Layout, Menu, Icon, Breadcrumb, Input} from 'antd';
import './catalogo.css';
import firebase from '../../api/firebase';
import CardAnuncio from '../products/CardAnuncio';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

class AdList extends React.Component{

    state = {
        collapsed: false,
        anuncios:[]
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    componentWillMount(){
        firebase.database().ref('productos').on('child_added', r=>{
            let anuncios=this.state.anuncios
            let nuevo = r.val()
            nuevo['key']=r.key
            anuncios.push(nuevo)
            this.setState({anuncios})
            //firebase.storage().ref().child('product_images/'+r.key).getDownloadURL()
        })
        console.log(this.state.anuncios)
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
                    <Filter/>
                </Sider>
                <Layout style={{ marginLeft: this.state.collapsed ? 100:200 }}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Search
                            placeholder="Buscar"
                            style={{ width: '30%' , display: 'block', margin: '0 auto'}}
                            onSearch={value => console.log(value)}
                        />
                    </Header>

                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>Anuncios</Breadcrumb.Item>
                            <Breadcrumb.Item>Estado</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.state.anuncios.map((anuncio,index)=>{
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
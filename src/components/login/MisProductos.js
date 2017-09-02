import React, {Component} from 'react';
import firebase, {api} from '../../api/firebase';
import { Card, Button, Popconfirm, Carousel } from 'antd';




class MisProductos extends Component{

    state = {
        user:{},
        loading:true,
        productIds:[],
        products:[]
    };


    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({user});
                    //console.log('userUid: ',user.uid)
                    this.makeProductsList(user.uid);
            }
        });
    }

    makeProductsList = (userUid) => {

        // firebase.database().ref('users/' + userUid + '/productos')
        //     .once('value')
        //     .then(s=>{
        //         //console.log('productos: ',s.val());
        //         for (let k in s.val()){
        //             firebase.database().ref('productos')
        //                 .orderByValue("user")
        //                 .equalTo(k)
        //                 .on('child_added'
        //                 ,s=>{
        //                     let productos = this.state.products;
        //                     const nuevo = s.val();
        //                     nuevo['key'] = s.key;
        //                     productos.push(nuevo);
        //                     this.setState({productos});
        //                 });
        //
        //
        //         }
        //
        //     })
        firebase.database().ref('productos')
            .orderByChild("user")
            .equalTo(userUid)
            .on('child_added',s=>{
                let products = this.state.products;
                const item = s.val();
                item['key'] = s.key;
                products.push(item);
                this.setState({products});
            });

        firebase.database().ref('productos')
            .on('child_removed',
                s=>{
                    let productos = this.state.products;
                   // console.log(s.key);
                    const key = s.key;
                    let newp = productos.filter(p=>{
                        return p.key !== key;
                    });
                    this.setState({products:newp});
                });



    };

    borrar = (key) => {
        api.deleteProduct(key);
    };


   // componentWillReceiveProps(props){
     //   this.setState({user:props.user});
       // firebase.database().ref('users/'+props.user.uid+'/productos')
         //   .once('value')
           // .then(s => {
             //   console.log(s.val());
               // let products = [];
//                for (let k in s.val()){
  //                  products.push(s.val()[k]);
    //            }
      //          this.setState({products, loading:false});
        //    })
          //  .catch();
    //}


    render(){

        const DrawP = (props) => {
            const {p} = props;
            //console.log(p);
            return(
                <Card style={styles.card} bodyStyle={{ padding: 0 }}>

                        <Carousel autoplay vertical>
                            {p.fotos.map((f,i)=><div key={i}><img style={styles.fotoC} alt="example" width="100%" src={f} /></div>)}
                        </Carousel>


                    <div className="custom-card">
                        <h3>{p.titulo}</h3>
                        <p>$ {p.precio}</p>

                        <Popconfirm title="¿Seguro quieres eliminar tu anuncio?"
                                    onConfirm={()=>this.borrar(p.key)}
                                    onCancel={false}
                                    okText="Yes"
                                    cancelText="No">
                            <Button
                                type="danger"
                            >Borrar</Button>
                        </Popconfirm>


                    </div>
                </Card>
            );
        };

        const {user, products} = this.state;
       // console.log(products);
        return(
            <div>
                {<div>
                    <h1>Anuncios de {user.displayName}</h1>
                    {products.map((p,i)=><DrawP key={i} p={p} />)}
                </div>}

            </div>
        );
    }
}

const styles = {
    fotoC:{
        height:'200px',
    },
    card:{
        width:'340px',
        margin:'20px',
        display:'inline-block'
    }
};

export default MisProductos;
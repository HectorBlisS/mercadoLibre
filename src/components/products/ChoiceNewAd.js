/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {VehiculoForm} from '../common/forms/VehiculoForm';
//import ProgressBar from '../common/ProgressBar';
//import Label from '../common/Label';

export class ChoiceNewAd extends Component {
    state = {
        selected:false
    };

    changeSelected = () => {
        this.setState({selected:true});
    };

    renderChoice = () => (
        <div>
            <h2 style={{margin:'0 auto', width:'320px'}}>¿Que vas a anunciar?</h2>
            <div style={styles.container}>

                <div>
                    <Link to="/nuevo/vehiculo">
                        <Button
                            style={styles.bigButton}
                            onClick={this.changeSelected}
                        >
                            Automovil, moto o camioneta
                        </Button>
                    </Link>
                    <Link to="/nuevo/vehiculo/lol">
                        <Button
                            style={styles.bigButton}
                            onClick={this.changeSelected}
                        >
                            Productos y otros
                        </Button>
                    </Link>
                    <Link to="/nuevo/vehiculo/lol">
                        <Button
                            style={styles.bigButton}
                            onClick={this.changeSelected}
                        >
                            Inmuebles
                        </Button>
                    </Link>
                    <Link to="/nuevo/vehiculo/lol">
                        <Button
                            style={styles.bigButton}
                            onClick={this.changeSelected}
                        >
                            Servicios
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );

    render() {
        //const {selected} = this.state;
        return (

            <div style={styles.formContainer}>
                <Route exact path="/nuevo" render={this.renderChoice}/>
                <Route exact path="/nuevo/vehiculo" component={VehiculoForm}/>
                <Route path="/nuevo/vehiculo/:adId" component={VehiculoForm}/>


            </div>

        );
    }
}

const styles = {
    container:{
        textAlign:'center',
        flexDirection:'row',
        display:'flex',
        //flexWrap:'wrap',
        //alignItems:"strech",
        justifyContent:"center",
        paddingTop:'20px'
    },
  bigButton:{
      width:"auto",
      minWidth:"350px",
      height:'auto',
      minHeight:"120px",
      flex:1,
      padding:'20px'
  },
    formContainer:{
        paddingTop:'10%'
    }
};



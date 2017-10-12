/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const ShowOptions = ({options}) => (
    <div>
        {options.map(o=><p>{o.name}({o.len})</p>)}
    </div>

);

class VehiculosFilter extends Component {
    state = {
        modelos:[
            {name:"Sentra", len:10},
            {name:"Chevy", len:45}
        ],
        years:[{name:2010, len:20}],
        precios:[],
        condiciones:[{name:"Nuevo", len:50}],
        kilometros:[],
        tipos:[{name:"Sedan", len:456}],
        ubicaciones:[{name:"Distrito Federal", len:2525}],
        combustibles:[{name:"Gasolina", len:7828}],
        puertas:[{name:3, len:100}],
        transmisiones:[{name:"Automática", len:45}],
        direcciones:[{name:"Hidráulica", len:171}]
    };

    render() {
        const {
            modelos,
            years,
            //precios,
            condiciones,
            //kilometros,
            tipos,
            ubicaciones,
            combustibles,
            puertas,
            transmisiones,
            direcciones
        } = this.state;
        return (
            <div className="filtro" style={styles.container}>
                <h3>Filtros</h3>
                <h4>Modelo</h4>
                    <ShowOptions options={modelos} />
                <h4>Año</h4>
                    <ShowOptions options={years} />
                <h4>Precio</h4>
                <h4>Condición</h4>
                    <ShowOptions options={condiciones} />
                <h4>Kilómetros</h4>
                <h4>Tipo</h4>
                    <ShowOptions options={tipos} />
                <h4>Ubicación</h4>
                    <ShowOptions options={ubicaciones} />
                <h4>Tipo de Combustible</h4>
                    <ShowOptions options={combustibles} />
                <h4>Puertas</h4>
                    <ShowOptions options={puertas} />
                <h4>Transmisión</h4>
                    <ShowOptions options={transmisiones} />
                <h4>Dirección</h4>
                    <ShowOptions options={direcciones} />
            </div>
        );
    }
}

const styles = {
    container:{
        width:"240px",
        //backgroundColor:"lightgrey",
        marginTop:"60px",
        marginRight:"10px",
        paddingLeft:"30px"
    }
};

//VehiculosFilter.propTypes = {
// myProp: PropTypes.string.isRequired
//};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehiculosFilter);
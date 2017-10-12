import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {VehiculoFormDisplay} from './VehiculoFormDisplay';
//import {store} from '../../../index';



function getAdById(ads, adId){
    const ad = ads.filter(a => a.id === adId);
    if(ad.length) return ad[0]; // filter returns an array
    return null;
}

function formatMarcas(lista){
    return lista.map(m=>{
        return {value:m, name:m[0].toUpperCase() + m.slice(1)}
    });

}

function mapStateToProps(state, ownProps) {
    console.log(state);
    console.log(ownProps);
    let newAd = {};
    const adId = ownProps.match.params.adId;
    if (adId && state.user.ads.length > 0){
        newAd = getAdById(state.user.ads, adId);
    }
    return {
        ad:newAd,
        marcas:formatMarcas(state.formData.marcas)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const VehiculoForm = connect(mapStateToProps, mapDispatchToProps)(VehiculoFormDisplay);
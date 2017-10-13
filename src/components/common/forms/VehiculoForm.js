import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {VehiculoFormDisplay} from './VehiculoFormDisplay';
import * as formActions from '../../../actions/formActions';
import {uploadSeveralFiles} from "../../../api/firebase";
import {message} from 'antd';

class VehiculoForm extends Component{
    state = {
        ad:{},
        marcas:[],
        files:[],
        urls:[],
        modelos:[]
    };

    componentWillReceiveProps(nP){
        let ad = nP.ad;
        if(nP.fotosFetched){
            ad["fotos"] = nP.fotos;
        }
        this.setState({
            ad:ad,
            marcas:nP.marcas,
            modelos:nP.modelos,
        });
    }

    changeModelos = (e) => {
        //console.log("change modelos: ",e.target.value);
        const id = e.target.value;
        const marca = this.props.allMarcas.filter(m=>m.key === id)[0];
        //console.log(marca);
        //seteamos la marca en el ad:
        let ad = this.state.ad;
        ad["marca"] = marca.value;

        this.setState({
            modelos:marca.models,
            ad
        });
    };

    setModelo = (e) => {
      let ad = this.state.ad;
      ad["modelo"] = e.target.value;
      this.setState({ad});
    };

    onChangeText = (e) => {
        let ad = this.state.ad;
        const field = e.target.name;
        const value = e.target.value;
        ad[field] = value;
        this.setState({ad});

    };

    getImages = (images) => {
        let files = this.state.files;
        let i = images.map(i=>{
            return i.file
        });
        this.setState({
            files:i
        });
        //console.log("soy contenedor",files)
    };

    onSave = (e) => {
     // alert("guardando");
        e.preventDefault();
        this.props.formActions.uploadFotos(this.state.ad.fotos);
        message.warning("cargando, espera un momento...");

    };

    uploadFotos = (fotos) => {
        uploadSeveralFiles(fotos)
            .then(r=>{
                console.log(r);
            });
    };

    render(){
        const {ad, marcas, files, modelos} = this.state;
        console.log("Fotos subidas:  ",ad);
        return(

            <div>
                <VehiculoFormDisplay
                    onChangeText={this.onChangeText}
                    ad={ad}
                    marcas={marcas}
                    modelos={modelos}
                    getImages={this.getImages}
                    onSave={this.onSave}
                    changeModelos={this.changeModelos}
                    setModelo={this.setModelo}
                />
            </div>
        );
    }
}

function getAdById(ads, adId){
    const ad = ads.filter(a => a.id === adId);
    if(ad.length) return ad[0]; // filter returns an array
    return null;
}

function formatMarcas(lista){
    return lista.map(m=>{
        return {value:m.key, name:m.title[0].toUpperCase() + m.title.slice(1)}
    });

}

function mapStateToProps(state, ownProps) {
    //console.log(state);
    //console.log(ownProps);
    let newAd = {
        titulo:"",
        descripcion:"",
        marca:"",
        modelo:"",
        year:"",
        version:"",
        fotos:[]
    };
    const adId = ownProps.match.params.adId;
    if (adId && state.user.ads.length > 0){
        newAd = getAdById(state.user.ads, adId);
    }

    return {
        ad:newAd,
        allMarcas:state.formData.marcas,
        marcas:formatMarcas(state.formData.marcas),
        modelos:[],
        fotos:state.formData.fotos,
        fotosFetched:state.formData.fotos.length > 0

    };
}

function mapDispatchToProps(dispatch) {
    dispatch(formActions.loadMarcas());
    return {
        formActions: bindActionCreators(formActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehiculoForm);
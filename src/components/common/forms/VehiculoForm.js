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
        modelos:[],
        validated:false,
        errors:{},
        success:{},
        images:null
    };

    componentWillReceiveProps(nP){
        let ad = nP.ad;
        //if(nP.fotosFetched){
          //  ad["fotos"] = nP.fotos;
        //}
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
        //let files = this.state.files;
        let i = images.map(i=>{
            return i.file
        });
        this.setState({
            files:i
        });
        //console.log("soy contenedor",files)
    };

    validateForm = (saveTry=false) => {
        const ad = this.state.ad;

        let errors={};
        let success={};
        //titulo
        if(ad.titulo !== "" && ad.titulo.length < 20) errors.titulo = "El titulo debe ser mayor a 10 caracteres";
        if(ad.titulo !== "" && ad.titulo.length > 20) success.titulo = true;
        if(saveTry && ad.titulo.length < 10) errors.titulo = "El titulo debe ser mayor a 10 caracteres";
        //descripción
        if(ad.descripcion !== "" && ad.descripcion.length < 140) errors.descripcion = "La descripción debe contener al menos 140 caracteres";
        if(ad.descripcion !== "" && ad.descripcion.length > 140) success.descripcion = true;
        if(saveTry && this.state.ad.descripcion.length < 140) errors.descripcion = "La descripción debe contener al menos 140 caracteres";
        //marca
        if(ad.marca !== "" && ad.marca === "") errors.marca = "Selecciona una marca";
        if(ad.marca !== "" && ad.marca !==  "") success.marca = true;
        if(saveTry && this.state.ad.marca === "") errors.marca = "Selecciona una marca";
        //modelo
        if(ad.modelo !== "" && ad.modelo === "") errors.modelo = "Selecciona un modelo";
        if(ad.modelo !== "" && ad.modelo !== "") success.modelo = true;
        if(saveTry && this.state.ad.modelo === "") errors.modelo = "Selecciona un modelo";
        //year
        if(ad.year !== "" && ad.year.length < 4) errors.year = "Escribe un año";
        if(ad.year !== "" && ad.year.length > 3) success.year = true;
        if(saveTry && this.state.ad.year.length < 4) errors.year = "Escribe un año";
        //versión
        if(ad.version !== "" && ad.version === "") errors.version = "Escribe la version de tu vehiculo";
        if(ad.version !== "" && ad.version !== "") success.version = true;
        if(saveTry && this.state.ad.version === "") errors.version = "Escribe la version de tu vehiculo";
        //fotos
        if(ad.fotos.length === 0) errors.fotos = "Agrega al menos 1 foto";
        if(saveTry && ad.fotos.length === 0) errors.fotos = "Agrega al menos 1 foto";



        this.setState({errors, success});
        if(Object.keys(errors).length === 0) this.setState({validated:true});
        return Object.keys(errors).length === 0;
    };

    onSave = (e) => {
        e.preventDefault();

        let ad  = this.state.ad;

        if(!this.validateForm(true)){
            message.error("Corrige los errores del formulario");
            return;
        }
        //comenzamos la carga de imagenes
        message.warning("cargando, espera un momento...");
        message.warning("Ya estamos terminando, espera un momento...");
        this.props.formActions.uploadFotos(this.state.files)
            .then(links=>{
                //console.log(links);
                ad.fotos = links;
                this.setState({ad});
                this.props.formActions.saveAd(ad)
                    .then(r=>{
                        message.success("¡Tu anuncio se ha publicado con éxito!");
                        this.props.history.push("/perfil");
                    })
                    .catch(e=>console.log(e));
            });
     // alert("guardando");


    };

    uploadFotos = (fotos) => {
        uploadSeveralFiles(fotos)
            .then(r=>{
                //console.log(r);
            });
    };

    render(){
        const {validated, success, errors, ad, marcas, modelos} = this.state;
        //console.log("Fotos subidas:  ",ad);
        return(

            <div>
                <VehiculoFormDisplay
                    validated={validated}
                    onChangeText={this.onChangeText}
                    ad={ad}
                    marcas={marcas}
                    modelos={modelos}
                    getImages={this.getImages}
                    onSave={this.onSave}
                    changeModelos={this.changeModelos}
                    setModelo={this.setModelo}
                    errors={errors}
                    validateForm={this.validateForm}
                    success={success}
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
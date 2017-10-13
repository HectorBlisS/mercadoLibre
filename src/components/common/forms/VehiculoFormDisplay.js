/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import Uploader from './Uploader';
import './vehiculoForm.css';

function countChar(word, number){
    if(word !== undefined){
        if(number - word.length < 0) return "=D";
        return number - word.length;
    }
}

export const VehiculoFormDisplay = ({validateForm, success, errors, ad, marcas, getImages, onChangeText, validated=false, loading=false, onSave, modelos, changeModelos, setModelo}) => {
    return (
        <div>
            <form onBlur={()=>validateForm(false)} onSubmit={onSave} style={styles.form}>
                <FormGroup
                    controlId="titulo"
                    validationState={errors.titulo ? "error":success.titulo ? "success":null}
                >
                    <ControlLabel>Titulo de tu anuncio</ControlLabel>
                    <FormControl
                        name="titulo"
                        value={ad.titulo}
                        onChange={onChangeText}
                        type="text"
                        placeholder="Ponle un titulo a tu anuncio"

                    />
                    <FormControl.Feedback />
                    {errors.titulo && <HelpBlock>{errors.titulo}</HelpBlock>}
                    <HelpBlock>{countChar(ad.titulo, 20)}</HelpBlock>
                </FormGroup>

                <FormGroup
                    validationState={errors.descripcion ? "error":success.descripcion ? "success":null}
                    controlId="descripcion">
                    <ControlLabel>Escribe la descripción de tu anuncio</ControlLabel>
                    <FormControl
                        name="descripcion"
                        value={ad.descripcion}
                        onChange={onChangeText}
                        style={{height:250}}
                        componentClass="textarea" placeholder="Descripción" />
                    {errors.descripcion && <HelpBlock>{errors.descripcion}</HelpBlock>}
                    <HelpBlock>{countChar(ad.descripcion, 140)}</HelpBlock>
                </FormGroup>

<div className="marca">



                <FormGroup
                    validationState={errors.marca ? "error":success.marca ? "success":null}
                    controlId="formControlsSelect">
                    <ControlLabel>Marca de tu vehiculo</ControlLabel>
                    <FormControl
                        onChange={changeModelos}
                        componentClass="select" placeholder="Selecciona la marca">
                        <option disabled>Selecciona la marca</option>
                        <option disabled value={ad.marca} default>{ad.marca}</option>
                        {marcas.map((m,index)=><option key={index} value={m.value}>{m.name}</option>)}
                    </FormControl>
                    {errors.marca && <HelpBlock>{errors.marca}</HelpBlock>}
                </FormGroup>

                <FormGroup
                    validationState={errors.marca ? "error":success.marca ? "success":null}
                    controlId="formControlsSelect">
                    <ControlLabel>Modelo de tu vehiculo</ControlLabel>
                    <FormControl
                        onChange={setModelo}
                        componentClass="select" placeholder="Selecciona el modelo">
                        <option disabled >Selecciona el modelo</option>
                        <option default disabled value={ad.modelo}>{ad.modelo}</option>
                        {modelos.map((m,index)=><option key={index} value={m.value}>{m.title}</option>)}
                    </FormControl>
                    {errors.modelo && <HelpBlock>{errors.modelo}</HelpBlock>}
                </FormGroup>

                <FormGroup
                    validationState={errors.year ? "error":success.year ? "success":null}
                    controlId="año"
                >
                    <ControlLabel>Año de tu vehiculo</ControlLabel>
                    <FormControl
                        name="year"
                        value={ad.year}
                        onChange={onChangeText}
                        type="number"
                        placeholder="Escribe el año de tu vehículo"
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                    validationState={errors.version ? "error":success.version ? "success":null}
                    controlId="version"
                >
                    <ControlLabel>Versión de tu vehiculo</ControlLabel>
                    <FormControl
                        name="version"
                        value={ad.version}
                        onChange={onChangeText}
                        type="text"
                        placeholder="Escribe la versión de tu vehículo"
                    />
                    <FormControl.Feedback />
                    {errors.version && <HelpBlock>{errors.version}</HelpBlock>}
                </FormGroup>


</div>

                <FormGroup
                    validationState={errors.fotos ? "error":success.fotos ? "success":null}
                >
                    <Uploader
                        images={ad.fotos}
                        getImages={getImages}
                    />
                    {errors.fotos && <HelpBlock>{errors.fotos}</HelpBlock>}

                </FormGroup>



                <Button
                    style={styles.button}
                    bsStyle="success"
                    disabled={loading}
                    type="submit">
                    Publicar
                </Button>

            {!validated && <Alert style={{maxWidth:320, margin:"0 auto", textAlign:"center"}} bsStyle="warning">
                <strong>¡Corrige los errores!</strong> <br/>antes de poder publicar.
            </Alert>}
            {validated && <Alert style={{maxWidth:320, margin:"0 auto", textAlign:"center"}} bsStyle="success">
                    <strong>¡Genial!</strong> <br/>ahora puedes publicar.
                </Alert>}

            </form>
        </div>
    );
};

//VehiculoFormDisplay.propTypes = {};

const styles = {
    form: {
        margin:'0 auto',
        width:'80%',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column'
    },
    button:{
        maxWidth:'200px',
        margin:'0 auto',
        marginBottom:'20px'
    }
};


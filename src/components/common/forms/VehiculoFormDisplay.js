/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import Uploader from './Uploader';
import './vehiculoForm.css';

export const VehiculoFormDisplay = ({ad, marcas, getImages, onChangeText, validated=true, onSave, modelos, changeModelos, setModelo}) => {
    return (
        <div>
            <form onSubmit={onSave} style={styles.form}>
                <FormGroup
                    controlId="titulo"
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
                    <HelpBlock>¡Escoge un titulo que llame la atención!.</HelpBlock>
                </FormGroup>

                <FormGroup controlId="descripcion">
                    <ControlLabel>Escribe la descripción de tu anuncio</ControlLabel>
                    <FormControl
                        name="descripcion"
                        value={ad.descripcion}
                        onChange={onChangeText}
                        style={{height:250}}
                        componentClass="textarea" placeholder="Descripción" />
                </FormGroup>

<div className="marca">



                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Marca de tu vehiculo</ControlLabel>
                    <FormControl
                        onChange={changeModelos}
                        componentClass="select" placeholder="Selecciona la marca">
                        <option disabled>Selecciona la marca</option>
                        <option disabled value={ad.marca} default>{ad.marca}</option>
                        {marcas.map((m,index)=><option key={index} value={m.value}>{m.name}</option>)}
                    </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Modelo de tu vehiculo</ControlLabel>
                    <FormControl
                        onChange={setModelo}
                        componentClass="select" placeholder="Selecciona el modelo">
                        <option disabled >Selecciona el modelo</option>
                        <option default disabled value={ad.modelo}>{ad.modelo}</option>
                        {modelos.map((m,index)=><option key={index} value={m.value}>{m.title}</option>)}
                    </FormControl>
                </FormGroup>

                <FormGroup
                    controlId="año"
                >
                    <ControlLabel>Año de tu vehiculo</ControlLabel>
                    <FormControl
                        name="year"
                        value={ad.year}
                        onChange={onChangeText}
                        type="text"
                        placeholder="Escribe el año de tu vehículo"
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup
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
                </FormGroup>


</div>


                <Uploader
                    images={ad.fotos}
                    getImages={getImages}
                />

                <Button
                    style={styles.button}
                    bsStyle="success"
                    disabled={!validated}
                    type="submit">
                    Publicar
                </Button>

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


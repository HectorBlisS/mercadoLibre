/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import './vehiculoForm.css';

export const VehiculoFormDisplay = ({ad, marcas}) => {
    return (
        <div>
            <form style={styles.form}>
                <FormGroup
                    controlId="titulo"
                >
                    <ControlLabel>Titulo de tu anuncio</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Ponle un titulo a tu anuncio"
                    />
                    <FormControl.Feedback />
                    <HelpBlock>¡Escoge un titulo que llame la atención!.</HelpBlock>
                </FormGroup>

                <FormGroup controlId="descripcion">
                    <ControlLabel>Escribe la descripción de tu anuncio</ControlLabel>
                    <FormControl
                        style={{height:400}}
                        componentClass="textarea" placeholder="Descripción" />
                </FormGroup>

<div className="marca">



                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Marca de tu vehiculo</ControlLabel>
                    <FormControl componentClass="select" placeholder="Selecciona la marca">
                        <option disabled default>Selecciona la marca</option>
                        {marcas.map((m,index)=><option key={index} value={m.value}>{m.name}</option>)}
                    </FormControl>
                </FormGroup>

                <FormGroup
                    controlId="modelo"
                >
                    <ControlLabel>Modelo de tu vehículo</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Escribe el modelo de tu vehículo"
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                    controlId="año"
                >
                    <ControlLabel>Año de tu vehiculo</ControlLabel>
                    <FormControl
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
                        type="text"
                        placeholder="Escribe la versión de tu vehículo"
                    />
                    <FormControl.Feedback />
                </FormGroup>


</div>


                <Button
                    style={styles.button}
                    bsStyle="success"
                    disabled={true}
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


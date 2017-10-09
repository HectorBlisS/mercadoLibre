/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';


export const VehiculoFormDisplay = ({ad}) => {
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
                    <FormControl componentClass="textarea" placeholder="Descripción" />
                </FormGroup>

                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Titulo de tu anuncio</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Ponle un titulo a tu anuncio"
                    />
                    <FormControl.Feedback />
                    <HelpBlock>¡Escoge un titulo que llame la atención!.</HelpBlock>
                </FormGroup>

                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Titulo de tu anuncio</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Ponle un titulo a tu anuncio"
                    />
                    <FormControl.Feedback />
                    <HelpBlock>¡Escoge un titulo que llame la atención!.</HelpBlock>
                </FormGroup>

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


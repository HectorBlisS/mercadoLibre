/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {VehiculoCard} from '../common/VehiculoCard';

const lista = [
    1,2,3,4,5,6,7,8,9
];

export const VehiculosListDisplay = ({props}) => {
    return (
        <div style={styles.padre} >
            <h2>Lista de Vehiculos</h2>
            <div style={styles.container}>


                    {lista.map((i,index)=>{
                        return(
                            <VehiculoCard

                            />
                        );
                    })}



            </div>

        </div>
    );
};

//VehiculosListDisplay.propTypes = {};

const styles = {
    padre:{
        width:"80%",
        margin:"0 auto",
        textAlign:"center"
    },
    container:{
        alignItems:"center",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between"
    }
};


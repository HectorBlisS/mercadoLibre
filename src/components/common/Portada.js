/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';


export const Portada = ({titulo, tipo}) => {
    return (
        <div
            style={tipo!=="vehiculo"?{backgroundImage:"lol"}:null}
            className="portada"
        >
            <h2>{titulo}</h2>
        </div>
    );
};

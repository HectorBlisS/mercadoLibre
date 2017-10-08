/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Spin} from 'antd';


export const MisAnunciosDisplay = ({ads, fetched}) => {
    return (
        <div style={{textAlign:'center'}}>
            {fetched ?
                <div>
                    {ads.map(a=><span key={a.id}>{a.titulo}</span>)}
                </div>
                :
                <Spin/>
            }

        </div>
    );
};

//MisAnunciosDisplay.propTypes = {};

const styles = {
    name: {}
};


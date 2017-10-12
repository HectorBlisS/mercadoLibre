/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import { Card } from 'antd';



export const VehiculoCard = ({props}) => {
    return (
        <Card style={styles.card} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://http2.mlstatic.com/D_NQ_P_641604-MLM26116454615_102017-C.jpg" />
            </div>
            <div
                style={styles.description}
                className="custom-card">
                <h4>$ 80,000.00</h4>
                <p>2015 | LTE</p>
                <p>Dodge | Challenger</p>
            </div>
        </Card>
    );
};

//VehiculoCard.propTypes = {};

const styles = {
    card:{
        margin:"10px",
        width: "100%",
        maxWidth:"240px"
    },
    description: {
        padding:"10px",
        textAlign:"left"
    }
};


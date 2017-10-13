/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import "./forms.css";

export const Pic = ({url, onClickUpload, onClickRemove}) => {
    return (
        <div>
            {url?
                <div  className="picture">
                    <div className="remove-cover"
                        onClick={()=>onClickRemove(url)}
                    ></div>
                    <img width="100%"
                         height="100%"
                        src={url} alt="picture"/>
                </div>

                :
                <input
                    accept="image/*"
                    type="file"
                    multiple
                    onChange={onClickUpload}
                    style={styles.square}
                ></input>
            }
        </div>
    );
};

//Pic.propTypes = {};

const styles = {
    square: {
        width:"100px",
        height:"100px",
        backgroundColor:"white",
        backgroundImage:"url('https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png')",
        backgroundSize:"cover",
        border:"1px dashed grey",
        margin:"10px",
        cursor:"pointer"

    }
};


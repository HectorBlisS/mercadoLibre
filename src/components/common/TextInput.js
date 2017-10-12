import React from 'react';
import PropTypes from 'prop-types';
import Label from './';

const TextInput = ({htmlId, name, label, type="text", required=false, onChange, placeholder, value, error, ...props}) => {
    return(
        <div style={{marginBottom:16}}>
            <Label htmlFor={htmlId} label={label} required={required}/>
            <input
                type={type}
                id={htmlId}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={error && {border: "solid 1px red"}}
                {...props}
            />
            {children}
            {error && <div className="error" style={{color: "red"}}>
                {error}
            </div>}
        </div>
    );
};

TextInput.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

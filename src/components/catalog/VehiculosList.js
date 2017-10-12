//import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {VehiculosListDisplay} from './VehiculosListDisplay';

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const VehiculosList = connect(mapStateToProps, mapDispatchToProps)(VehiculosListDisplay);
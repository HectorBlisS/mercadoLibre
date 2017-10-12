import {combineReducers} from 'redux';

function marcasReducer(state=[], action){
    switch (action.type){
        case "LOAD_MARCAS_SUCCESS":
            return action.marcas
        default:
            return state;
    }
}

export const formDataReducer = combineReducers({
   marcas: marcasReducer
});



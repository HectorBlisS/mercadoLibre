import {combineReducers} from 'redux';
import anuncios from './AdsReducer';

const rootReducer = combineReducers({
    anuncios
});

export default  rootReducer;
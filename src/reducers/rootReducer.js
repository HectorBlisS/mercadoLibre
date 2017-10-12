import {combineReducers} from 'redux';
import {userReducer} from "./userReducer";
import {formDataReducer} from './formDataReducer';

export const rootReducer = combineReducers({
    user:userReducer,
    formData: formDataReducer
});
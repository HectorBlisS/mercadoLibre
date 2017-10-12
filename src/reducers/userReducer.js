import {
    GET_USER_INFO_SUCCESS,
    GET_USER_ADS_SUCCESS
} from '../actions/userActions';
import {combineReducers} from 'redux';


export function userAds(state=[], action){
    switch(action.type){
        case GET_USER_ADS_SUCCESS:
            return action.items;

        case "CERRAR_SESION_SUCCESS":
            return [];


        default:
            return state;
    }
}

export function userInfoReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO_SUCCESS:
            return action.user;
        case "CERRAR_SESION_SUCCESS":
            return {};
        default:
            return state;
    }
}

export const userReducer = combineReducers({
    profile: userInfoReducer,
    ads: userAds
});